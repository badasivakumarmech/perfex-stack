import React, { useState } from "react";
import logo from "../src/All Images/Logo133.jpeg";
import "./App.css"; // You can create an App.css file for styling
import { FaBars } from "react-icons/fa";
function Admin() {
  const [navItemsVisible, setNavItemsVisible] = useState(false);

  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };
  function handleActionSelection(event) {
    const selectedAction = event.target.value;

    if (selectedAction === "edit") {
      // Handle edit action
      console.log("Edit action selected");
    } else if (selectedAction === "delete") {
      // Handle delete action
      console.log("Delete action selected");
    }
  }

  return (
    <div>
      <div className="container">
        <img src={logo} className="image1 w-25" />
        <div className={`nav-bar ${!navItemsVisible ? "hidden" : ""}`}>
          <div className="toggle-button" onClick={toggleNavItems}>
            <FaBars />
          </div>
          {navItemsVisible && (
            <ul className="nav-list">
              <li className="list">
                <a href="/">Dash Board</a>
              </li>
              <li className="list">
                <a href="/about">Home page</a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="admin">
        <div className="d-flex flex-row">
          <h3>Insitutions</h3>
          <button className="creat">Create +</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                S.NO
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Name
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Email
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Head
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Users Count
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Code
                <select>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </th>
              <th>
                Actions
                <select onChange={handleActionSelection}>
                  <option disabled>Select an action</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </th>
            </tr>
          </thead>

          <tbody>{/* Table rows go here */}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Admin;
