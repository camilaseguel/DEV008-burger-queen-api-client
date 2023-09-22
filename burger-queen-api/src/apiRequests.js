
export function loginUser(email, password) {
 return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  }).then((result) => {
    return result.json();
  })
   
}
//parametro sería el token? el token es un endpoint?
export function orders() {
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
