import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from './apiRequests';
import './Login.css';


export function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  //Eliminado useState Error
  const navigate = useNavigate();

  // Agregar un evento click al botón "Log In"
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email.trim()) {
      alert('ingrese su correo ')
    }

    if (!data.password.trim()) {
      alert('ingrese su contraseña')
    }

    if (data.email && data.password) {
      loginUser(data.email, data.password).then((response) => {

        localStorage.setItem('token', response.accessToken)
        navigate("/ProductList");
      }).catch((error) => {
        //Manejar el error aquí, por ejemplo, mostrar una alerta
        console.error('Error en la solicitud:', error);
        alert('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
      });
    }
  };

  return (
    <>
      <img className='logobq' src='./assetsburgerqueen/burger-queen-logo.png' alt='logo' />
      <section className='containerLogIn'>
        <form className='FormLogIn' onSubmit={handleSubmit}>
          <label className='label-input'>Email</label>
          <input
            type='email'
            className='formEmail'
            placeholder='Email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label className='label-input'>Password</label>
          <input
            type='password'
            className='formPassword'
            placeholder='Password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className='LogIn'>Log In</button>
        </form>

      </section>
    </>
  );
}
