import React from 'react'
import CustomTemplate from '../Components/CustomTemplate'
import Footer from '../Components/Footer'
import MainHeader from '../Components/MainHeader'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'

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
              <h4 className='page-title'>Anime series/movies</h4>
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
                      <h4 className='card-title'>Add New Serie/Movie</h4>
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
                              <span className='fw-light'> Movie/Serie</span>
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
                            {/* <p className='small'>
                              Create a new serie using this form, make sure you
                              fill them all
                            </p> */}
                            <form>
                              <div className='row'>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Name</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter name'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Type</label>
                                    <select
                                      name='type'
                                      id='genre'
                                      className='form-control'
                                    >
                                      <option value=''>select type</option>
                                      <option value='comedie'>TV Series</option>
                                      <option value='action'>Korean</option>
                                      <option value='action'>Anime</option>
                                      <option value='action'>Movie</option>
                                      <option value='action'>Philippine</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Studios</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter studio'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Scores</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter scores'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Rating</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter rating'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Duration</label>
                                    <input
                                      id='addName'
                                      type='time'
                                      className='form-control'
                                      placeholder='specify duration'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Status</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter status'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Quality</label>
                                    <input
                                      id='addName'
                                      type='text'
                                      className='form-control'
                                      placeholder='enter quality'
                                    />
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Genre</label>
                                    <select
                                      name=''
                                      id='genre'
                                      className='form-control'
                                    >
                                      <option value=''>select genre</option>
                                      <option value='comedie'>Comedie</option>
                                      <option value='action'>Action</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Description</label>
                                    <textarea
                                      id='desc'
                                      cols='30'
                                      className='form-control'
                                      placeholder='serie description'
                                      rows='5'
                                    ></textarea>
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Genre</label>
                                    <select
                                      name=''
                                      id='genre'
                                      className='form-control'
                                    >
                                      <option value=''>select genre</option>
                                      <option value='comedie'>Comedie</option>
                                      <option value='action'>Action</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-sm-12'>
                                  <div className='form-group form-group-default'>
                                    <label>Poster</label>
                                    <input
                                      id='addName'
                                      type='file'
                                      className='form-control'
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
                              <Link to='/add-saison'>Tiger Nixon</Link>
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
                            <td>
                              <Link to='/add-saison'>Garrett Winters</Link>
                            </td>
                            <td>Accountant</td>
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
