import './App.css'
import { useState, useEffect } from 'react'
import Header from './MyComponents/Header'
import Main from './MyComponents/Main'
import { Footer } from './MyComponents/Footer'
import { datas } from './MyComponents/directory/directory-product'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCarts] = useState([])

  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCarts(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCarts([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist.qty === 1) {
      setCarts(cartItems.filter(x => x.id !== product.id))
    } else {
      setCarts(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  const setCart = item => {
    setCarts([...cartItems, item])
  }
  useEffect(() => {
    setProducts(datas)
  }, [])

  return (
    <>
      <Header cartItems={cartItems} />
      <Main
        cartItems={cartItems}
        onRemove={onRemove}
        onAdd={onAdd}
        products={products}
        setCart={setCart}
      />
      <Footer />
    </>
  )
}

export default App
