import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Products from "./Products";
import Report from "./Report";
import Customers from "./Customers";
import Logout from "./Logout";
import Nav from "./Nav";
import { useState } from "react";

function DApp() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
          <Nav Toggle={Toggle} />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/report" element={<Report/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/logout" element={<Logout/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default DApp;
