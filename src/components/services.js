const products =[
    {id: "1", name: "Vacio", price: 4400, category: "vacuno" },
    {id: "2", name: "Colita de cuadril", price: 4990, category: "vacuno" },
    {id: "3", name: "Lomo", price: 5500, category: "vacuno" },
    {id: "4", name: "Pechito de cerdo", price: 1800, category: "porcino" },
    {id: "5", name: "Bondiola", price: 3300, category: "porcino" },
    {id: "6", name: "Costillita", price: 2200, category: "porcino" },
    {id: "7", name: "Suprema", price: 3400, category: "avicola" },
    {id: "8", name: "Pata y muslo", price: 1100, category: "avicola" },
    {id: "9", name: "Pollo entero", price: 1150, category: "avicola" },
        
];
//get product
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = product.find((p) => p.id === id);
  
        if (product) {
          resolve(product);
        } else {
          reject("Product not found");
        }
      }, 1000);
    });
  };
  
  // getProducts
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };