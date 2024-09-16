import React from 'react';
import './ViewPostedJobs.css'

export default function ViewPostedJobs() {
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
                    <tr>
                        <td>1.</td>
                        <td>Software Engineer</td>
                        <td>2-3</td>
                        <td>HTML,...</td>
                        <td>17/12/2002</td>
                        <td>
                            <button className='job-action-btn job-action-btn1'>View</button>
                            <button className='job-action-btn job-action-btn2'>Edit</button>
                            <button className='job-action-btn job-action-btn3'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
