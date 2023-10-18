import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../src/All Images/pab bottom-logo (1).jpg";

const PerfexHome = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div>
      <div className="container1">
        <div className="row">
          <div className=" mt-1">
            <div className="row">
              <div className=" col-12 col-md-3 sectioncard12">
                <nav className="navbar">
                  <div className="container">
                    <div className="row">
                      <div>
                        {" "}
                        <img
                          src="https://www.perfexcrm.com/wp-content/uploads/2016/02/perfex-crm-logo.jpg"
                          alt="logo"
                          width="200px"
                        />
                      </div>
                      <div></div>
                    </div>

                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleNav}
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className={`collapse navbar-collapse ${
                        isNavVisible ? "show" : ""
                      }`}
                    >
                      <ul className="navbar-nav logostyle mt-3">
                        <li className="nav-item">
                          <a className="nav-link navstyle " href="/Home">
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link  navstyle"
                            href=""
                          >
                            Home Page
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-9">
                <div class="bannersection p-4">
                  <div class="text-start">
                    <h3>Welcome to Perfex Stack</h3>
                    <a href="./AdminDashboard">
                      <button class="buttons21 col-12 col-md-3 mx-2 mt-3">
                        Institute Count <span className="count098">0</span>
                      </button>
                    </a>
                    <a href="/">
                      <button class="buttons1 col-12 col-md-3  mx-2">
                        Users
                      </button>
                    </a>
                    <a href="/">
                      <button class="buttons1 col-12 col-md-3 mx-2  ">
                        Active Users
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfexHome;
