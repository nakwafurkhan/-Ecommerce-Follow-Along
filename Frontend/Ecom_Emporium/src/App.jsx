import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginPage from './components/Login'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ProductForm from './components/ProductForm'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/registration" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
          <Route path="/admin" element={<ProductForm></ProductForm>}></Route>
        </Routes>

    </>
  )
}

export default App
