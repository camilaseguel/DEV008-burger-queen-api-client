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