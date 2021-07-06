import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4">
      <div className="container-fluid">
        <a className="logo" href="">
          <h1 className="text-logo">
            We<span className="clr-blue">Work</span>
          </h1>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Workspaces
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn" aria-current="page" href="#">
                <span className="nav-act">Book</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
