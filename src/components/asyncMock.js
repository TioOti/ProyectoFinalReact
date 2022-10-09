const products = [
  {
    id: "1",
    nombre: "iphone 12",
    precio: "379.000",
    img:'/images/iphon12.png',
    stock: "5",
    descripcion:"Apple iPhone 12 (256 GB) - Negro",
    categoria: "Celulares"

  },
  {
    id: "2",
    nombre: "iphone 11",
    precio: "259.900",
    img:'/images/iphone11.png',
    stock: "6",
    descripcion:"iPhone 11 (128 GB) - Rojo",
    categoria: "Celulares"

  },
  {
    id: "3",
    nombre: "iphone 10",
    precio: "135.000",
    img:'/images/iphone-10.png',
    stock: "2",
    descripcion:"iPhone X (64 GB) - Plata",
    categoria: "Celulares"

  },
  {
    id: "4",
    nombre: 'iphone 8"',
    precio: "630.000",
    img:'/images/iphone-8.png',
    stock: "4",
    descripcion:"iPhone 8 64 GB gris espacial",
    categoria: "Celulares"

  },
  {
    id: "5",
    nombre: 'MacBook Air 14"',
    precio: "630.000",
    img:'/images/mackbook-air-2022.webp',
    stock: "2",
    descripcion:"iPhone X (64 GB) - Plata",
    categoria: "MacBook"

  },
  {
    id: "6",
    nombre: 'MacBook Air 13"',
    precio: "630.000",
    img:'/images/mackbook-air-13-2022.webp',
    stock: "2",
    descripcion:"  Apple MacBook Pro (13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM) - Gris espacial",
    categoria: "MacBook"

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
          resolve(products.filter(product => product.categoria === categoryId))
      }, 500)
  })
}