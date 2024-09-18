import React, { useEffect, useState } from 'react';
import './ViewPostedJobs.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewPostedJobs() {
    const [jobViews, setJobviews] = useState([]);
    const navi = useNavigate();

    useEffect(() => {
        axios.get('https://jobportal-backend-0qiv.onrender.com/job/get-all-jobs')
            .then((res) => {
                setJobviews(res.data)
            })
            .catch(error => console.log(error))
    }, [jobViews]);


    function handleDelete(id){
        axios.delete('https://jobportal-backend-0qiv.onrender.com/job/delete-job/'+id)
        .then(()=>{
            navi('/dashboard/posted-jobs')
        })
        .catch(error => console.log(error))

    }
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
                            const postDate = new Date(items.JobPostedDate).toLocaleDateString(); 
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{items.JobTitle}</td>
                                    <td>{items.JobExperience}</td>
                                    <td>{items.JobSkills}</td>
                                    <td>{postDate}</td>
                                    <td>
                                        <button className='job-action-btn job-action-btn1'>View</button>
                                        <button className='job-action-btn job-action-btn2'>Edit</button>
                                        <button className='job-action-btn job-action-btn3'
                                            onClick={()=>{
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
        </div>
    )
}
