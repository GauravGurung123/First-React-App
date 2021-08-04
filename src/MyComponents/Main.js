import React from 'react'
import Directory from './directory/directory-product'

export default function Main() {
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
        <Directory />
      </div>
    </div>
  )
}
