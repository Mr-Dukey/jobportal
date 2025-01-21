import React, { useEffect, useState } from "react";
import "./PortalHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import mypic from "../../Assets/WhatsApp Image 2024-10-29 at 21.56.50_0676ad14.jpg";
import Segolsys from "../../Assets/Segolsys.png";
import {
  companyisAuthenticated,
  isAuthenticated,
  companylogout,
} from "../Authentication/Auth";

import Cookies from "js-cookie";

export default function PortalHeader() {
  const navi = useNavigate();

  /* Dropdown */
  const [profileDropdown, settingsDropdown] = useState(false);
  console.log(profileDropdown);
  /* Dropdown end*/

  /* Conditional Render */
  const [loggedInProfile, setLoggedInProfile] = useState("");

  useEffect(() => {
    setLoggedInProfile(
      companyisAuthenticated() ? "company" : isAuthenticated() ? "user" : ""
    );
  }, []);
  /* Conditional Render end */
  console.log(loggedInProfile);

  return (
    <div className="job-portal-header">
      <div className="logo">
        <img
          src={Segolsys}
          onClick={() => {
            navi("/");
          }}
          alt="logo"
        />
      </div>
      {loggedInProfile ? (
        <>
          {loggedInProfile === "company" ? (
            <>
              <div
                className="account"
                onClick={() => {
                  settingsDropdown((prev) => (prev === true ? false : true));
                }}
              >
                <div className="account-pic d-flex align-items-center">
                  <span class="material-symbols-outlined">menu</span>

                  <div
                    className={
                      profileDropdown === true
                        ? "account-settings-dropdown active"
                        : "account-settings-dropdown"
                    }
                  >
                    <Link>Dashboard</Link>
                    <Link
                      onClick={() => {
                        console.log("dashboard")
                        Cookies.remove("token");
                        companylogout();
                        window.location.reload();
                      }}
                    >
                      Sign Out
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            loggedInProfile === "user" && (
              <>
                <div
                  className="account"
                  onClick={() => {
                    settingsDropdown((prev) => (prev === true ? false : true));
                  }}
                >
                  <div className="account-pic">
                    <img src={mypic} alt="profile" />
                    <div
                      className={
                        profileDropdown === true
                          ? "account-settings-dropdown active"
                          : "account-settings-dropdown"
                      }
                    >
                      <Link>My Profile</Link>
                      <Link>Sign Out</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </>
      ) : (
        <>
          <Button
            className="btn me-3"
            onClick={() => {
              navi("/login");
            }}
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
}
