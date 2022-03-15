import React from 'react'

const CustomTemplate = () => {
  return (
    <div className='custom-template'>
      <div className='title'>Settings</div>
      <div className='custom-content'>
        <div className='switcher'>
          <div className='switch-block'>
            <h4>Logo Header</h4>
            <div className='btnSwitch'>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='dark'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='blue'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='purple'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='light-blue'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='green'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='orange'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='red'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='white'
              ></button>
              <br />
              <button
                type='button'
                className='selected changeLogoHeaderColor'
                data-color='dark2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='blue2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='purple2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='light-blue2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='green2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='orange2'
              ></button>
              <button
                type='button'
                className='changeLogoHeaderColor'
                data-color='red2'
              ></button>
            </div>
          </div>
          <div className='switch-block'>
            <h4>Navbar Header</h4>
            <div className='btnSwitch'>
              <button
                type='button'
                className='selected changeTopBarColor'
                data-color='dark'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='blue'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='purple'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='light-blue'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='green'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='orange'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='red'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='white'
              ></button>
              <br />
              <button
                type='button'
                className='changeTopBarColor'
                data-color='dark2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='blue2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='purple2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='light-blue2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='green2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='orange2'
              ></button>
              <button
                type='button'
                className='changeTopBarColor'
                data-color='red2'
              ></button>
            </div>
          </div>
          <div className='switch-block'>
            <h4>Sidebar</h4>
            <div className='btnSwitch'>
              <button
                type='button'
                className='changeSideBarColor'
                data-color='white'
              ></button>
              <button
                type='button'
                className='changeSideBarColor'
                data-color='dark'
              ></button>
              <button
                type='button'
                className='selected changeSideBarColor'
                data-color='dark2'
              ></button>
            </div>
          </div>
          <div className='switch-block'>
            <h4>Background</h4>
            <div className='btnSwitch'>
              <button
                type='button'
                className='changeBackgroundColor'
                data-color='bg2'
              ></button>
              <button
                type='button'
                className='changeBackgroundColor selected'
                data-color='bg1'
              ></button>
              <button
                type='button'
                className='changeBackgroundColor'
                data-color='bg3'
              ></button>
              <button
                type='button'
                className='selected changeBackgroundColor'
                data-color='dark'
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className='custom-toggle'>
        <i className='flaticon-settings'></i>
      </div>
    </div>
  )
}

export default CustomTemplate
