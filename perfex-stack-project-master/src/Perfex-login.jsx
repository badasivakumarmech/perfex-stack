import { Link } from "react-router-dom";

import React from "react";
import sideimage from "./All Images/Logo133.jpeg";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  let navigate = useNavigate();

  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const isValidEmail = (UserEmail) => {
    // A simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(UserEmail);
  };

  console.log(UserEmail);
  const usersData = {
    UserEmail: UserEmail,
    UserPassword: UserPassword,
  };
  console.log(usersData);

  const onSubmitBtn = (e) => {
    e.preventDefault();

    if (UserEmail && UserPassword !== "") {
      if (!isValidEmail(UserEmail, UserPassword)) {
        toast.error("Enter a valid UserEmail address", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      const userData = { UserEmail, UserPassword };

      axios
        .post("http://localhost:4010/Userlogin", userData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

            toast.success("Successfully logged in!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/PerfexHome");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              if (error.response.data.message === "Email not found") {
                toast.error("UserEmail not found. Please check your UserEmail.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              } else if (error.response.data.message === "Incorrect password") {
                toast.error("Incorrect password. Please check your password.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            } else {
              toast.error(
                "An error occurred on the server. Please try again later.",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
            }
          } else {
            toast.error(
              "An error occurred. Please check your network connection and try again.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
            console.error(error);
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  const [loginpassword, setloginpassword] = useState(false);

  const ShowcomfirmPassword = () => {
    setloginpassword(!loginpassword);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="container51">
            <div class="container mt-5">
              <div class="row">
                <div class="col-12 col-md-1"></div>
                <div class="col-12 col-md-4 d-none d-md-block">
                  <div class="card shadow logincard2">
                    <img src={sideimage} alt={sideimage} />
                  </div>
                </div>
                <div class="col-12 col-md-1"></div>
                <div class="col-12 col-md-6">
                  <div class="card shadow logincard1 ">
                    <div class="loginheader">
                      <img
                        src="https://www.freeiconspng.com/thumbs/login-icon/login-icon-17.jpg"
                        alt={sideimage}
                        className="w-25"
                      />
                    </div>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                    <form className="forms2" onSubmit={onSubmitBtn}>
                      <label className="heading123 m-2">Email ID</label>
                      <br />
                      <input
                        type="text"
                        className="p1"
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="  Enter your UserEmail ID"
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={UserEmail}
                      />
                      <br />

                       
                      <div className="input-with-icon">
                        <label className="heading123 m-2">Password</label>
                        <br />
                        <div className="">
                          <input
                            type={loginpassword ? "text" : "password"}
                            className="p10912"
                            style={{ border: "1px solid #c9bed7" }}
                            placeholder="   Minimum 6 characters"
                            onChange={(e) => setUserPassword(e.target.value)}
                            value={UserPassword}
                          />
                          <i
                            class="fa-regular fa-eye icon1"
                            onClick={ShowcomfirmPassword}
                          ></i>
                        </div>
                      </div>

                      <a
                        href="/ForgotPassword"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="forgetpassword1">
                          Forgot password?
                        </span>
                      </a>
                      <button class="Registerbtn11 w-25 mx-4 mb-3" type="submit">
                        Sign in
                      </button>

                      <br />
                    </form>
                  </div>
                  <a href="">
                    <button class="Register shadow  d-md-none">
                      Register for free
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
