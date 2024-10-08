import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { login } from '../Authentication/Auth';

export default function LoginPage() {
  const navi = useNavigate()
  const [loginDatas, setLoginDatas] = useState({
    Email: '',
    Password: ''
  })
  function handleLogin(e) {
    e.preventDefault();
    axios.post('https://jobportal-backend-0qiv.onrender.com/user/user-login',
      loginDatas,
      {
        withCredentials: true
      }
    )
      .then(() => {
        login();
        navi('/dashboard')
      })
      .catch(err => console.log(err))
  }

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;

    setLoginDatas((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>XYZ-Jobs | Login</title>
      </Helmet>
      <div className='login-page'>
        <Container className='login-page-container'>
          <div className="login-box">
            <div className="login-header">
              <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="login-form">
                <label htmlFor="">Email</label>
                <div className="login-form-inp">
                  <input type="text" name="Email" value={loginDatas.Email} onChange={handleLoginDetails} id="" />
                  <span class="material-symbols-outlined" id='log-icon'>
                    mail
                  </span>
                </div>
                <label htmlFor="">Password</label>
                <div className="login-form-inp">
                  <input type="Password" name="Password" value={loginDatas.Password} onChange={handleLoginDetails} id="" />
                  <span class="material-symbols-outlined" id='log-icon'>
                    key
                  </span>
                </div>
                <button type="submit" className="login-form-btn">Login</button>
              </div>
            </form>
            <p style={{ textAlign: "center" }}>
              Alredy have Account!&nbsp;
              <Link to={'/register'}>Sign Up</Link>
            </p>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
