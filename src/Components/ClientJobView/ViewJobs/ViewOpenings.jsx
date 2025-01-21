import React, { useEffect, useState } from "react";
import "./ViewOpenings.css";
import { motion } from "framer-motion";
import axios from "axios";
import { Helmet } from "react-helmet";
import { JobCustomizationAPI } from "../../APIContext/APIContext";
import { Col, Form, Row, Accordion, Modal, Button } from "react-bootstrap";

export default function ViewOpenings() {
  const [jobViews, setJobViews] = useState([]);
  const jobAPI = JobCustomizationAPI();

  useEffect(() => {
    axios
      .get(`${jobAPI}/get-all-jobs`)
      .then((res) => {
        setJobViews(res.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>XYZ-Jobs | Home </title>
      </Helmet>
      <div className="view-openings-page">
        <div className="view-opening-header">
          <SearchJobCard />
        </div>
        <div className="view-opening-sort">
          <div className="view-opening-filter">
            <SearchJobFilter />
          </div>
          <div className="view-opening-area">
            {jobViews.length !== 0 ? (
              jobViews.map((items, index) => {
                if (items.JobActive) {
                  return <JobCard items={items} index={index} />;
                } else {
                  return <h2>No Current Openings</h2>;
                }
              })
            ) : (
              <h2>No Current Openings</h2>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SearchJobCard() {
  return (
    <Row className="search-card">
      <Col xs={12} xl={3}>
        <div className="search-card-input">
          <input
            type="text"
            className="form-control"
            placeholder="Job Title,Keyword..."
          />
        </div>
      </Col>
      <Col xs={12} xl={3}>
        <div className="search-card-input">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
      </Col>
      <Col xs={12} xl={3}>
        <div className="search-card-input">
          <select class="form-select">
            <option data-display="Category">Show All</option>
            <option value="1">Software Developer</option>
            <option value="2">Java Developer</option>
            <option value="3">Software Engineer</option>
            <option value="4">Web Developer</option>
            <option value="5">PHP Developer</option>
            <option value="6">Python Developer</option>
            <option value="7">Front end Developer</option>
            <option value="8">Associate Developer</option>
            <option value="9">Back end Developer</option>
            <option value="10">XML Developer</option>
            <option value="11">.NET Developer</option>
            <option value="12" disabled="">
              Marketting Developer
            </option>
          </select>
        </div>
      </Col>

      <Col xs={12} xl={3} className="search-btn-container">
        <button className="serach-btn">Search</button>
      </Col>
      <Col xs={12} className="d-block d-lg-none search-salary">
        <Accordion flush>
          <Accordion.Header>More Filters</Accordion.Header>
          <Accordion.Body>
            <SearchJobFilter />
          </Accordion.Body>
        </Accordion>
      </Col>
    </Row>
  );
}

function SearchJobFilter() {
  return (
    <div className="job-filter">
      <div className="job-filter-type">
        <h5>Job Type</h5>
        {["Fullttime", "Part Time", "Freelancing", "Remote"].map((types) => {
          return (
            <div className="job-filter-type-inputs">
              <Form.Check type="checkbox" value={types} label={types} />
            </div>
          );
        })}
      </div>
      <div className="job-filter-salary">
        <h5>Salary</h5>
        <div className="salary">
          <Form.Label>Min Salary</Form.Label>
          <Form.Control type="text" />
        </div>
        <div className="salary">
          <Form.Label>Max Salary</Form.Label>
          <Form.Control type="text" />
        </div>
      </div>
      <button className="job-filter-btn">Clear Filter</button>
    </div>
  );
}

function JobCard({ items, index }) {
  const jobAPI = JobCustomizationAPI();

  const [modalShow, setModalShow] = useState(false);
  const [job, setJob] = useState({});

  const handleCloseModal = () => setModalShow(false);

  const handleOpenModal = (id) => {
    setModalShow(true);

    axios
      .get(`${jobAPI}/get-job/${id}`)
      .then((response) => {
        console.log(response.data);

        setJob(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="job-card" key={index}>
      <div className="job-card-header">
        <h5>{items.JobTitle}</h5>
        <h6>Company : {items.JobCompany} </h6>
      </div>

      <div className="job-card-body">
        <p className="job-card-subhead">
          <div>
            <span className="material-symbols-outlined">location_on</span>{" "}
            {items.JobLocation}
          </div>
          <div>
            <span className="material-symbols-outlined">currency_rupee</span>{" "}
            {items.JobSalary.min_salary} - {items.JobSalary.max_salary}
          </div>
          <div>
            <span className="material-symbols-outlined">work</span>{" "}
            {items.JobExperience} years
          </div>
        </p>
        <p className="job-card-description">
          Description : {items.JobDescription}
        </p>
      </div>
      <div className="job-card-footer">
        <button
          onClick={() => {
            handleOpenModal(items._id);
          }}
        >
          <span>Apply Now</span>&nbsp;
          <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">
              <span class="material-symbols-outlined">chevron_right</span>
            </span>
          </span>
        </button>
      </div>
      <ViewOpeningsDialog
        showJob={modalShow}
        closeFunction={handleCloseModal}
        showJobDetails={job}
      />
    </div>
  );
}

function ViewOpeningsDialog({ showJob, closeFunction, showJobDetails }) {
  return (
    <>
      <Modal show={showJob} onHide={closeFunction}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Job Details</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{showJobDetails.JobTitle}</h5>
          <p>Company : {showJobDetails.JobCompany}</p>
          <p>
            Location : {showJobDetails.JobLocation} | Date Posted :{" "}
            {new Date(showJobDetails.JobPostedDate).toLocaleDateString()}
          </p>
          <p>
            Skills :
            <ul>
              {new Array(showJobDetails.JobSkills).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </p>
          <p>Job Type : {showJobDetails.JobType}</p>
          <hr />
          <p>
            <h5>Description</h5>
            {showJobDetails.JobDescription}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFunction}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
