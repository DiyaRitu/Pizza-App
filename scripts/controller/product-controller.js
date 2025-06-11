//glue between view and model
import productOperations from "../services/product-operations.js";

async function loadPizzas(){
   const pizza = await productOperations.loadProducts();
   console.log('Pizzas are', pizza);
}
loadPizzas();