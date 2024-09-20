import React from 'react';
import './CompanyDashboard.css';
import { motion } from 'framer-motion';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../Authentication/Auth';
import Cookies from 'js-cookie';

export default function CompanyDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='company-main-dashboard'>
                <div className="company-main-dashboard-sidebar">
                    <SideBarComponent />
                </div>
                <div className="company-main-dashboard-outlet">
                    <Outlet />
                </div>
            </div>
            <div className="bottom-bar">
                <BottomNavigation />
            </div>
        </motion.div>
    )
}

function SideBarComponent() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token');
        logout();
        navigate('/login');
    };
    return (
        <div className='company-main-sidebar' id={"menu"}>
            <div className="company-main-sidebar-1">
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        dashboard
                    </span>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </div>
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        post_add
                    </span>
                    <Link to={'/dashboard/new-job'}>Post&nbsp;A&nbsp;Job</Link>
                </div>
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        format_list_bulleted
                    </span>
                    <Link to={'/dashboard/posted-jobs'}>View&nbsp;Posted&nbsp;Jobs</Link>
                </div>
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        account_circle
                    </span>
                    <Link>Profile</Link>
                </div>
            </div>
            <button className='acc-logout-btn' onClick={handleLogout}>
                <span class="material-symbols-outlined" id='sidebar-icon'>
                    logout
                </span>
                <span className="acc-logout-btn-content">
                    Logout
                </span>
            </button>
        </div>
    )
}

function BottomNavigation() {
    return (
        <div className='dashboard-bottom-navbar'>
            <Link>
                <span class="material-symbols-outlined" id='sidebar-icon'>
                    dashboard
                </span>
            </Link>
            <Link to={'/dashboard/new-job'}>
                <span class="material-symbols-outlined" id='sidebar-icon'>
                    post_add
                </span>
            </Link>
            <Link to={'/dashboard/posted-jobs'}>
                <span class="material-symbols-outlined" id='sidebar-icon'>
                    format_list_bulleted
                </span>
            </Link>
            <Link>
                <span class="material-symbols-outlined" id='sidebar-icon'>
                    account_circle
                </span>
            </Link>
        </div>
    )
}
