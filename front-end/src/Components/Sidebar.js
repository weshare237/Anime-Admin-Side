import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar sidebar-style-2' data-background-color='dark2'>
      <div className='sidebar-wrapper scrollbar scrollbar-inner'>
        <div className='sidebar-content'>
          <ul className='nav nav-primary'>
            <li className='nav-item active'>
              <a
                data-toggle='collapse'
                href='#dashboard'
                className='collapsed'
                aria-expanded='false'
              >
                <i className='fas fa-home'></i>
                <p>Dashboard</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='dashboard'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='../demo1/index.html'>
                      <span className='sub-item'>Dashboard 1</span>
                    </a>
                  </li>
                  <li>
                    <a href='../demo2/index.html'>
                      <span className='sub-item'>Dashboard 2</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-section'>
              <span className='sidebar-mini-icon'>
                <i className='fa fa-ellipsis-h'></i>
              </span>
              <h4 className='text-section'>Components</h4>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#base'>
                <i className='fas fa-layer-group'></i>
                <p>Notifications</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='base'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='/notifications/settings'>
                      <span className='sub-item'>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/buttons.html'>
                      <span className='sub-item'>Notify users</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className='nav-item'>
              <a data-toggle='collapse' href='#forms'>
                <i className='fas fa-pen-square'></i>
                <p>Forms</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='forms'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='forms/forms.html'>
                      <span className='sub-item'>Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#tables'>
                <i className='fas fa-table'></i>
                <p>Series</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='tables'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='/manage-series'>
                      <span className='sub-item'>View all</span>
                    </a>
                  </li>
                  <li>
                    <a href='tables/datatables.html'>
                      <span className='sub-item'>Datatables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#maps'>
                <i className='fas fa-map-marker-alt'></i>
                <p>Maps</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='maps'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='maps/jqvmap.html'>
                      <span className='sub-item'>JQVMap</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#charts'>
                <i className='far fa-chart-bar'></i>
                <p>Charts</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='charts'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='charts/charts.html'>
                      <span className='sub-item'>Chart Js</span>
                    </a>
                  </li>
                  <li>
                    <a href='charts/sparkline.html'>
                      <span className='sub-item'>Sparkline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <a href='widgets.html'>
                <i className='fas fa-desktop'></i>
                <p>Widgets</p>
                <span className='badge badge-success'>4</span>
              </a>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#submenu'>
                <i className='fas fa-bars'></i>
                <p>Menu Levels</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='submenu'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a data-toggle='collapse' href='#subnav1'>
                      <span className='sub-item'>Level 1</span>
                      <span className='caret'></span>
                    </a>
                    <div className='collapse' id='subnav1'>
                      <ul className='nav nav-collapse subnav'>
                        <li>
                          <a href='#'>
                            <span className='sub-item'>Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <span className='sub-item'>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-toggle='collapse' href='#subnav2'>
                      <span className='sub-item'>Level 1</span>
                      <span className='caret'></span>
                    </a>
                    <div className='collapse' id='subnav2'>
                      <ul className='nav nav-collapse subnav'>
                        <li>
                          <a href='#'>
                            <span className='sub-item'>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='sub-item'>Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
