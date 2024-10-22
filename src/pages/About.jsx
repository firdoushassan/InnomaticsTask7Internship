// src/pages/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
      <div>
        <header>
          <header className="text-white py-2 bignavbar py-5 fw-bolder row">
            <div className="container d-flex justify-content-between">
              <div className="align-items-top col-6">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png"
                  alt="Innomatics"
                  className="img-fluid"
                />
              </div>
              <div className="col-2"></div>
              <div className="col-4 d-none d-sm-block">
                <p className="fs-5 mb-1">Enquire Now</p>
                <div className="d-flex flex-wrap">
                  <a href="tel:9951666670" className="badge text-wrap text-decoration-none bg-black p-2 text-white me-4 fs-6 mb-1">
                    Hyd:📞9951666670
                  </a>
                  <a href="tel:9951666671" className="badge text-wrap text-decoration-none bg-black p-2 text-white me-4 fs-6 mb-1">
                    Pune:📞9951666671
                  </a>
                </div>
              </div>
            </div>
            <div className="container d-block d-sm-none">
              <p className="bg-black text-white ps-4">Enquire Now:
                <a href="tel:9951666670" className="text-decoration-none text-white ms-4 me-4">Hyd:📞9951666670</a>
                <a href="tel:9951666671" className="text-decoration-none text-white">Pune:📞9951666671</a>
              </p>
            </div>
          </header>
        </header>
        <div className="container sticky-top navcontainer">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-body-tertiary rounded py-4 mainnav">
            <div className="container text-uppercase fw-bolder mx-2 px-2">
              <div className=" navbar" id="navbarNav">
                <ul className="navbar-nav ms-5">
                  <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                  </li>
                  <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/about" exact activeClassName="active">About us</NavLink>
                  </li>
                  <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/services" exact activeClassName="active">Services</NavLink>
                  </li>
                  <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/contact" exact activeClassName="active">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
          </div>
        </div>
      <div className="container-fluid text-center py-5 pb-4 px-4">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <h1 className="fw-bolder what">What we are?</h1>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card mb-3 card-what">
                  <div className="card-body">
                    <h1 className="card-title card-logo"><i className="bi bi-people-fill"></i></h1>
                    <p className="card-text fw-bold text-danger fs-5">Global Leaders in training</p>
                    <p className="card-text">We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card mb-3 card-what">
                  <div className="card-body">
                    <h1 className="card-title card-logo"><i className="bi bi-laptop"></i></h1>
                    <p className="card-text fw-bold text-danger fs-5">Practical oriented approach</p>
                    <p className="card-text">Our training methodology isn’t confined to theoretical one; We have an exposure towards the real-time industry training by industry experts professionals.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card mb-3 card-what">
                  <div className="card-body">
                    <h1 className="card-title card-logo"><i className="bi bi-briefcase-fill"></i></h1>
                    <p className="card-text fw-bold text-danger fs-5">Hands-on projects & Internship</p>
                    <p className="card-text">We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card mb-3 card-what">
                  <div className="card-body">
                    <h1 className="card-title card-logo"><i className="bi bi-trophy-fill"></i></h1>
                    <p className="card-text fw-bold text-danger fs-5">100% Placement Assistance</p>
                    <p className="card-text">We promise Career Transformation; Having collaborations with top-notch companies and a dedicated placement vertical to help trainees aspire to aspirations.</p>
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

export default About;
