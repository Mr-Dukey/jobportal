import React, { useEffect, useReducer } from 'react'
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditJobDetails() {
    const navi = useNavigate();
    const {id} = useParams();

    const intialData = {
        JobTitle: "",
        JobType: "",
        JobCompany: "",
        JobLocation: "",
        JobSalary: {
            min_salary: 0,
            max_salary: 0
        },
        JobQualification: "",
        JobExperience: "",
        JobDescription: "",
        JobSkills: "",
        JobPostedDate: new Date().toLocaleString({ hourCycle: 'h12' })
    }

    function jobEditReducer(state, action) {
        if (action.type === 'change_text') {
            return {
                ...state,
                [action.field]: action.payload
            }
        }
        else if (action.type === 'change_minsalary') {
            return {
                ...state,
                JobSalary: {
                    ...state.JobSalary,
                    min_salary: action.min_salary
                }
            };
        }
        else if (action.type === 'change_maxsalary') {
            return {
                ...state,
                JobSalary: {
                    ...state.JobSalary,
                    max_salary: action.max_salary
                }
            };
        }
        else if(action.type === 'set_edit_data'){
            return{
                ...state,
                ...action.loadedData
            }
        }
        else {
            return false;
        }
    }
    const [state, dispatch] = useReducer(jobEditReducer, intialData);

    function handleJobEditChangeText(e) {
        const { name, value } = e.target;

        dispatch({
            type: 'change_text',
            field: name,
            payload: value
        })
    }

    useEffect(()=>{
        axios.get(`https://jobportal-backend-0qiv.onrender.com/job/update-job/${id}`)
        // axios.get(`http://localhost:2400/job/get-job/${id}`)
        .then((res)=>{
            dispatch({
                type:'set_edit_data',
                loadedData:res.data
            })  
        })
    },[id])

    function handleSubmitJobEditForm(e) {
        e.preventDefault();
        console.log(state);

        axios.put(`https://jobportal-backend-0qiv.onrender.com/job/update-job/${id}`, state)
        // axios.put(`http://localhost:2400/job/update-job/${id}`, state)
            .then(() => {
                navi('/dashboard/posted-jobs');
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='new-job-page'>
                    <div className="new-job-form">
                        <div className="new-job-sections">
                            <Row className="row wholeform g-md-4 g-2" >
                                <h5 style={{ height: '50px', textAlign: 'left' }}>Job Information:</h5>

                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-title">Job Title</label>
                                        <div className="new-job-input">
                                            <input type="text" placeholder='Enter Job Title...' name="JobTitle" onChange={handleJobEditChangeText} value={state.JobTitle} id="job-title" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-type">Job Type</label>
                                        <div className="new-job-input">
                                            <select name="JobType" onChange={handleJobEditChangeText} value={state.JobType} id="job-type">
                                                <option value="Full Time" selected>Full&nbsp;Time</option>
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
                                            <input type="text" placeholder='Enter Your Company Name' onChange={handleJobEditChangeText} value={state.JobCompany} name="JobCompany" id="job-company" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-location">Location</label>
                                        <div className="new-job-input ">
                                            <input type="text" placeholder='Enter Your Location' name="JobLocation" onChange={handleJobEditChangeText} value={state.JobLocation} id="job-location" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-salary">Salary</label>
                                        <div className="new-job-input ">
                                            <input type="number" className='new-job-salary' placeholder='Min-Salary'
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: 'change_minsalary',
                                                        min_salary: e.target.value
                                                    })
                                                }}
                                                value={state.JobSalary.min_salary} name="" id="job-salary" />
                                            <input type="number" className='new-job-salary' placeholder='Max-Salary'
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: 'change_maxsalary',
                                                        max_salary: e.target.value
                                                    })
                                                }}
                                                value={state.JobSalary.max_salary}
                                                name="" id="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-skill">Skills</label>
                                        <div className="new-job-input ">
                                            <input type="text" placeholder='Enter Your Skills' onChange={handleJobEditChangeText} value={state.JobSkills} name="JobSkills" id="job-skill" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-qualification">Qualification</label>
                                        <div className="new-job-input ">
                                            <input type="text" name="JobQualification" id="job-qualification" onChange={handleJobEditChangeText} value={state.JobQualification} placeholder='Enter job qualification' />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="new-job-field">
                                        <label htmlFor="job-experience">Experience</label>
                                        <div className="new-job-input">
                                            <input type="number" name="JobExperience" id="job-experience" onChange={handleJobEditChangeText} value={state.JobExperience} placeholder='Enter Experience' />
                                        </div>
                                    </div>
                                </Col>

                                <div className='description'>
                                    <h6 style={{ fontSize: '14px', textAlign: "left" }}>Job Description</h6>
                                    <textarea name='JobDescription' placeholder='Type a job description...' onChange={handleJobEditChangeText} value={state.JobDescription} rows="10" cols="105"></textarea>
                                </div>

                                <div className="postnow">
                                    <button
                                        onClick={() => {
                                            navi('/dashboard/posted-jobs');
                                        }}
                                    >Cancel</button>
                                    <button onClick={handleSubmitJobEditForm}>Update Now</button>
                                </div>


                            </Row>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}
