import React from "react";
import { Link } from "react-router-dom";
import logo from './Image/logo.png'

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
      <img src={logo} alt="Logo" style={{ width: '100%', height: '50px' }} />
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span style={{cursor:'pointer'}}>Dashboard</span>
        </Link>
        <Link to="/Home" className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i> <span style={{cursor:'pointer'}}>Home</span>
        </Link>
        <Link to="/products" className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i> <span style={{cursor:'pointer'}}>Products</span>
        </Link>
        <Link to="/report" className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span style={{cursor:'pointer'}}>Report</span>
        </Link>
        <Link to="/customers" className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span style={{cursor:'pointer'}}>Customers</span>
        </Link>
        <Link to="/logout" className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span style={{cursor:'pointer'}}>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;


