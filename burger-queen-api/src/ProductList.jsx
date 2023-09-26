import { getProducts } from "./apiRequests"
import { useEffect, useState } from "react"

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result); // Almacena los resultados en el estado
    });
  }, []);

  return (
    <>
      <h2>BurgerQueen</h2>
      <section>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p><strong>Product:</strong> {product.name}</p>
              <p><strong>Type:</strong> {product.type}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <img src={product.image} alt="Image product" />
              {/* <p>{product.image}</p> */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}