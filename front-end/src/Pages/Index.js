import React from 'react'
import CustomTemplate from '../Components/CustomTemplate'
import Footer from '../Components/Footer'
import MainHeader from '../Components/MainHeader'
import Sidebar from '../Components/Sidebar'

const Index = () => {
  return (
    <div className='wrapper'>
      <MainHeader />
      <Sidebar />
      {/* <!-- Card --> */}
      <div className='main-panel'>
        <div className='content'>
          <div className='page-inner'>
            <h4 className='page-title'>Realtime statistics</h4>
            <div className='row'>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-primary card-round'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-users'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Visitors</p>
                          <h4 className='card-title'>1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-info card-round'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-interface-6'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Subscribers</p>
                          <h4 className='card-title'>1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-success card-round'>
                  <div className='card-body '>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-analytics'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Sales</p>
                          <h4 className='card-title'>$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-secondary card-round'>
                  <div className='card-body '>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-success'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Order</p>
                          <h4 className='card-title'>576</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card With Icon States Color --> */}
            <div className='row'>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-round'>
                  <div className='card-body '>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-chart-pie text-warning'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Number</p>
                          <h4 className='card-title'>150GB</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-round'>
                  <div className='card-body '>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-coins text-success'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Revenue</p>
                          <h4 className='card-title'>$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-round'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-error text-danger'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Errors</p>
                          <h4 className='card-title'>23</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-3'>
                <div className='card card-stats card-round'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-5'>
                        <div className='icon-big text-center'>
                          <i className='flaticon-twitter text-primary'></i>
                        </div>
                      </div>
                      <div className='col-7 col-stats'>
                        <div className='numbers'>
                          <p className='card-category'>Followers</p>
                          <h4 className='card-title'>+45K</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <CustomTemplate />
    </div>
  )
}

export default Index
