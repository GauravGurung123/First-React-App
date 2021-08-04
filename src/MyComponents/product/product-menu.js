import React from 'react'

const ProductMenu = ({ title, imageURL, price }) => (
  <div className='col-4 mb-2 mt-2'>
    <div className='card'>
      <div className='card-header bg-white'>
        <div className='row'>
          <div className='col mb-3' style={{ overflow: `hidden` }}>
            <img className='product-img' src={imageURL} />
          </div>
        </div>
        <h5 className='card-title text-primary'>
          {title.toUpperCase()}{' '}
          <small className='text-danger'>Price: Rs {price}</small>
        </h5>

        <p className='card-text mb-4'>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          <div className='row '>
            <button
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

export default ProductMenu
