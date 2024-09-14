import React from 'react'
import './Job.css';

import { Link, Outlet } from "react-router-dom";


export default function Job() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-3 col-sm-5'>
                        <div className='text '>
                        </div>
                    </div>
                    <div className='col col-lg-9 col-sm-5 ' >
                        <div className='text1 '>
                            <div className='para text-start  mx-5'><p>Showing results 10 in 200 jobs list</p></div>
                            <div class=" text-end">
                                <div className='para1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grid-fill   active " viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-list-ul  mx-3 text-dark" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                        </svg>
                                </div>
                            </div>

                            <div className='bor'>
                                <div className='text2'>
                                    <div className='text3 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text4   text-start '><p>WordPress Developer</p></li>
                                    </div>
                                    <div className='text5 text-start'>
                                        <li className='bis'>Bistro Tech Ltd</li>
                                        <li><div class="vr mx-2 mt-1  d-none d-sm-flex "></div></li>
                                        <li className='text6 '> <p><b className='text-dark '>Deadline:</b> </p>2 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text7 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'>$60-$90 /</b>  Per Hour</li>
                                    </div>
                                    <div className='text8 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 3-3.5 Years</b> </li>
                                    </div>
                                    <div className='text9 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'>Dhaka, Bangladesh</b> </li>
                                    </div>
                                    <div className='text10  text-start text-center mx-4'>
                                        <label htmlFor="text"> Full time</label>
                                    </div>
                                    <div className='text11 mt-5 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute mt-0 top-50 translate-middle start-0 transalate-middle me-auto mx-0 ms-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div>


                            {/* img1 */}


                            {/* <div className='bor'>
                                <div className='text2'>
                                    <div className='text13 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text14   text-start '><p>
                                            Assistant Manager</p></li>
                                    </div>
                                    <div className='text15 text-start'>
                                        <li className='han'>Hangman Gold</li>
                                        <li><div class="vr mx-2 mt-1 d-none d-sm-flex "></div></li>
                                        <li className='text16'> <p><b className='text-dark'>Deadline:</b> </p>3 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text17 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'>$20k-$50k  /</b>  Per Hour</li>
                                    </div>
                                    <div className='text18 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 2-2.5 Years</b> </li>
                                    </div>
                                    <div className='text19 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'>Sylhet, Bangladesh</b> </li>
                                    </div>
                                    <div className='text20  text-start text-center mx-4'>
                                        <label htmlFor="text "> Full time</label>
                                    </div>
                                    <div className='text21 mt-5 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto mx-0 ms-0 mt-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div> */}

                            {/* img2 */}

                            {/* <div className='bor'>
                                <div className='text2'>
                                    <div className='text23 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text24   text-start '><p>
                                            UI/UX Designer</p></li>
                                    </div>
                                    <div className='text25 text-start'>
                                        <li className='tec'>Tech-Bath IT Ltd</li>
                                        <li><div class="vr mx-2 mt-1  d-none d-sm-flex "></div></li>
                                        <li className='text26  '> <p><b className='text-dark'>Deadline:</b> </p>5 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text27 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'>$50K-$90K  /</b>  Per Hour</li>
                                    </div>
                                    <div className='text28 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 2-3 Years</b> </li>
                                    </div>
                                    <div className='text29 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'>Chicago, Australia</b> </li>
                                    </div>
                                    <div className='text30  text-start text-center mx-4'>
                                        <label htmlFor="text "> Part time</label>
                                    </div>
                                    <div className='text31 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto  mx-0 ms-0 mt-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div> */}


                            {/* img3 */}

                            {/* <div className='bor'>
                                <div className='text2'>
                                    <div className='text33 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text34   text-start '><p>
                                            Junior Receptionist</p></li>
                                    </div>
                                    <div className='text35 text-start'>
                                        <li className='gan'>Gangster.Hide</li>
                                        <li><div class="vr mx-2 mt-1  d-none d-sm-flex "></div></li>
                                        <li className='text36  '> <p><b className='text-dark'>Deadline:</b> </p>6 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text37 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'> $60-$80  /</b>  Per Hour</li>
                                    </div>
                                    <div className='text38 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 1-1.5 Years</b> </li>
                                    </div>
                                    <div className='text39 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'> Dhaka, Bangladesh</b> </li>
                                    </div>
                                    <div className='text40  text-start text-center mx-4'>
                                        <label htmlFor="text "> Part time</label>
                                    </div>
                                    <div className='text41 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto  mx-0 ms-0 mt-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div> */}




                            {/* img4 */}

                            {/* <div className='bor'>
                                <div className='text2'>
                                    <div className='text43 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text44   text-start '><p>
                                            Senior Laboratoriest</p></li>
                                    </div>
                                    <div className='text45 text-start'>
                                        <li className='lab'>Laballo.Lab Ltd</li>
                                        <li><div class="vr mx-2 mt-1   d-none d-sm-flex"></div></li>
                                        <li className='text46  '> <p><b className='text-dark'>Deadline:</b> </p>9 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text47 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'>$40k-$60k  /</b>  Per Hour</li>
                                    </div>
                                    <div className='text48 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 3-4 Years</b> </li>
                                    </div>
                                    <div className='text49 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'>New-York, USA</b> </li>
                                    </div>
                                    <div className='text50  text-start text-center mx-4'>
                                        <label htmlFor="text "> Full time</label>
                                    </div>
                                    <div className='core51 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '40px' }}>
                                            <span className='position-relative top-0 start-0 m-1 '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto  mx-0 ms-0 mt-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div> */}



                            {/* img5 */}
                            {/* <div className='bor'>
                                <div className='text2'>
                                    <div className='text53 '>
                                        <li className='text-start mt-5 mx-3'> <img src={""} alt="" /> </li>
                                        <li className=' text54   text-start '><p>
                                            Medical Nurse</p></li>
                                    </div>
                                    <div className='text55 text-start'>
                                        <li className='mar'>Marko Company</li>
                                        <li><div class="vr mx-2 mt-1  d-none d-sm-flex "></div></li>
                                        <li className='text56 '> <p><b className='text-dark'>Deadline:</b> </p>9 April, 2023 </li>
                                    </div>
                                    <div ><hr></hr></div>
                                    <div className='text57 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot mt-3 " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Salary: <b className='text-dark'>$60k-$90k  /</b>  Per Hour</li>
                                    </div>
                                    <div className='text58 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Experience: <b className='text-dark'> 3-3.5 Years</b> </li>
                                    </div>
                                    <div className='text59 d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot  " viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <li>Location: <b className='text-dark'>Dhaka, Bangladesh</b> </li>
                                    </div>
                                    <div className='text60  text-start text-center mx-4'>
                                        <label htmlFor="text"> Full time</label>
                                    </div>
                                    <div className='text61 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto  mx-0 ms-0 mt-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            ApplyNow
                                        </button>

                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
