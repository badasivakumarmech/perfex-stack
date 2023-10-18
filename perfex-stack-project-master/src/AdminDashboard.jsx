import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AdminDashboard = () => {
  const [addblogslist, setAddblogslist] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    Sno: "",
    InstituteName: "",
    PrimaryEmail: "",
    HeadName: "",
    // Add other form fields here
  });
  const openEditForm = (item) => {
    setEditingItem(item);
    setFormData({
      Sno: item.Sno,
      InstituteName: item.InstituteName,
      PrimaryEmail: item.PrimaryEmail,
      HeadName: item.HeadName,
      InstituteCode: item.InstituteCode,
      // Populate other form fields as well
    });
  };

  const updateItem = () => {
    const updatedList = addblogslist.map((item) => {
      if (item._id === editingItem._id) {
        return {
          ...item,
          Sno: formData.Sno,
          InstituteName: formData.InstituteName,
          PrimaryEmail: formData.PrimaryEmail,
          HeadName: formData.HeadName,
          InstituteCode: formData.InstituteCode,
          // Update other fields as well
        };
      }
      return item;
    });

    setAddblogslist(updatedList);
    setEditingItem(null);
  };
  const onUpdate = (e) => {
    e.preventDefault();
    updateItem();
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:4010/allAddInstitutes";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAddblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  //Add Institute

 
  const [InstituteName, setInstituteName] = useState("");
  const [HeadName, setHeadName] = useState("");
  const [PrimaryEmail, setPrimaryEmail] = useState("");
  const [PrimaryContactNumber, setPrimaryContactNumber] = useState("");
  const [SecondaryEmail, setSecondaryEmail] = useState("");
  const [SecondaryContactNumber, setSecondaryContactNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [InstituteCode, setInstituteCode] = useState("");
  const [InstituteType, setInstituteType] = useState("");
  const [AxiosPlans, setAxiosPlans] = useState("");
  const [Password, setPassword] = useState("");

  const [data1, setdata1] = useState([]);
  console.log(InstituteName);
  const AddInstitute = {
   
    InstituteName: InstituteName,
    HeadName: HeadName,
    PrimaryEmail: PrimaryEmail,
    PrimaryContactNumber: PrimaryContactNumber,
    SecondaryEmail: SecondaryEmail,
    SecondaryContactNumber: SecondaryContactNumber,
    Address: Address,
    City: City,
    InstituteCode: InstituteCode,
    InstituteType: InstituteType,
    AxiosPlans: AxiosPlans,
    Password: Password,
  };
  console.log(InstituteName);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
       
      InstituteName &&
      HeadName &&
      PrimaryEmail &&
      PrimaryContactNumber &&
      SecondaryEmail &&
      SecondaryContactNumber &&
      Address &&
      City &&
      InstituteCode &&
      InstituteType &&
      AxiosPlans &&
      Password !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4010/AddInstitute", AddInstitute, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data1);

  const deleteItem = (id) => {
    const updatedList = addblogslist.filter((blog) => blog._id !== id);
    setAddblogslist(updatedList);
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
                        <li className="nav-item ">
                          <a className="nav-link navstyle " href="/Home">
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link navstyle" href="">
                            Home Page
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-8">
                <div class="">
                  <div className="card section-31 shadow">
                    <div className="d-flex flex-row">
                      <div>
                        <h2 className="mt-2 mx-4 mt-3">institution</h2>
                      </div>
                      <div className="col-12 col-md-8"></div>

                      <div style={{ marginLeft: "auto" }} class="m-2">
                        {/* <b class="resumeh7 ">+ Add Employment</b> */}
                        <div>
                          {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            className="mx-2"
                          >
                            <i
                              type="button"
                              class="material-symbols-outlined mx-3 mt-4"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal23"
                            >
                              edit_square
                            </i>
                            <b class="resumeh7 row mx-3">+Add</b>
                          </button>
                          <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                          />

                          <div class="modal" id="myModal23">
                            <div class="modal-dialog ">
                              <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                  <h4 class="modal-title">Add Institute</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                  <form action="" onSubmit={onSubmitForm}>
                                     
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Institute Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Institute Name"
                                        onChange={(e) =>
                                          setInstituteName(e.target.value)
                                        }
                                        value={InstituteName}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Head Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Head Name"
                                        onChange={(e) =>
                                          setHeadName(e.target.value)
                                        }
                                        value={HeadName}
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Primary Email :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Primary Email"
                                          onChange={(e) =>
                                            setPrimaryEmail(e.target.value)
                                          }
                                          value={PrimaryEmail}
                                        />
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Primary Contact Number :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Primary Contact Number"
                                          onChange={(e) =>
                                            setPrimaryContactNumber(
                                              e.target.value
                                            )
                                          }
                                          value={PrimaryContactNumber}
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Secondary Email :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Secondary Email"
                                          onChange={(e) =>
                                            setSecondaryEmail(e.target.value)
                                          }
                                          value={SecondaryEmail}
                                        />
                                      </div>
                                      <div className="col-12 col-md-6 ">
                                        <label className="headingAdd">
                                          Secondary Contact Number :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Secondary Contact Number"
                                          onChange={(e) =>
                                            setSecondaryContactNumber(
                                              e.target.value
                                            )
                                          }
                                          value={SecondaryContactNumber}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Address :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Address"
                                        onChange={(e) =>
                                          setAddress(e.target.value)
                                        }
                                        value={Address}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        City Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter City Name"
                                        onChange={(e) =>
                                          setCity(e.target.value)
                                        }
                                        value={City}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Institute Code :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Institute Code"
                                        onChange={(e) =>
                                          setInstituteCode(e.target.value)
                                        }
                                        value={InstituteCode}
                                      />
                                    </div>

                                    <div className=" mt-3">
                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Institute Type :
                                        </label>
                                        <br />
                                        <select
                                          name=""
                                          id=""
                                          onChange={(e) =>
                                            setInstituteType(e.target.value)
                                          }
                                          value={InstituteType}
                                        >
                                          <option
                                            value="School"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            School
                                          </option>
                                          <option
                                            value="Collage"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Collage
                                          </option>
                                          <option
                                            value="University"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            University
                                          </option>
                                          <option
                                            value="Education Society"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Education Society
                                          </option>
                                          <option
                                            value="Training Institute"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Training Institute
                                          </option>
                                          <option
                                            value="NGOs"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            NGOs
                                          </option>
                                        </select>
                                      </div>
                                      <br />

                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Axios Plans :
                                        </label>
                                        <br />
                                        <select
                                          name=""
                                          id=""
                                          onChange={(e) =>
                                            setAxiosPlans(e.target.value)
                                          }
                                          value={AxiosPlans}
                                        >
                                          <option
                                            value="Exam Practice"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Exam Practice
                                          </option>
                                          <option
                                            value="LMS"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            LMS
                                          </option>
                                          <option
                                            value="Mock Interview"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Mock Interview
                                          </option>
                                          <option
                                            value="Previous papers"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Previous papers
                                          </option>
                                        </select>
                                      </div>
                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Password :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Password"
                                          onChange={(e) =>
                                            setPassword(e.target.value)
                                          }
                                          value={Password}
                                        />
                                      </div>
                                    </div>

                                    <div class="modal-footer mt-3">
                                      <button
                                        type="submit"
                                        class="btn btn-success"
                                        data-bs-dismiss="modal"
                                      >
                                        Add Institute
                                      </button>
                                    </div>
                                  </form>
                                </div>

                                {/* <!-- Modal footer --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="section-4">
                      <div class="d-flex flex-row">
                        <p class="info col-12 col-md-1 mx-3">S.no</p>
                        <p class="info col-12 col-md-2">Name</p>
                        <p class="info col-12 col-md-3">Email</p>

                        <p class="info col-12 col-md-1">Head</p>
                        <p class="info col-12 col-md-1 mx-3">UserCount</p>
                        <p class="info col-12 col-md-2 mx-3">code</p>
                        <p class="info col-12 col-md-1">Actions</p>
                      </div>
                    </div>
                    {addblogslist.map((blog) => (
                      <div key={blog._id}>
                        <ul className="m-2 text-left">
                          <div className="d-flex flex-row">
                            <li className="  col-12 col-md-1">{blog.Sno}</li>
                            <li className=" col-12 col-md-2">
                              {blog.InstituteName}
                            </li>
                            <li className="  col-12 col-md-3 ">
                              {blog.PrimaryEmail}
                            </li>
                            <li className=" col-12 col-md-2">
                              {blog.HeadName}
                            </li>
                            <li className="  col-12 col-md-1">12</li>
                            <li className="  col-12 col-md-2">
                              {blog.InstituteCode}
                            </li>
                            <li className=" col-12 col-md-1">
                              <div className="d-flex flex-row">
                                <span className="material-symbols-outlined">
                                  visibility
                                </span>
                                <div>
                                  <button
                                    style={{
                                      border: "none",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    <i
                                      type="button"
                                      className="material-symbols-outlined"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal234"
                                      onClick={() => openEditForm(blog)}
                                    >
                                      edit_square
                                    </i>
                                  </button>
                                  <ToastContainer
                                    position="top-right"
                                    autoClose={1000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored"
                                  />
                                  {/* <div className="modal" id="myModal234">
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h4 className="modal-title">
                                            Add Institute
                                          </h4>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                          ></button>
                                        </div>
                                        <div className="modal-body">
                                          <form
                                            action=""
                                            onSubmit={onSubmitForm}
                                          >
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                S.No :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter Sno"
                                                onChange={(e) =>
                                                  setSno(e.target.value)
                                                }
                                                value={Sno}
                                              />
                                            </div>
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                Institute Name :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter Institute Name"
                                                onChange={(e) =>
                                                  setInstituteName(
                                                    e.target.value
                                                  )
                                                }
                                                value={InstituteName}
                                              />
                                            </div>
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                Head Name :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter Head Name"
                                                onChange={(e) =>
                                                  setHeadName(e.target.value)
                                                }
                                                value={HeadName}
                                              />
                                            </div>
                                            <div className="row">
                                              <div className="col-12 col-md-6">
                                                <label className="headingAdd">
                                                  Primary Email :
                                                </label>
                                                <br />
                                                <input
                                                  type="text"
                                                  className="etotal"
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                  placeholder="Enter Primary Email"
                                                  onChange={(e) =>
                                                    setPrimaryEmail(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={PrimaryEmail}
                                                />
                                              </div>
                                              <div className="col-12 col-md-6">
                                                <label className="headingAdd">
                                                  Primary Contact Number :
                                                </label>
                                                <br />
                                                <input
                                                  type="text"
                                                  className="etotal"
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                  placeholder="Enter Primary Contact Number"
                                                  onChange={(e) =>
                                                    setPrimaryContactNumber(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={PrimaryContactNumber}
                                                />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-12 col-md-6">
                                                <label className="headingAdd">
                                                  Secondary Email :
                                                </label>
                                                <br />
                                                <input
                                                  type="text"
                                                  className="etotal"
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                  placeholder="Enter Secondary Email"
                                                  onChange={(e) =>
                                                    setSecondaryEmail(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={SecondaryEmail}
                                                />
                                              </div>
                                              <div className="col-12 col-md-6 ">
                                                <label className="headingAdd">
                                                  Secondary Contact Number :
                                                </label>
                                                <br />
                                                <input
                                                  type="text"
                                                  className="etotal"
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                  placeholder="Enter Secondary Contact Number"
                                                  onChange={(e) =>
                                                    setSecondaryContactNumber(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={SecondaryContactNumber}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                Address :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter Address"
                                                onChange={(e) =>
                                                  setAddress(e.target.value)
                                                }
                                                value={Address}
                                              />
                                            </div>
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                City Name :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter City Name"
                                                onChange={(e) =>
                                                  setCity(e.target.value)
                                                }
                                                value={City}
                                              />
                                            </div>
                                            <div className="col-12 col-md-6 m-2">
                                              <label className="headingAdd">
                                                Institute Code :
                                              </label>
                                              <br />
                                              <input
                                                type="text"
                                                className="etotal"
                                                style={{
                                                  border: "1px solid black",
                                                }}
                                                placeholder="Enter Institute Code"
                                                onChange={(e) =>
                                                  setInstituteCode(
                                                    e.target.value
                                                  )
                                                }
                                                value={InstituteCode}
                                              />
                                            </div>

                                            <div className=" mt-3">
                                              <div className="col-12 col-md-6 m-2">
                                                <label className="headingAdd">
                                                  Institute Type :
                                                </label>
                                                <br />
                                                <select
                                                  name=""
                                                  id=""
                                                  onChange={(e) =>
                                                    setInstituteType(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={InstituteType}
                                                >
                                                  <option
                                                    value="School"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    School
                                                  </option>
                                                  <option
                                                    value="Collage"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Collage
                                                  </option>
                                                  <option
                                                    value="University"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    University
                                                  </option>
                                                  <option
                                                    value="Education Society"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Education Society
                                                  </option>
                                                  <option
                                                    value="Training Institute"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Training Institute
                                                  </option>
                                                  <option
                                                    value="NGOs"
                                                    onChange={(e) =>
                                                      setInstituteType(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    NGOs
                                                  </option>
                                                </select>
                                              </div>
                                              <br />

                                              <div className="col-12 col-md-6 m-2">
                                                <label className="headingAdd">
                                                  Axios Plans :
                                                </label>
                                                <br />
                                                <select
                                                  name=""
                                                  id=""
                                                  onChange={(e) =>
                                                    setAxiosPlans(
                                                      e.target.value
                                                    )
                                                  }
                                                  value={AxiosPlans}
                                                >
                                                  <option
                                                    value="Exam Practice"
                                                    onChange={(e) =>
                                                      setAxiosPlans(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Exam Practice
                                                  </option>
                                                  <option
                                                    value="LMS"
                                                    onChange={(e) =>
                                                      setAxiosPlans(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    LMS
                                                  </option>
                                                  <option
                                                    value="Mock Interview"
                                                    onChange={(e) =>
                                                      setAxiosPlans(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Mock Interview
                                                  </option>
                                                  <option
                                                    value="Previous papers"
                                                    onChange={(e) =>
                                                      setAxiosPlans(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    Previous papers
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-md-6 m-2">
                                                <label className="headingAdd">
                                                  Password :
                                                </label>
                                                <br />
                                                <input
                                                  type="text"
                                                  className="etotal"
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                  placeholder="Enter Password"
                                                  onChange={(e) =>
                                                    setPassword(e.target.value)
                                                  }
                                                  value={Password}
                                                />
                                              </div>
                                            </div>

                                            <div class="modal-footer mt-3">
                                              <button
                                                type="submit"
                                                className="btn btn-danger"
                                                data-bs-dismiss="modal"
                                              >
                                                Update
                                              </button>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                                <button
                                  className="material-symbols-outlined mx-1"
                                  type="submit"
                                  style={{
                                    backgroundColor: "white",
                                    border: "none",
                                  }}
                                  onClick={() => deleteItem(blog._id)}
                                >
                                  delete
                                </button>
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div>
                    ))}
                    {editingItem && (
                      <div className="modal" id="myModal234">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title">Edit Institute</h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form action="" onSubmit={updateItem}>
                                <div className="col-12 col-md-6 m-2">
                                  <label className="headingAdd">S.No :</label>
                                  <br />
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{
                                      border: "1px solid black",
                                    }}
                                    placeholder="Enter Sno"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        Sno: e.target.value,
                                      })
                                    }
                                    value={formData.Sno}
                                  />
                                </div>
                                <div className="col-12 col-md-6 m-2">
                                  <label className="headingAdd">
                                    Institute Name :
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{
                                      border: "1px solid black",
                                    }}
                                    placeholder="Enter Institute Name"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        InstituteName: e.target.value,
                                      })
                                    }
                                    value={formData.InstituteName}
                                  />
                                </div>
                                <div className="col-12 col-md-6 m-2">
                                  <label className="headingAdd">
                                    Head Name :
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{
                                      border: "1px solid black",
                                    }}
                                    placeholder="Enter Head Name"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        HeadName: e.target.value,
                                      })
                                    }
                                    value={formData.HeadName}
                                  />
                                </div>
                                <div className="col-12 col-md-6 m-2">
                                  <label className="headingAdd">
                                    Institute Code:
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    className="etotal"
                                    style={{
                                      border: "1px solid black",
                                    }}
                                    placeholder="Enter Head Name"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        InstituteCode: e.target.value,
                                      })
                                    }
                                    value={formData.InstituteCode}
                                  />
                                </div>
                                {/* Add other form fields here */}
                                <div className="modal-footer mt-3">
                                  <button
                                    type="submit"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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

export default AdminDashboard;
