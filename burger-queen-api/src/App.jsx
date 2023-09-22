//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login } from './Login'
import { ProductList } from './ProductList'
import { Breakfast } from './Breakfast'
import { Lunch } from './Lunch'



export function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/ProductList" element={< ProductList />} />
        
      </Routes>

    </>
  )
}
