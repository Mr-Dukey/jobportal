import React, { useEffect, useState } from 'react';
import './ViewPostedJobs.css'
import axios from 'axios';

export default function ViewPostedJobs() {
    const [jobViews, setJobiews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2400/job/get-all-jobs')
            .then((res) => {
                setJobiews(res.data)
            })
            .catch(error => console.log(error))
    }, [jobViews])
    return (
        <div className='view-posted-job-page'>
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
                            const postDate = new Date(items.JobPostedDate).toLocaleDateString(); // Properly format the date
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{items.JobTitle}</td>
                                    <td>{items.JobExperience}</td>
                                    <td>{items.JobSkills}</td>
                                    <td>{postDate}</td> {/* Render the formatted date */}
                                    <td>
                                        <button className='job-action-btn job-action-btn1'>View</button>
                                        <button className='job-action-btn job-action-btn2'>Edit</button>
                                        <button className='job-action-btn job-action-btn3'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
