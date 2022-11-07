const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 379,
    img:'/images/iphon12.png',
    stock: 5,
    description:"Apple iPhone 12 (256 GB) - Negro",
    category: "Celulares"

  },
  {
    id: "2",
    name: "iphone 11",
    price: 259,
    img:'/images/iphone11.png',
    stock: 6,
    description:"iPhone 11 (128 GB) - Rojo",
    category: "Celulares"

  },
  {
    id: "3",
    name: "iphone 10",
    price: 185,
    img:'/images/iphone-10.png',
    stock: "2",
    description:"iPhone X (64 GB) - Plata",
    category: "Celulares"

  },
  {
    id: "4",
    name: 'iphone 8"',
    price: 111,
    img:'/images/iphone-8.png',
    stock: "4",
    description:"iPhone 8 64 GB gris espacial",
    category: "Celulares"

  },
  {
    id: "5",
    name: 'MacBook Air 14"',
    price: 630,
    img:'/images/mackbook-air-2022.webp',
    stock: "2",
    description:"iPhone X (64 GB) - Plata",
    category: "MacBook"

  },
  {
    id: "6",
    name: 'MacBook Air 13"',
    price: 520,
    img:'/images/mackbook-air-13-2022.webp',
    stock: "2",
    description:"Apple MacBook Pro (13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM) - Gris espacial",
    category: "MacBook"

  }, 
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(product => {
              return product.id === id
          }))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.filter(product => product.category === categoryId))
      }, 500)
  })
}