import { ProductList } from './ProductList';
// import { OrderWaiter } from './OrderWaiter';
import { useState } from 'react';

import './ProductWaiter.css';

export function ProductWaiter() {
  const [order, setOrder] = useState({
    clientName: '',
    products: [],
  });

  const handleAdd = (productToAdd) => {
    // Verifica si el producto ya está en la lista

    const existingProduct = order.products.find(
      (orderItem) => orderItem.product.id === productToAdd.id
    );

    if (existingProduct) {
      // Si el producto ya existe, aumenta la cantidad
      const updatedProducts = order.products.map((orderItem) => {
        if (orderItem.product.id === productToAdd.id) {
          return { ...orderItem, qty: orderItem.qty + 1 };
        }
        return orderItem;
      });

      setOrder({ ...order, products: updatedProducts });
    } else {
      // Si el producto no existe, lo agrégamos y comenzamos con 1
      setOrder({
        ...order,
        products: [...order.products, { product: productToAdd, qty: 1 }],
      });
    }
  };
  const handleDelete = (productToDelete) => {
    // Filtrar los productos para eliminar el producto deseado
    const updatedProducts = order.products.filter(
      (orderItem) => orderItem.product.id !== productToDelete.id
    );

    // Actualizar el estado con la lista de productos actualizada
    setOrder({
      ...order,
      products: updatedProducts,
    });
  };
  // Calcula la suma total de precios

  const totalPrice = order.products.reduce((total, orderItem) => {
    return total + orderItem.product.price * orderItem.qty;
  }, 0);

  return (
    <>
      <header className='title-productAdmin'>
        <img
          className='logobqac'
          src='./assetsburgerqueen/letraslogo.png'
          alt='logo'
        />
        <h2>Product List/WAITER</h2>
      </header>
      <div className='container-product'>
        <table>
          <thead>
            <tr className='title-header'>
              <th className='columns'>Name</th>
              <th className='columns'>Type</th>
              <th className='columns'>Price</th>
              <th className='columns'>Image</th>
              <th className='columns'>Add</th>
            </tr>
          </thead>
          <tbody>
            <ProductList onAdd={handleAdd} />
          </tbody>
        </table>
      </div>

      <section className='styleOrder'>
        <div className='orderWaiter'>
          <label className='label-order'>Client Name</label>
          <input
            type='text'
            className='input-order'
            placeholder='client name'
          ></input>
          <label className='label-order'>N°Table</label>
          <input
            type='text'
            className='input-order'
            placeholder='number table'
          ></input>
        </div>

        <ul className='container-order'>
          {order.products.map((orderItem) => {
            return (
              <li className='order-list' key={orderItem.id}>
                {orderItem.product.name} ({orderItem.qty}) Price:
                {orderItem.product.price}
                <button className='btn-remove' onClick={() => handleDelete(orderItem.product)}>Remove</button>
              </li>
            );
          })}
          <li className='total-price'>Total Price: ${totalPrice}</li>
        </ul>
        <button className='btn-sendOrder'>Send Order</button>
      </section>
    </>
  );
}
