import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from './Components/Login/LoginPage'
import RegisterPage1 from './Components/Register/Register page one/RegisterPage1'
import NewJob from './Components/New Job/NewJob'
export default function Routing() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Navigate to={'login'}/>} />
            {/* <Route path='register' Component={RegisterPage} /> */}
            <Route path='register' Component={RegisterPage1} />
            <Route path='login' Component={LoginPage} />
            <Route path='new-job' Component={NewJob} />
        </Routes>
    </div>
  )
}
