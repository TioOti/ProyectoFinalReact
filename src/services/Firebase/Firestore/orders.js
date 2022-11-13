import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '..'
import { useCart } from '../../../context/CartContext'


export const useCreateOrderInFirestore = () =>{
    const {cart, totalPrice} = useCart()

    const orderCreation = async (buyer) =>{

        try {
            const orderObj ={
                buyer: buyer,
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: totalPrice
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsReference = collection(db, 'products')

            
            const productsAddedFromFireStore = await getDocs(query(productsReference, where(documentId(), 'in', ids)))
                        
            const { docs } = productsAddedFromFireStore

            docs.forEach(doc =>{

                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity}) 
                } else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0 ){
                
                await batch.commit()

                const orderReference = collection(db, 'orders')

                const orderAdded = await addDoc(orderReference, orderObj)

                return{
                    result: 'success', orderId: orderAdded.id
                }
            } else{
                return{
                    result: 'outOfStock', outOfStockItems: outOfStock
                }
            }

        } catch (error) {
            console.error(error);
            
        }
    }
    return{
        orderCreation
    }
}
