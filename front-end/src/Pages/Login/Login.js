import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthentication, isAuthenticated } from '../../Helpers/auth'
import axios from 'axios'

import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const admin = { email, password }
    try {
      const res = await axios.post('http://localhost:5000/login', admin)
      const { token, user } = res.data
      setAuthentication(token, user)
      toast.success('Welcome to your dashboard')
      navigate('/dashboard')
      setEmail('')
      setPassword('')
    } catch (error) {
      toast.error('Something when wron please try again')
    }
  }

  return (
    <div className='container'>
      <div className='card card-login mx-auto text-center bg-dark'>
        <div className='card-header mx-auto bg-dark'>
          <span>
            {' '}
            <img src='assets/img/logo.png' className='w-75' alt='Logo' />{' '}
          </span>
          <br />
          <span className='logo_title mt-5'> Login to Dashboard </span>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-user'></i>
                </span>
              </div>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-key'></i>
                </span>
              </div>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='submit'
                name='btn'
                value='Login'
                className='btn btn-outline-danger float-right login_btn'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
