export function loginUser(email, password) {
  return fetch('http://localhost:8080/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    return response.json();

  })
    .then((response) => {
      if (typeof response === "string") {
        throw new Error(response);
      }
      return response
    })

}
//parametro sería el token? el token es un endpoint?
export function getProducts() {
  const token = localStorage.getItem('token')

  return fetch('http://localhost:8080/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },

  })
    .then((response) => {
      return response.json()
    })

}

export function sendOrder(order) {
  const token = localStorage.getItem('token')
  return fetch('http://localhost:8080/orders', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  }).then((response) => {
    return response.json();

  })
    .then((response) => {
      if (typeof response === "string") {
        throw new Error(response);
      }
      return response
    })

}

export function getOrders() {
  const token = localStorage.getItem('token')

  return fetch('http://localhost:8080/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },

  })
    .then((response) => {
      return response.json()
    })

}

export function orderReady() {
  const token = localStorage.getItem('token');

  return fetch('http://localhost:8080/orders/2', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      "status": "delivered",
      "dateProcessed": "2022-03-05 16:00"
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al actualizar la orden');
    }
    return response.json();
  })
  .then((updatedOrder) => {
    // Aquí puedes acceder a la orden actualizada
    console.log('Orden actualizada:', updatedOrder);
    return updatedOrder;
  })
  .catch((error) => {
    console.error('Error:', error);
    throw error;
  });
}
