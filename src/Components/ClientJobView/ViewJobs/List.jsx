import React from 'react'
import './List.css';
import img1 from './company-01.png'
import img2 from './company-02.png'
import img3 from './company-03.png'
import img4 from './company-04.png'
import img5 from './company-05.png'
import img6 from './company-06.png'


export default function List() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-3 '>
                        <div className='core'>
                        </div>
                    </div>
                    <div className='col col-lg-9 '>
                        <div className='core1'>
                            <div className='core2 text-start text-secondary' >
                                <p>Showing results 10 in 200 jobs list</p>
                            </div>
                            <div className="dropdown d-flex justify-content-end gap-2">
                                <button className="btn btn-light text-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by(default)
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Full time</a></li>
                                    <li><a className="dropdown-item" href="#">Part time</a></li>
                                    <li><a className="dropdown-item" href="#">Remote</a></li>
                                    <li><a className="dropdown-item" href="#">Freelancer</a></li>
                                    <li><a className="dropdown-item" href="#">Internship</a></li>
                                </ul>
                                <div style={{ listStyle: 'none' }} className='svg d-flex gap-2 mt-2 '>
                                    <li> <a href="Job"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid-fill text-secondary" viewBox="0 0 16 16">
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                    </svg></a></li>

                                    < li>< svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" fill="currentColor" style={{ color: '#00a7ac' }} class="bi bi-list-ul" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    </svg></li>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'> Senior Receptionist</li>
                                            <li className='core7 w-100 '>Medico.co Ltd</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'>  $20K-$50K /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>05 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>



                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core11'><button>FullTime</button></li>
                                            <li className='core13'><button >PartTime </button></li>
                                            <li className='core131'><button >Remote </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <br></br><br></br>

                            {/* img2 */}


                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'> Senior PHP Developer</li>
                                            <li className='core7 w-100 '>Marko Land Conpany</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'> $50K-$70K  /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>05 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>



                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core11'><button>FullTime</button></li>
                                            <li className='core13'><button >PartTime </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-5 " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <br></br><br></br>

                            {/* img3 */}


                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'> Junior React Developer</li>
                                            <li className='core7 w-100 '>UI.UX Company</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'> $30K-$50K /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>06 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>


                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core13'><button >PartTime </button></li>
                                            <li className='core131'><button >Remote </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-5 " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <br></br><br></br>

                            {/* img4 */}



                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'>Senior React Developer</li>
                                            <li className='core7 w-100 '>UI.UX Company</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'>  $20-$50 /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>06 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>



                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core13'><button >PartTime </button></li>
                                            <li className='core131'><button >Remote </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-5 " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <br></br><br></br>

                            {/* img5 */}


                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img5} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'>Mern Stack Developer</li>
                                            <li className='core7 w-100 '>Germain Group Ltd</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'> $80K-$90K /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>07 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>



                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core11'><button>FullTime</button></li>
                                            <li className='core13'><button >PartTime </button></li>
                                            <li className='core131'><button >Remote </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-5 " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <br></br><br></br>

                            {/* img6 */}



                            <div class="card">
                                <div class="card-body mt-3 ">
                                    <div className='img1 text-start position-absolute'>
                                        <img src={img6} alt="" />
                                    </div>
                                    <div className='core3 m-0  d-flex flex-column flex-md-row'>
                                        <ol className=' cor0 text-start mt-1   mx-5'>
                                            <li className='core4 w-100'> Junior React Developer</li>
                                            <li className='core7 w-100 '>Bistro.Tech Ltd</li>
                                        </ol>
                                        <div style={{ color: '#00a7ac', height: '60px', width: '2px', marginTop: '20px', marginLeft: '15px' }} className='vr d-none d-sm-flex '> </div>

                                        <div className='cor1 justify-content-start  align-item-md-start justify-content-md-center text-start text-md-none mx-3'>
                                            <ol className='cor2 d-flex flex-column'>
                                                <div className='d-flex'>
                                                <li style={{ color: '#00a7ac' }} className=''><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                </svg></li>

                                                <li className=' mt-2  text-secondary'>Salary:<b className='text-dark'> $80K-$90K /</b>  Per Month</li>
                                                </div>
                                                <div className='d-flex'>
                                         <li style={{ color: '#00a7ac' }} className='core8  '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                    </svg></li>
                                                <li className='core9  mt-2 text-secondary '>Deadline: <b className='text-dark'>08 April, 2023</b></li>
                                                </div>
                                            </ol>
                                        </div>



                                    </div>
                                    <div >
                                        <ol className='core10   d-flex flex-row  gap-3 ' style={{ listStyle: 'none', marginLeft: '-30px' }}>
                                            <li className='core11'><button>FullTime</button></li>
                                            <li className='core13'><button >PartTime </button></li>
                                            <li className='core131'><button >Remote </button></li>
                                        </ol>
                                    </div>

                                    <div className='core14 d-flex justify-content-end '  >

                                        <button class='btn ' style={{ color: '#00a7ac', marginTop: '-20px' }}>
                                            <span className='position-relative top-0 start-0 m-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                </svg>
                                                <span class="icon-link icon-link-hover position-absolute top-50 translate-middle start-0 transalate-middle me-auto" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-5 " viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                    </svg>
                                                </span>

                                            </span>
                                            Apply Now
                                        </button>

                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>

                </div>
            </div>
        </div >
    )
}
