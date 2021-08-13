import React from 'react'

export default function Header({ cartItems, onSearch, searchFields }) {
  // const [searchFields, setSearchFields] = useState('')
  // const onSearch = e => {
  //   setSearchFields(e.target.value)
  // }
  // let productSearch = products.filter(item => {
  //   return Object.keys(item).some(key =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(searchFields.toString().toLowerCase())
  //   )
  // })
  return (
    <header className='row m-0 header-nav bg-white px-5 py-2 sticky-top'>
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
            <a href='#' className='p-2 header-text '>
              Home
            </a>
            <a href='#' className='p-2 header-text'>
              New
            </a>
            <a href='#' className='p-2 header-text '>
              Sale
            </a>
            <a href='#' className='p-2 header-text '>
              Today'special
            </a>
            <a href='#' className='p-2 header-text '>
              About
            </a>
            <a href='#' className='p-2 header-text '>
              Product
            </a>

            <button
              className='btn btn-sm float-right px-1 close'
              data-toggle='modal'
              data-target='.bd-example-modal-lg'
              data-dismiss='modal'
              aria-label='Close'
            >
              🛒<sup>({cartItems.length})</sup> Cart
            </button>
          </div>
          <div className='col-4 pt-2'>
            <form className='form-inline'>
              <input
                className='form-control'
                type='search'
                placeholder='Search in our Store'
                aria-label='Search'
                value={searchFields}
                onChange={onSearch.bind(this)}
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
