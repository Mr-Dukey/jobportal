import React from 'react';
import './PortalHeader.css';
import { useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';

export default function PortalHeader() {
  const navi = useNavigate();
  return (

    <div className='job-portal-header'>
      <div>
        <img src="logo.png"
          onClick={() => {
            navi('/');
          }}
          alt="" />
      </div>
      <div>
        <Button
          onClick={()=>{
            navi('/login');
          }}
        >
          Login
        </Button>
      </div>
    </div >
  )
}
