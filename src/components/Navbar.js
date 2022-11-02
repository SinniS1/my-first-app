import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let text = " ";
  if (props.Mode === "light") {
    text = "dark";
  } else {
    text = "light";
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch mx-4 text-${text}`}>
            <button type="button" className={`btn btn-${text} btn-sm`} onClick={props.toggleMode}>
              {text} mode
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// if we need to define the props data types then we can do that like this
Navbar.propTypes = {
  // title is a prop which will passed from app.js
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  // Mode: PropTypes.string.isRequired,
};

// we can also specify defalt values to the props
Navbar.defaultProps = {
  title: "name dall de bhai",
  aboutText: "about kya tera baap likhe ga",
  // Mode: "light",
};
