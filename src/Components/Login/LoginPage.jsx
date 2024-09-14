import React from 'react'
import { Container } from 'react-bootstrap'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
export default function LoginPage() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className='login-page'>
        <Container className='login-page-container'>
          <div className="login-box">
            <div className="login-header">
              <h2>Login</h2>
            </div>
            <form>
              <div className="login-form">
                <label htmlFor="">Email</label>
                <div className="login-form-inp">
                  <input type="text" name="" id="" />
                  <span class="material-symbols-outlined" id='log-icon'>
                    mail
                  </span>
                </div>
                <label htmlFor="">Password</label>
                <div className="login-form-inp">
                  <input type="Password" name="" id="" />
                  <span class="material-symbols-outlined" id='log-icon'>
                    key
                  </span>
                </div>
                <button type="submit" className="login-form-btn">Login</button>
              </div>
            </form>
            <p style={{textAlign:"center"}}>
              Alredy have Account!&nbsp;
              <Link to={'/register'}>Sign Up</Link>
            </p>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
