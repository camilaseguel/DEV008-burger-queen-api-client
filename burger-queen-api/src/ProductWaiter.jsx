import { ProductList } from './ProductList'
// import { OrderWaiter } from './OrderWaiter';
import { useState } from 'react';

import './ProductWaiter.css';

export function ProductWaiter() {

  const [order, setOrder] = useState({
    clientName: "",
    products: [],
  });

  const handleAdd = (product) => {
    setOrder({
      ...order, products: [...order.products, { product: product, qty: 1, }]
    })
  }

  return (
    <>

      <header className="title-productAdmin">
        <img className='logobqac' src='./assetsburgerqueen/letraslogo.png' alt='logo' />
        <h2>Product List/WAITER</h2>
      </header>
      <div className='container-product'>
        <table >
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
      </div >

      <section>
        {/* <OrderWaiter /> */}
        <div className='orderWaiter'>
          <label className='label-order' >Client Name</label>
          <input type='text' className='input-order' placeholder='client name'></input>
          <label className='label-order'>N°Table</label>
          <input type='text' className='input-order' placeholder='number table'></input>
          
        </div>

        <ul className='container-order'>
          {order.products.map((orderItem) => {
        
               return <li key={orderItem.id}>
              {orderItem.product.name} ({orderItem.qty}) Price:{orderItem.product.price}
            </li>
            // return <li>
            //   {orderItem.product.name} ({orderItem.qty}) Price:{orderItem.product.price} 

            // </li> 

          })}
        </ul>
      </section>
    </>
  )
}