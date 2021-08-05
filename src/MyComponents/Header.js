import React from 'react'

export default function Header({ cart }) {
  return (
    <header className='row m-0 bg-white px-5 py-2 sticky-top'>
      <div className='col-2'>
        <div className='row m-0 '>
          <a href='#' className='pt-2  fsm '>
            ecommerce
          </a>
        </div>
      </div>
      <div className='col-10'>
        <div className='row mb-4'>
          <div className='col-8 pt-3'>
            <a href='#' className='p-2 text-dark'>
              Home
            </a>
            <a href='#' className='p-2 text-dark '>
              New
            </a>
            <a href='#' className='p-2 text-dark '>
              Sale
            </a>
            <a href='#' className='p-2 text-dark '>
              Today'special
            </a>
            <a href='#' className='p-2 text-dark '>
              About
            </a>
            <a href='#' className='p-2 text-dark '>
              Product
            </a>

            <button
              className='btn btn-sm float-right px-1 close'
              data-toggle='modal'
              data-target='#myModal'
              data-dismiss='modal'
              aria-label='Close'
            >
              🛒 Cart({cart.length})
            </button>
          </div>
          <div className='col-4 pt-2'>
            <form className='form-inline'>
              <input
                className='form-control'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='btn btn-success float-right px-4 '
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
