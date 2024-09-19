import React from 'react';
import './PortalHeader.css';
import { useNavigate } from 'react-router-dom';

export default function PortalHeader() {
  const navi = useNavigate();
  return (
    <div className='job-portal-header'>
        <h2
          onClick={()=>{
            navi('/home');
          }}
        >XYZ Jobs</h2>
    </div>
  )
}
