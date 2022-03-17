import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-fluid'>
        <nav className='pull-left'>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Help
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Licenses
              </a>
            </li>
          </ul>
        </nav>
        <div className='copyright ml-auto'>2018, Demo FKD</div>
      </div>
    </footer>
  )
}

export default Footer
