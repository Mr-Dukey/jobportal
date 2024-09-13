import React from 'react'
import './NewJob.css'


export default function NewJob() {
    return (
        <div className='new-job-page'>

            <div className="new-job-post">
                <h2>Post a Job</h2>
            </div>


            
            <div className="new-job-form">
                <div className="new-job-sections">
                    <div className="row wholeform" >
                        <h5 style={{ height: '52px' }}>Job Information:</h5>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="formleft">
                                <div className="job">
                                    <p>Job Title*</p>
                                    <div class="input-group jobtitle flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                        </svg></span>
                                        <input type="text" placeholder="Senior UI/UX Engineer" />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Vacancies*</p>
                                    <div class="input-group jobtitle flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" placeholder="07 Person" />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Job Type*</p>
                                    <div class="input-group jobtitle1 flex-nowrap">

                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <select className='form-select shadow-none' >
                                            <option>Full time</option>
                                            <option>Part time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Job Tag*</p>
                                    <div class="input-group jobtitle flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" placeholder="Type Tag and press enter.." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="formright">
                                <div className="job">
                                    <p>Job Category*</p>
                                    <div class="input-group jobtitle1 flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <select className='form-select shadow-none' >
                                            <option>UI/UX Designer</option>
                                            <option>Frontend Developer</option>
                                            <option>Next JS</option>
                                            <option>Laravel Developer</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="job">
                                    <p>Experience Level*</p>
                                    <div class="input-group jobtitle flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" placeholder="Type Experiences" />
                                    </div>
                                </div>
                                <div className="job">
                                    <p>Deadline*</p>
                                    <div class="input-group jobtitle flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg></span>
                                        <input type="text" placeholder="Type Experiences" />
                                    </div>
                                </div>


                            </div>
                        </div>

                        <h6 style={{ fontSize: '14px' }}>Job Description*</h6>
                        <div>
                            <textarea className='description' placeholder='Type a message...' rows="10" cols="105"></textarea>
                        </div>

                        <div className='declaration'>
                            <div class="form-check check1">
                                <input class="form-check-input" type="checkbox" />
                                <label>
                                    Here, I accepted company terms & conditions.
                                </label>
                            </div>
                        </div>

                        <div className="postnow">
                            <button>Post Now</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
