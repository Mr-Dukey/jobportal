import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from './Components/Login/LoginPage'
import RegisterPage1 from './Components/Register/Register page one/RegisterPage1'
import NewJob from './Components/New Job/NewJob'
import CompanyDashboard from './Components/CompanyMainDashboard/CompanyDashboard'
import ViewPostedJobs from './Components/ViewPostedJobs/ViewPostedJobs'
import ViewOpenings from './Components/ClientJobView/ViewJobs/ViewOpenings'
import EditJobDetails from './Components/EditJobDetails/EditJobDetails'
export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/dashboard/new-job'} />} />
        {/* <Route path='register' Component={RegisterPage} /> */}
        <Route path='register' Component={RegisterPage1} />
        <Route path='login' Component={LoginPage} />

        <Route path='/dashboard' Component={CompanyDashboard}>
          <Route path='new-job' Component={NewJob} />
          <Route path='posted-jobs' Component={ViewPostedJobs} />
          <Route path='edit-job/:id' Component={EditJobDetails} />
        </Route>
        <Route path='/home' Component={ViewOpenings} />

      </Routes>
    </div>
  )
}
