import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Navbar({title = "Set title here",aboutText = "About Text Here"}) {

  // const {write,setWrite} = useState('Sample')

  return (
    <>
      <nav className="navbar navbar-dark col-12 navbar-expand-lg bg-dark px-2">
        <a className="navbar-brand" href="/">
          {title}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = {
//     title: "Set title here",
//     aboutText: "About text here"
// }