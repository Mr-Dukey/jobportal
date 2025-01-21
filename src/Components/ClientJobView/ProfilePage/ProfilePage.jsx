import React, { useRef } from "react";
import "./ProfilePage.css";
import ProfilePic from "../../../Assets/WhatsApp Image 2024-10-29 at 21.56.50_0676ad14.jpg";
import { Helmet } from "react-helmet";
export default function ProfilePage() {
  return (
    <div className="profile-page-container">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="profile-view">
        {/* Main content */}
        <div className="profile-main-box">
          <div className="profile-picture">
            <img src={ProfilePic} alt="profile-pic" />
          </div>
          <div className="profile-info">
            <div className="profile-main-heading">
              <h3>HARIHARAN. M</h3>
              <h5>Web Developer</h5>
            </div>
            <div className="profile-main-info">
              <div>
                <section className="info location-info">
                  <span class="material-symbols-outlined">location_on</span>
                  <span>Coimbatore</span>
                </section>
                <section className="info phone-info">
                  <span class="material-symbols-outlined">call</span>
                  <span>9843752544</span>
                </section>
                <section className="info mail-info">
                  <span class="material-symbols-outlined">mail</span>
                  <span>harimahe.1317@gmail.com</span>
                </section>
              </div>
              <div>
                <section className="info experience-info">
                  <span class="material-symbols-outlined">work</span>
                  <span>
                    Experience : 1
                  </span>
                </section>
                <section className="info salary-info">
                  <span class="material-symbols-outlined">payments</span>
                  <span>240000</span>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}

        {/* Resume Section */}
        <React.Fragment>
          <ResumeSection />
        </React.Fragment>
        {/* Resume Section */}

        {/* Education */}
          <React.Fragment>
            <EducationSection />
          </React.Fragment>
        {/* Education */}

      </div>
    </div>
  );
}

function ResumeSection() {
  const resume_upload = useRef();

  function handleUploadResume() {
    resume_upload.current.click();
  }
  return (
    <div className="profile-main-box profile-resume">
      <h3>Resume</h3>
      <div className="resume-info">
        <span>Hari.pdf</span>
        <section className="action-btns">
          <button className="action-btn">
            <span class="material-symbols-outlined">download</span>
          </button>
          <button className="action-btn">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </section>
      </div>
      <div className="upload-resume">
        <input type="file" ref={resume_upload} name="" id="" />
        <button onClick={handleUploadResume}>
          <span class="material-symbols-outlined">upload</span>
          Upload Resume
        </button>
        <span>Supported Format: pdf or docx</span>
      </div>
    </div>
  );
}

function EducationSection(){
  return (
    <>
    <div className="profile-main-box profile-education">
      <h3>Education</h3>
      <div className="education-info">
        <div className="education-box">
          <span><strong>Title :</strong> B.Sc, Computer Science</span>
          <span><strong>University / College :</strong> Kongunadu arts and science college , Coimbatore</span>
          <span> <strong>Batch :</strong> 2015-2020</span>
        </div>
        <div className="education-box">
          <span><strong>Title :</strong> M.Sc, Computer Science</span>
          <span><strong>University / College :</strong> Bharathiar University, Coimbatore</span>
          <span> <strong>Batch :</strong> 2021-2023</span>
        </div>
      </div>
    </div>
    </>
  )
}