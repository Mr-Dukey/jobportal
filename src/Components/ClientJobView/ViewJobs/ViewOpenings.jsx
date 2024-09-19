import React, { useEffect, useState } from 'react';
import './ViewOpenings.css';
import { motion } from 'framer-motion';
import axios from 'axios';


export default function ViewOpenings() {
    const [jobViews, setJobViews] = useState([]);

    useEffect(() => {
        axios.get(`https://jobportal-backend-0qiv.onrender.com/job/get-all-jobs`)
        // axios.get(`http://localhost:2400/job/get-all-jobs`)
            .then((res) => {
                setJobViews(res.data)
            })
            .catch(error => console.log(error))

    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='view-openings-page'>
                <div className="view-opening-header">
                    <h3>Current Openings</h3>
                    <div className="view-opening-type">
                        <span class="material-symbols-outlined">
                            grid_view
                        </span>
                        <span class="material-symbols-outlined">
                            lists
                        </span>
                    </div>
                </div>
                <div className="view-opening-area">
                    {   jobViews.length!==0?
                        jobViews.map((items, index) => {
                            return (
                                <div className="job-card" key={index}>
                                    <div className="job-card-header">
                                        <h5>{items.JobTitle}</h5>
                                        <h6>Company : {items.JobCompany} </h6>
                                    </div>

                                    <div className="job-card-body">
                                        <p className='job-card-subhead'>
                                            <div>
                                                <span className="material-symbols-outlined">
                                                    location_on
                                                </span> {items.JobLocation}
                                            </div>
                                            <div>
                                                <span className="material-symbols-outlined">
                                                    currency_rupee
                                                </span> {items.JobSalary.min_salary} - {items.JobSalary.max_salary}
                                            </div>
                                            <div>
                                                <span className="material-symbols-outlined">
                                                    work
                                                </span> {items.JobExperience} years
                                            </div>
                                        </p>
                                        <p className='job-card-description'>
                                            Description : {items.JobDescription}
                                        </p>
                                    </div>
                                    <div className="job-card-footer">
                                        <button>
                                            <span>
                                                Apply Now
                                            </span>&nbsp;
                                            <span class="material-symbols-outlined">
                                                <span class="material-symbols-outlined">
                                                    <span class="material-symbols-outlined">
                                                        chevron_right
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h2>No Current Openings</h2>
                    }
                </div>
            </div>
        </motion.div>
    )
}
