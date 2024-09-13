import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './register.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    return (
        <div className="register-form">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="form-header">
                    <span>Candidate</span>
                </div>
                <Form>
                    <Row className='g-4'>
                        <Col xs={12} md={6}>
                            <label htmlFor="cfname">First&nbsp;name</label>
                            <div className="register-form-input">
                                <input type="text" name="" id="cfname" />
                                <span className="material-symbols-outlined" id='reg-icon'>
                                    id_card
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="clname">Last&nbsp;name</label>
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
