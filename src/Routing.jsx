import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from './Components/Login/LoginPage'

export default function Routing() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Navigate to={'login'}/>} />
            <Route path='register' Component={RegisterPage} />
            <Route path='login' Component={LoginPage} />
        </Routes>
    </div>
  )
}
