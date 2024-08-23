import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './Components/Register/RegisterPage'

export default function Routing() {
  return (
    <div>
        <Routes>
            <Route path='register' Component={RegisterPage} />
        </Routes>
    </div>
  )
}
