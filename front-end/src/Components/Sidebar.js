import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar sidebar-style-2' data-background-color='dark2'>
      <div className='sidebar-wrapper scrollbar scrollbar-inner'>
        <div className='sidebar-content'>
          <div className='user'>
            <div className='avatar-sm float-left mr-2'>
              <img
                src='assets/img/profile.jpg'
                alt='...'
                className='avatar-img rounded-circle'
              />
            </div>
            <div className='info'>
              <a
                data-toggle='collapse'
                href='#collapseExample'
                aria-expanded='true'
              >
                <span>
                  Hizrian
                  <span className='user-level'>Administrator</span>
                  <span className='caret'></span>
                </span>
              </a>
              <div className='clearfix'></div>

              <div className='collapse in' id='collapseExample'>
                <ul className='nav'>
                  <li>
                    <a href='#profile'>
                      <span className='link-collapse'>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href='#edit'>
                      <span className='link-collapse'>Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href='#settings'>
                      <span className='link-collapse'>Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                <p>Base</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='base'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='components/avatars.html'>
                      <span className='sub-item'>Avatars</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/buttons.html'>
                      <span className='sub-item'>Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/gridsystem.html'>
                      <span className='sub-item'>Grid System</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/panels.html'>
                      <span className='sub-item'>Panels</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/notifications.html'>
                      <span className='sub-item'>Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/sweetalert.html'>
                      <span className='sub-item'>Sweet Alert</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/font-awesome-icons.html'>
                      <span className='sub-item'>Font Awesome Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/simple-line-icons.html'>
                      <span className='sub-item'>Simple Line Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/flaticons.html'>
                      <span className='sub-item'>Flaticons</span>
                    </a>
                  </li>
                  <li>
                    <a href='components/typography.html'>
                      <span className='sub-item'>Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <a data-toggle='collapse' href='#sidebarLayouts'>
                <i className='fas fa-th-list'></i>
                <p>Sidebar Layouts</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='sidebarLayouts'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='sidebar-style-1.html'>
                      <span className='sub-item'>Sidebar Style 1</span>
                    </a>
                  </li>
                  <li>
                    <a href='overlay-sidebar.html'>
                      <span className='sub-item'>Overlay Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a href='compact-sidebar.html'>
                      <span className='sub-item'>Compact Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a href='static-sidebar.html'>
                      <span className='sub-item'>Static Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a href='icon-menu.html'>
                      <span className='sub-item'>Icon Menu</span>
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
                <p>Tables</p>
                <span className='caret'></span>
              </a>
              <div className='collapse' id='tables'>
                <ul className='nav nav-collapse'>
                  <li>
                    <a href='tables/tables.html'>
                      <span className='sub-item'>Basic Table</span>
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
            <li className='mx-4 mt-2'>
              <a
                href='http://themekita.com/atlantis-bootstrap-dashboard.html'
                className='btn btn-primary btn-block'
              >
                <span className='btn-label mr-2'>
                  {' '}
                  <i className='fa fa-heart'></i>{' '}
                </span>
                Buy Pro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
