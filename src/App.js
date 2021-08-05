import './App.css'
import { useState, useEffect } from 'react'
import Header from './MyComponents/Header'
import Main from './MyComponents/Main'
import { Footer } from './MyComponents/Footer'
import { datas } from './MyComponents/directory/directory-product'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCarts] = useState([])

  const setCart = item => {
    setCarts([...cart, item])
  }
  useEffect(() => {
    setProducts(datas)
  }, [])
  return (
    <>
      <Header cart={cart} />
      <Main products={products} setCart={setCart} />
      <Footer />
    </>
  )
}

export default App
