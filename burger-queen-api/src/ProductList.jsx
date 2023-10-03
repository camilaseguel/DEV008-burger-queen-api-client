import { getProducts } from "./apiRequests"
import { useEffect, useState } from "react"
import './ProductList.css';

export function ProductList({onAdd}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result); // Almacena los resultados en el estado
    });
  }, []);


  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>

          <td className="columns">{product.name}</td>
          <td className="columns">{product.type}</td>
          <td className="columns">{product.price}</td>
          <td className="columns"><img className="img-product" src={product.image} alt="Image product" /></td>
          <td className="columns"><button onClick={() => onAdd(product)} className="btn-add">Add</button></td>
        </tr>
      ))}


    </>
  );
}