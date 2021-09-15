import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary" to="/home">
          <span className="me-1">
            <i className="fa fa-home"></i>
          </span>
          Home
        </Link>
        <UserInfo />
      </div>
    </nav>
  );
};

export default Navbar;
