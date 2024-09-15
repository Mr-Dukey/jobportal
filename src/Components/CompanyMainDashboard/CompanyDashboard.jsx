import React, { useEffect, useRef, useState } from 'react';
import './CompanyDashboard.css';
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';



export default function CompanyDashboard() {

    const [menu, setMenu] = useState(false);
    const menuRef = useRef();

    function handleToggleMenu() {
        if (menu === false) {
            setMenu(true);
        }
        else if (menu === true) {
            setMenu(false)
        }
    }

    console.log(menuRef.current);

    useEffect(() => {
        if (window.innerWidth === 768) {
            if (menu === false) {
                menuRef.current.classList.add('menu-inactive');
                menuRef.current.classList.remove('menu-active');
            }
            else if (menu === true) {
                menuRef.current.classList.add('menu-active');
                menuRef.current.classList.remove('menu-inactive');
            }
        }
        console.log(menu);
        
    }, [menu])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <button className='company-main-dashboard-menu' onClick={handleToggleMenu}>
                <span class="material-symbols-outlined" id='main-icon'>
                    menu
                </span>
                Menu
            </button>
            <div className='company-main-dashboard'>
                <div className="company-main-dashboard-sidebar" ref={menuRef}>
                    <SideBarComponent />
                </div>
                <div className="company-main-dashboard-outlet">
                    <Outlet />
                </div>
            </div>
        </motion.div>
    )
}

function SideBarComponent() {
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
                    <Link to={'new-job'}>Post&nbsp;A&nbsp;Job</Link>
                </div>
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        format_list_bulleted
                    </span>
                    <Link>View&nbsp;Posted&nbsp;Jobs</Link>
                </div>
                <div className="company-main-sidebar-link">
                    <span class="material-symbols-outlined" id='sidebar-icon'>
                        account_circle
                    </span>
                    <Link>Profile</Link>
                </div>
            </div>
            <button className='acc-logout-btn'>
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
