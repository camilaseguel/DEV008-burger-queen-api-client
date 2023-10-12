import { ProductList } from './ProductList';
import { ProductWaiter } from './ProductWaiter';
import { getOrders } from './apiRequests';
import { useState, useEffect } from 'react';

import './viewChef.css'


export function ViewChef() {
  const [view, setView] = useState([]);
  console.log(view);

  useEffect(() => {
    getOrders().then((result) => {
      setView(result); // Almacena los resultados en el estado
    });
  }, []);

  return (
    <>
      <header className='title-viewchef'>
        <h2>Orders to prepare</h2>
      </header>
      <section className='container-list-order'>
        {view.map((order) => (
          <div className='order-list' key={order.id}>
            Id: {order.id} Client: {order.clientName} Products:{' '}
            {Object.keys(order.products).map((productId) => (
              <div key={productId}>
                Product Name: {order.products[productId].product.name}
                Quantity: {order.products[productId].qty}
              </div>
            ))}{' '}
            Status: {order.status} dateEntry: {order.dateEntry}
            <label className='containerBox'>Ready
            <input className='checkBox' type='checkbox' name='myCheckbox' defaultChecked={false} />
            <span className='checkmark'></span>
            </label>
          </div>
        ))}
      </section>
    </>
  );
}
