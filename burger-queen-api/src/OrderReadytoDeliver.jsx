import { useEffect, useState } from "react"

//El mesero debe de ver las ordenes que ya estan listas 
import { orderReady } from "./apiRequests"
import { ViewChef } from './ViewChef';
import { getOrders } from "./apiRequests"


export function OrderReadytoDeliver({ completedOrders }) {
  return (
    <div>
      <header className="title-orderhistory">
        <h2>Order History</h2>
      </header>
      <section className="container-list-order">
        {completedOrders && completedOrders.length > 0 ? (
          completedOrders.map((order) => (
            <div className="order-list" key={order.id}>
              Id: {order.id} Client: {order.clientName} Products: { /* ... */ }
              Status: {order.status} dateEntry: {order.dateEntry}
              {order.dateProcessed && order.status === 'completed' && (
                <div>
                  Time Taken to Prepare: {calculateTimeTaken(order.dateEntry, order.dateProcessed)} minutes
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No completed orders available.</p>
        )}
      </section>
    </div>
  );
}

