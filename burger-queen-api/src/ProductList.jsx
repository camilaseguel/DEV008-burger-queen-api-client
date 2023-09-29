import { getProducts } from "./apiRequests"
import { useEffect, useState } from "react"
import { ProductAdmin } from "./ProductAdmin";
import './ProductList.css';

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result); // Almacena los resultados en el estado
    });
  }, []);

  return (
    <>
      {/* <ProductAdmin /> */}
      <header className="title-productlist">
        <h2>BurgerQueen. Product List</h2>
      </header>
      
      <section className="container-product">
        
          {products.map((product) => (
            <li key={product.id}>
            
     
      <section className="header-productlist">
        <div className="header-productlist-item">Name Product</div>
        <p> {product.name}</p>
        <div className="header-productlist-item">Type</div>
        <p> {product.type}</p>
        <div className="header-productlist-item">Price</div>
        <p>{product.price}</p>
        <div className="header-productlist-item">Image</div>
        <img className="img-product" src={product.image} alt="Image product" />
        <div className="header-productlist-item">Add</div>
        <button className="btn-added">Add</button>
        <div className="header-productlist-item">Delete</div>
        <button className="btn-added">Delete</button>
      </section>
           
            </li>
          ))}
        
      </section >
    </>
  );
}