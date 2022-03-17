import React from 'react'
import { Link } from 'react-router-dom'
import CustomTemplate from '../Components/CustomTemplate'
import Footer from '../Components/Footer'
import MainHeader from '../Components/MainHeader'
import Sidebar from '../Components/Sidebar'

const Serie = () => {
  return (
    <div className='wrapper'>
      <MainHeader />
      <Sidebar />
      {/* <!-- Card --> */}
      <div className='main-panel'>
        <div className='content'>
          <div className='page-inner'>
            <div className='page-header'>
              <h4 className='page-title'>Anime saisons</h4>
              <ul className='breadcrumbs'>
                <li className='nav-home'>
                  <a href='#'>
                    <i className='flaticon-home'></i>
                  </a>
                </li>
                <li className='separator'>
                  <i className='flaticon-right-arrow'></i>
                </li>
                <li className='nav-item'>
                  <a href='#'>Tables</a>
                </li>
                <li className='separator'>
                  <i className='flaticon-right-arrow'></i>
                </li>
                <li className='nav-item'>
                  <a href='#'>Datatables</a>
                </li>
              </ul>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>
                    <div className='d-flex align-items-center'>
                      <h4 className='card-title'>Add New Saison</h4>
                      <button
                        className='btn btn-primary btn-round ml-auto'
                        data-toggle='modal'
                        data-target='#addRowModal'
                      >
                        <i className='fa fa-plus'></i>
                        Add
                      </button>
                    </div>
                  </div>
                  <div className='card-body'>
                    {/* <!-- Modal --> */}
                    <div
                      className='modal fade'
                      id='addRowModal'
                      tabindex='-1'
                      role='dialog'
                      aria-hidden='true'
                    >
                      <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                          <div className='modal-header no-bd'>
                            <h5 className='modal-title'>
                              <span className='fw-mediumbold'>New</span>
                              <span className='fw-light'> Saison</span>
                            </h5>
                            <button
                              type='button'
                              className='close'
                              data-dismiss='modal'
                              aria-label='Close'
                            >
                              <span aria-hidden='true'>&times;</span>
                            </button>
                          </div>
                          <div className='modal-body'>
                            <p className='small'>
                              Create a new saison using this form, make sure you
                              fill them all
                            </p>
                            <form>
                              <div className='row'>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Number</label>
                                    <input
                                      id='addName'
                                      type='number'
                                      className='form-control'
                                      placeholder='saison number'
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className='modal-footer no-bd'>
                            <button
                              type='button'
                              id='addRowButton'
                              className='btn btn-primary'
                            >
                              Add
                            </button>
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

                    <div className='table-responsive'>
                      <table
                        id='add-row'
                        className='display table table-striped table-hover'
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th style={{ width: '10%' }}>Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>
                              <Link to='/add-episode'>Tiger Nixon</Link>
                            </td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>
                              <div className='form-button-action'>
                                <button
                                  type='button'
                                  data-toggle='tooltip'
                                  title=''
                                  className='btn btn-link btn-primary btn-lg'
                                  data-original-title='Edit Task'
                                >
                                  <i className='fa fa-edit'></i>
                                </button>
                                <button
                                  type='button'
                                  data-toggle='tooltip'
                                  title=''
                                  className='btn btn-link btn-danger'
                                  data-original-title='Remove'
                                >
                                  <i className='fa fa-times'></i>
                                </button>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Rhona Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>
                              <div className='form-button-action'>
                                <button
                                  type='button'
                                  data-toggle='tooltip'
                                  title=''
                                  className='btn btn-link btn-primary btn-lg'
                                  data-original-title='Edit Task'
                                >
                                  <i className='fa fa-edit'></i>
                                </button>
                                <button
                                  type='button'
                                  data-toggle='tooltip'
                                  title=''
                                  className='btn btn-link btn-danger'
                                  data-original-title='Remove'
                                >
                                  <i className='fa fa-times'></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Serie
