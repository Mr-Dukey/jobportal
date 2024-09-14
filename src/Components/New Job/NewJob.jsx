import React from 'react'
import './NewJob.css'
import { Col, Row } from 'react-bootstrap'

export default function NewJob() {
    return (
        <div className='new-job-page'>
            <div className="new-job-form">
                <div className="new-job-sections">
                    <Row className="row wholeform g-md-4 g-2" >
                        <h5 style={{ height: '50px', textAlign: 'left' }}>Job Information:</h5>
                        
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-title">Job Title</label>
                                <div className="new-job-input">
                                    <input type="text" placeholder='Enter Job Title...' name="" id="job-title" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-type">Job Type</label>
                                <div className="new-job-input">
                                    <select name="" id="job-type">
                                        <option value="Full Time">Full&nbsp;Time</option>
                                        <option value="Part Time">Part&nbsp;Time</option>
                                        <option value="Work from Home">Work&nbsp;from&nbsp;Home</option>
                                        <option value="Intern">Intern</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-company">Company</label>
                                <div className="new-job-input ">
                                    <input type="text" placeholder='Enter Your Company Name' name="" id="job-company" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-location">Location</label>
                                <div className="new-job-input ">
                                    <input type="text" placeholder='Enter Your Location' name="" id="job-location" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-salary">Salary</label>
                                <div className="new-job-input ">
                                    <input type="text" className='new-job-salary' placeholder='Min-Salary' name="" id="job-salary" />
                                    <input type="text" className='new-job-salary' placeholder='Max-Salary' name="" id="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-skill">Skills</label>
                                <div className="new-job-input ">
                                    <input type="text" placeholder='Enter Your Skills' name="" id="job-skill" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-qualification">Qualification</label>
                                <div className="new-job-input ">
                                    <input type="text" name="" id="job-qualification" placeholder='Enter job qualification' />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="new-job-field">
                                <label htmlFor="job-experience">Experience</label>
                                <div className="new-job-input">
                                    <input type="number" name="" id="job-experience" placeholder='Enter Experience' />
                                </div>
                            </div>
                        </Col>

                        <div className='description'>
                        <h6 style={{ fontSize: '14px', textAlign: "left" }}>Job Description</h6>
                            <textarea  placeholder='Type a job description...' rows="10" cols="105"></textarea>
                        </div>



                        <div className="postnow">
                            <button>Cancel</button>
                            <button>Post Now</button>
                        </div>


                    </Row>
                </div>
            </div>

        </div>
    )
}
