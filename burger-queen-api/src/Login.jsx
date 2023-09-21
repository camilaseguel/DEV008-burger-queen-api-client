import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from './apiRequests';
import { OrderWaiter } from './OrderWaiter';

export function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  // Agregar un evento click al botón "Log In"
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email && data.password) {
      loginUser(data.email, data.password)
    }

    if (data.email === "" || data.password === "") {
      setError(true)
      return
    }
    setError(false)
    navigate("/OrderWaiter");
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
          <div className='alertError'>
            {error && <p>All fields are required. complete please</p>}
          </div>
          <button className='LogIn'>Log In</button>
        </form>

      </div>
    </>
  );
}
