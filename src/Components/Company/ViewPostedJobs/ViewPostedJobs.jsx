import React, { useEffect, useState } from "react";
import "./ViewPostedJobs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Modal, Toast, ToastContainer } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { JobCustomizationAPI } from "../../APIContext/APIContext";
import segolsysLogo from '../../../Assets/SegolsysLogo.png';

export default function ViewPostedJobs() {
  const jobAPI = JobCustomizationAPI();

  
  const [jobViews, setJobviews] = useState([]);
  const navi = useNavigate();
  /* More action */  
  const [moreAction, setMoreAction] = useState(false);
  /* More action end */

  /* toast */
    const [toastBox,setToastBox] = useState(false)  
    const [toastMessage,setToastMessage] = useState("")  
  /* toast end */  
  
  /* ======================== Modal =================================== */

  const [showModal, setShowModal] = useState(false);

  const [showJobDetails, setShowJobDetails] = useState({});
  function handleShowModal(id) {
    setShowModal(true);

    axios
      .get(`${jobAPI}/get-job/${id}`)
      .then((res) => {
        setShowJobDetails(res.data);
      })
      .catch((error) => console.log(error));
  }

  function handleCloseModal() {
    setShowModal(false);
    setShowJobDetails({});
  }

  /* ======================== Modal =================================== */

  /* ======================== APIs =================================== */
  useEffect(() => {
    axios
      .get(`${jobAPI}/get-all-jobs`)
      .then((res) => {
        setJobviews(res.data);
      })
      .catch((error) => console.log(error));
  }, [jobViews,jobAPI]);

  function handleDelete(id) {
    axios
      .delete(`${jobAPI}/delete-job/${id}`)
      .then(() => {
        navi("/dashboard/posted-jobs");
      })
      .catch((error) => console.log(error));
  }

  function handleEditStatus(id, status) {
    axios
      .put(
        `${jobAPI}/active-job/${id}`,
        status ? { jobactive: "false" } : { jobactive: "true" }
      )
      .then((res) => {
        setToastBox(true);
        setToastMessage(`Job Status : ${res.data.message}`);
        setTimeout(()=>{
          setToastBox(false);
        },5000);
      })
      .catch((error) => console.log(error));
  }
  /* ======================== APIs =================================== */

  return (
    <div className="view-posted-job-page">
      <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
        <Toast show={toastBox}>
          <Toast.Header>
          <img src={segolsysLogo} className="me-2" style={{height:"15px",width:"15px"}} alt="" />
            <strong className="me-auto">XYZ-Jobs</strong>
          </Toast.Header>
          <Toast.Body>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

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
          {jobViews.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.JobTitle}</td>
                <td>{items.JobExperience}</td>
                <td>{items.JobSkills.join(",")}</td>
                <td>{new Date(items.JobPostedDate).toLocaleDateString()}</td>
                <td className="d-flex justify-content-around align-items-center">
                  <Form.Check
                    type="switch"
                    onChange={() => {
                      handleEditStatus(items._id, items.JobActive);
                    }}
                    checked={items.JobActive === true}
                  />
                  <button
                    className="more-actions"
                    onClick={() => {
                      setMoreAction(moreAction ? false : true);
                    }}
                  >
                    <span class="material-symbols-outlined">more_horiz</span>
                  </button>
                  {/* More Action dropdown */}
                  {/* <section className="more-action-menu"> */}
                  <section
                    className={
                      moreAction
                        ? "more-action-menu active-action-menu"
                        : "more-action-menu"
                    }
                  >
                    <button
                      className="job-action-btn job-action-btn1"
                      onClick={() => {
                        handleShowModal(items._id);
                        setMoreAction(false);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="job-action-btn job-action-btn2"
                      onClick={() => {
                        navi(`/dashboard/edit-job/${items._id}`);
                        setMoreAction(false);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="job-action-btn job-action-btn3"
                      onClick={() => {
                        handleDelete(items._id);
                        setMoreAction(false);
                      }}
                    >
                      Delete
                    </button>
                  </section>
                  {/* More Action dropdown end */}
                </td>
                {/* <td>
                  <button
                    className="job-action-btn job-action-btn1"
                    onClick={() => {
                      handleShowModal(items._id);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="job-action-btn job-action-btn2"
                    onClick={() => {
                      navi(`/dashboard/edit-job/${items._id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="job-action-btn job-action-btn3"
                    onClick={() => {
                      handleDelete(items._id);
                    }}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            );
          })}
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ================ modal ================== */}
    </div>
  );
}
