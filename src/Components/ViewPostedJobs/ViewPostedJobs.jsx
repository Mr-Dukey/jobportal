import React, { useEffect, useState } from 'react';
import './ViewPostedJobs.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { JobCustomizationAPI } from '../APIContext/APIContext';

export default function ViewPostedJobs() {
    const jobAPI = JobCustomizationAPI();

    const [jobViews, setJobviews] = useState([]);
    const navi = useNavigate();

    /* ======================== Modal =================================== */

    const [showModal, setShowModal] = useState(false);

    const [showJobDetails,setShowJobDetails] = useState({});
    function handleShowModal(id) {
        setShowModal(true);

        axios.get(`${jobAPI}/get-job/${id}`)
            .then((res) => {
                console.log(res);
                
                setShowJobDetails(res.data)
                console.log(showJobDetails);
            })
            .catch(error => console.log(error))

            
    }

    function handleCloseModal(){
        setShowModal(false);
        setShowJobDetails({});
    }

    /* ======================== Modal =================================== */


    /* ======================== APIs =================================== */
    useEffect(() => {
        axios.get(`${jobAPI}/get-all-jobs`)
            .then((res) => {
                setJobviews(res.data)
            })
            .catch(error => console.log(error))
    }, [jobViews]);


    function handleDelete(id) {
        axios.delete(`${jobAPI}/delete-job/${id}`)
            .then(() => {
                navi('/dashboard/posted-jobs')
            })
            .catch(error => console.log(error))

    }
    /* ======================== APIs =================================== */

    return (
        <div className='view-posted-job-page'>
            <Helmet>
                <title>XYZ-Jobs | View Jobs</title>
            </Helmet>
            <table className="view-posted-box">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Position</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>Posted Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobViews.map((items, index) => {
                            
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{items.JobTitle}</td>
                                    <td>{items.JobExperience}</td>
                                    <td>{items.JobSkills}</td>
                                    <td>{new Date(items.JobPostedDate).toLocaleDateString()}</td>
                                    <td>
                                        <button className='job-action-btn job-action-btn1'
                                            onClick={()=>{
                                                handleShowModal(items._id)
                                            }}
                                        >View</button>
                                        <button className='job-action-btn job-action-btn2'
                                            onClick={()=>{
                                                navi(`/dashboard/edit-job/${items._id}`)
                                            }}
                                        >Edit</button>
                                        <button className='job-action-btn job-action-btn3'
                                            onClick={() => {
                                                handleDelete(items._id)
                                            }}
                                        >Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            {/* ================ modal ================== */}

            <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>Job Details</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{showJobDetails.JobTitle}</h5>
                    <p>Company : {showJobDetails.JobCompany}</p>
                    <p>Location : {showJobDetails.JobLocation} | Date Posted : {new Date(showJobDetails.JobPostedDate).toLocaleDateString()}</p>
                    <p>Skills : {showJobDetails.JobSkills}</p>
                    <p>Job Type : {showJobDetails.JobType}</p>
                    <hr />
                    <p>
                        <h5>Description</h5>
                        {showJobDetails.JobDescription}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* ================ modal ================== */}

        </div>
    )
}
