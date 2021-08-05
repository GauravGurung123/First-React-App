import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'relative',
    top: '50vh',
    width: '100%',
    border: '2px solid red',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyEcommerce.com</p>
      <div
        className='modal fade '
        tabindex='-1'
        id='myModal'
        style={{ width: `100%` }}
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-dark '>
            <div className='modal-header'>
              <h5 className='modal-title'>Your Shopping Cart (3)</h5>
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
              <table class='table table-hover table-dark'>
                <thead>
                  <tr>
                    <th scope='col'>S.N.</th>
                    <th scope='col'>Product ID</th>
                    <th scope='col'>Item</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className='btn btn-sm'>❌</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td colspan='2'>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>

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
    </footer>
  )
}
