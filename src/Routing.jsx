import React from 'react';
import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
// import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from './Components/Login/LoginPage';
import RegisterPage1 from './Components/Register/Register page one/RegisterPage1';
import NewJob from './Components/New Job/NewJob';
import CompanyDashboard from './Components/CompanyMainDashboard/CompanyDashboard';
import ViewPostedJobs from './Components/ViewPostedJobs/ViewPostedJobs';
import ViewOpenings from './Components/ClientJobView/ViewJobs/ViewOpenings';
import EditJobDetails from './Components/EditJobDetails/EditJobDetails';
import { isAuthenticated } from './Components/Authentication/Auth';

export default function Routing() {

  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/register' Component={RegisterPage1} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/home' Component={ViewOpenings} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<CompanyDashboard />}>
            <Route path="new-job" element={<NewJob />} />
            <Route path="posted-jobs" element={<ViewPostedJobs />} />
            <Route path="edit-job/:id" element={<EditJobDetails />} />
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};