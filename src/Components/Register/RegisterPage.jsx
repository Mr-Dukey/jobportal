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
                            <Grid container spacing={5}>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"First Name"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleOutlined color='primary' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"Last Name"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleOutlined color='primary' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"Username"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleOutlined color='primary' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"Email"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailOutlined color='primary' />
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"Password"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment :(
                                                <InputAdornment>
                                                    <PasswordOutlined color='primary'/>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <RemoveRedEye color='primary'/>
                                                </InputAdornment>
                                            )
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        className='reg-input'
                                        label={"Confirm Password"}
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment :(
                                                <InputAdornment>
                                                    <PasswordOutlined color='primary'/>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <RemoveRedEye color='primary'/>
                                                </InputAdornment>
                                            )
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup>
                                        <FormControlLabel required control={<CheckBox  />} label="Here, I will agree company terms & conditions."/>
                                    </FormGroup>
                                </Grid>
                                <Grid xs={12} style={{marginTop:"20px"}}>
                                        <button className='reg-btn'>Sign Up</button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
