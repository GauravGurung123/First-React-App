import React from 'react'

export default function Main({ products, cartItems, onAdd, onRemove }) {
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
                  return <Product onAdd={onAdd} product={product} key={index} />
                })}
          </>
        </div>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  )
}

const Product = ({ product, onAdd }) => (
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
              onClick={() => onAdd(product)}
              type='button'
              style={{ position: 'relative' }}
              class='btn btn btn-light btn-block mt-4'
            >
              Add To Cart 🛒
            </button>
          </div>
        </p>
      </div>
    </div>
  </div>
)
const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const shippingPrice = itemsPrice > 1000 ? 50 : 0
  const totalPrice = itemsPrice + shippingPrice
  return (
    <div
      className='modal fade bd-example-modal-lg '
      tabindex='-1'
      role='dialog'
      aria-labelledby='myLargeModalLabel'
      aria-hidden='true'
      style={{ width: `100%` }}
    >
      <div className='modal-dialog modal-lg pt-5 '>
        <div className='modal-content bg-dark '>
          <div className='modal-header'>
            <h5 className='modal-title text-light'>
              Your Shopping Cart ({cartItems.length})
            </h5>
            <button
              type='button'
              className='close text-danger'
              data-dismiss='modal'
              aria-label='Close'
            >
              &times;
            </button>
          </div>

          <div className='modal-body'>
            <table
              class='table table-hover table-dark'
              style={{ width: '100%' }}
            >
              <thead>
                <tr>
                  <th scope='col'>S.N.</th>
                  <th scope='col'>PID</th>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Shipping</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {cartItems.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>
                        {item.qty}
                        <button
                          onClick={() => onAdd(item)}
                          className='btn btn-sm ml-2'
                        >
                          ➕
                        </button>

                        <button
                          onClick={() => onRemove(item)}
                          className='btn btn-sm'
                        >
                          ❌
                        </button>
                      </td>
                      <td>Rs {item.price.toFixed(2)}</td>
                      <td>Rs: {shippingPrice.toFixed(2)}</td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
          <>
            {cartItems.length === 0 && (
              <p className='text-center font-weight-bold blink_me text-danger'>
                Your Shopping Cart is empty !
              </p>
            )}
          </>

          <>
            {cartItems.length > 0 && (
              <strong className='text-white text-right mr-5 pr-2'>
                Total Price = Rs {totalPrice.toFixed(2)}
              </strong>
            )}
          </>

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
