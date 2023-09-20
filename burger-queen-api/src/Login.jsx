import { useState } from 'react';
import { loginUser } from './apiRequests';

export function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Agregar un evento click al botón "Log In"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email && !data.password) {
      // Se debe llamar a la función handleSubmit para enviar el formulario

      alert('Completar campos vacios---');
    }
    if (!data.email && data.password) {
      alert('Completar campos vacios-.....-');
    }
    if (data.email && data.password) {
      loginUser(data.email, data.password)
    }
  };

  return (
    <>
      <img className='logobq' src='./assetsburgerqueen/logoburgerqueen.png' />
      <div className='containerLogIn'>
        <form className='FormLogIn' onSubmit={handleSubmit}>
          <input
            type='email'
            className='formEmail'
            placeholder='Email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type='password'
            className='formPassword'
            placeholder='Password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className='LogIn'>Log In</button>
        </form>
      </div>
    </>
  );
}
