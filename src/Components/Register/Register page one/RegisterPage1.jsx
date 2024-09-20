import React, { useReducer, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './register.css';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function RegisterPage1() {
    const [regOption, setRegOption] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='register'>
                <Container className='register-container'>
                    <div className="register-header">
                        <h2>Register Page</h2>
                    </div>
                    <div className="register-main">
                        <div className="register-option">
                            <span className="opt-btn" onClick={() => {
                                setRegOption(false);
                            }} >Candidate</span>
                            <span className="opt-btn" onClick={() => {
                                setRegOption(true)
                            }}>Company</span>
                        </div>
                        {
                            regOption ?
                                <CompanyRegister /> :
                                <CandidateRegister />
                        }
                        <p>
                            Alredy have Account!&nbsp;
                            <Link to={'/login'}>Sign in</Link>
                        </p>
                    </div>
                </Container>
            </div>
        </motion.div>
    )
}


function CompanyRegister() {
    
    return (
        <div className="register-form">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="form-header">
                    <span>Company</span>
                </div>
                <Form>
                    <Row className='g-4'>
                        <Col xs={12} md={6}>
                            <label htmlFor="cfname">Company&nbsp;name</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="cfname" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    apartment
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="clname">Owner</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="clname" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    id_card
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cemail">Email</label>
                            <div className="register-form-input">
                                <input type="email" name="" id="cemail" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    mail
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cphone">Phone</label>
                            <div className="register-form-input">
                                <input type="number" name="" id="cphone" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    call
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="caddr">Address</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="caddr" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    pin_drop
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="ccity">City</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="ccity" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    pin_drop
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cstate">State</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="cstate" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    pin_drop
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cpincode">Pincode</label>
                            <div className="register-form-input">
                                <input type="number" name="" id="cpincode" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    pin_drop
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cpass">Pasword</label>
                            <div className="register-form-input">
                                <input type="password" name="" id="cpass" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    password_2
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="ccpass">Confirm&nbsp;Pasword</label>
                            <div className="register-form-input">
                                <input type="password" name="" id="ccpass" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    password_2
                                </span>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <button type="submit" className="register-submit-btn">Register</button>
                        </Col>
                    </Row>
                </Form>
            </motion.div>
        </div>
    )
}

function CandidateRegister() {
    const navi = useNavigate();
    const initData = {
        actData: {
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Password: ""
        },
        passData: {
            conPass: ""
        }
    }

    function candidateReducer(state, action) {
        if (action.type === "cg_text") {
            return{
                ...state,
                actData:{
                    ...state.actData,
                    [action.field]:action.payload
                }
            }
        }
        else if(action.type === 'con_pass'){
            return{
                ...state,
                passData:{
                    ...state.passData,
                    conPass : action.cpass
                }
            }
        }
        else{
            return  state;
        }
    }

    const [state, dispatch] = useReducer(candidateReducer, initData);

    function handleChangeData(e) {
        const { name, value } = e.target;
        dispatch({
            type: 'cg_text',
            field: name,
            payload: value
        })
    }

    function handleRegisterCandidate(e){
        e.preventDefault();
        if(state.actData.Password === state.passData.conPass){
            // axios.post('https://jobportal-backend-0qiv.onrender.com/user/create-user',state.actData)
            axios.post('http://localhost:2400/user/create-user',state.actData)
            .then(()=>{
                navi('/login')
            })
            .catch(err=>console.log(err));
        }
        else{
            return false;
        }
    }
    return (
        <div className="register-form">
            <Helmet>
                <title>XYZ-Jobs | Register </title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="form-header">
                    <span>Candidate</span>
                </div>
                <Form onSubmit={
                    handleRegisterCandidate
                }>
                    <Row className='g-4'>
                        <Col xs={12} md={6}>
                            <label htmlFor="cfname">First&nbsp;name</label>
                            <div className="register-form-input">
                                <input type="text" name="FirstName" value={state.actData.FirstName} onChange={handleChangeData} id="cfname" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    id_card
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="clname">Last&nbsp;name</label>
                            <div className="register-form-input">
                                <input type="text" name="LastName" value={state.actData.LastName} onChange={handleChangeData} id="clname" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    id_card
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cemail">Email</label>
                            <div className="register-form-input">
                                <input type="email" name="Email" value={state.actData.Email} onChange={handleChangeData} id="cemail" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    mail
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cphone">Phone</label>
                            <div className="register-form-input">
                                <input type="number" name="Phone" value={state.actData.Phone} onChange={handleChangeData} id="cphone" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    call
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="cpass">Pasword</label>
                            <div className="register-form-input">
                                <input type="password" name="Password" value={state.actData.Password} onChange={handleChangeData} id="cpass" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    password_2
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="ccpass">Confirm&nbsp;Pasword</label>
                            <div className="register-form-input">
                                <input type="password" name="conPass" value={state.passData.conPass} 
                                onChange={(e) => {
                                    dispatch({
                                        type:"con_pass",
                                        cpass:e.target.value
                                    })
                                }} id="ccpass" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    password_2
                                </span>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <button type="submit" className="register-submit-btn">Register</button>
                        </Col>
                    </Row>
                </Form>
            </motion.div>
        </div>
    )
}
