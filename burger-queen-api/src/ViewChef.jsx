import { ProductList } from './ProductList';
import { ProductWaiter } from './ProductWaiter';
import { getOrders } from './apiRequests';
import { useState, useEffect } from 'react';

import './viewChef.css'

export function ViewChef() {
  const [view, setView] = useState([]);

  useEffect(() => {
    getOrders().then((result) => {
      // Agregar un campo para almacenar el tiempo de preparación
      const ordersWithTime = result.map((order) => ({
        ...order,
        dateProcessed: null, // Inicialmente nulo
      }));
      setView(ordersWithTime);
    });
  }, []);

  const markAsCompleted = (orderId) => {
    const updatedView = view.map((order) => {
      if (order.id === orderId) {
        // Marcar el pedido como completado y registrar la hora actual
        return {
          ...order,
          status: 'completed',
          dateProcessed: new Date(),
        };
      }
      return order;
    });
    setView(updatedView);
  };

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
            {order.status !== 'completed' && (
              <button className='markAsCompleted'onClick={() => markAsCompleted(order.id)}>
                Order Ready!
              </button>
            )}
            {order.dateProcessed && order.status === 'completed' && (
              <div>
                Time Taken to Prepare: {calculateTimeTaken(order.dateEntry, order.dateProcessed)} minutes
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

// Función para calcular el tiempo transcurrido en minutos
function calculateTimeTaken(entryTime, completionTime) {
  const diffInMilliseconds = completionTime - new Date(entryTime);
  return Math.round(diffInMilliseconds / 60000); // 1 min = 60000 ms
}
