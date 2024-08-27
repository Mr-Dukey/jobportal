import React from 'react';
import './registerpage.css'
import { TextField, Grid, InputAdornment, Container, FormGroup, FormControlLabel } from '@mui/material';
import { AccountCircleOutlined, CheckBox, EmailOutlined, PasswordOutlined, RemoveRedEye } from '@mui/icons-material';
export default function RegisterPage() {
    return (
        <div className='register-page'>
            <div className="reg-page-header">
                <h1>Register Account</h1>
            </div>

            <Container>

                <div className="register-nav">
                    <button>Candidate</button>
                    <button>Company</button>
                </div>
                <div className="register-main">
                    <div className="register-form-content">
                        <form>
                            
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
