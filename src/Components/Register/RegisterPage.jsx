import React from 'react';
import './registerpage.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
export default function RegisterPage() {


    return (
        <div className='reg-page'>
            <div className="reg-page-header">
                <h1>Register Account</h1>
            </div>

            <Container>

                <div className="reg-nav">
                    <button>Candidate</button>
                    <button>Company</button>
                </div>
                <div className="reg-main">
                    <div className="reg-form-content">
                        <Form>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='fName' className='reg-form-label'>First Name <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-person-circle"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="fName" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='lName' className='reg-form-label'>Last Name <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-person-circle"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="lName" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='uName' className='reg-form-label'>Username <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-person-circle"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="uName" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='uEmail' className='reg-form-label'>Email <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="uEmail" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='uPass' className='reg-form-label'>Password <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="uPass" />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label htmlFor='ucPass' className='reg-form-label'>Confirm Password <span>*</span></Form.Label>
                                    <div className="input-area">
                                        <div className="reg-inp-icon">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <input type="text" name="" className='reg-inp' id="ucPass" />
                                    </div>
                                </Col>
                                <Col xs={12} className='mt-4 reg-agree'>
                                    <input type="checkbox" name="" id="reg-check" />&emsp;
                                    <Form.Label>Here, I will agree company terms & conditions</Form.Label>
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    <button type="submit" className="reg-submit-button">Signup</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
