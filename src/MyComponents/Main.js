import React from 'react'

export default function Main({ products, setCart }) {
  return (
    <div className='col-12'>
      <div
        className='col-12 mb-4'
        style={{
          height: '400px',
          backgroundImage: `url('https://icms-image.slatic.net/images/ims-web/9c68ba13-46bb-40d1-a084-ef15540a92cb.jpg')`,
        }}
      >
        <div className='container text-center p-5 fsm'>
          <h1>
            Find New
            <br />
            And Buy Today's Special 🎁
          </h1>
          <p className='#'>All product in one place 🛒</p>
        </div>
        <div className='row'>
          <button
            type='button'
            className='span4 text-white button1 offset4 centered px-4 btn  border'
            style={{ float: 'left', backgroundColor: '#008cba' }}
          >
            Start Shopping
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='row m-0'>
          <>
            {products.length === 0
              ? 'No products to display'
              : products.map((product, index) => {
                  return (
                    <Product setCart={setCart} product={product} key={index} />
                  )
                })}
          </>
        </div>
      </div>
    </div>
  )
}

const Product = ({ product, setCart }) => (
  <div className='col-4 mb-2 mt-2'>
    <div className='card'>
      <div className='card-header bg-white'>
        <div className='row'>
          <div className='col mb-3' style={{ overflow: `hidden` }}>
            <img className='product-img' src={product.imageURL} />
          </div>
        </div>
        <h5 className='card-title text-primary'>
          {product.title.toUpperCase()}{' '}
          <small className='text-danger'>Price: Rs {product.price}</small>
        </h5>

        <p className='card-text mb-4'>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          <div className='row '>
            <button
              onClick={() => {
                setCart(product)
              }}
              type='button'
              style={{ position: 'relative' }}
              class='btn btn btn-light btn-block '
            >
              Add To Cart 🛒
            </button>
          </div>
        </p>
      </div>
    </div>
  </div>
)
