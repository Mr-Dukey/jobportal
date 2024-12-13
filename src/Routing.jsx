import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage1 from './Components/Register/Register page one/RegisterPage1';
import NewJob from './Components/Company/New Job/NewJob';
import CompanyDashboard from './Components/Company/CompanyMainDashboard/CompanyDashboard';
import ViewPostedJobs from './Components/Company/ViewPostedJobs/ViewPostedJobs';
import ViewOpenings from './Components/ClientJobView/ViewJobs/ViewOpenings';
import EditJobDetails from './Components/Company/EditJobDetails/EditJobDetails';
import { companyisAuthenticated, isAuthenticated } from './Components/Authentication/Auth';

export default function Routing() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<RegisterPage1 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ViewOpenings />} />

        {/* Protected Routes for company */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<CompanyDashboard />}>
            {/* Nested Routes under Dashboard */}
            <Route path="new-job" element={<NewJob />} />
            <Route path="posted-jobs" element={<ViewPostedJobs />} />
            <Route path="edit-job/:id" element={<EditJobDetails />} />
          </Route>
        </Route>
        {/* End Protected Routes for company */}
        
        {/* Protected Routes for user */}
        {/* End Protected Routes for user */}

        
      </Routes>
    </div>
  );
}

const ProtectedRoute = () => {
  return companyisAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};
const UserProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};
