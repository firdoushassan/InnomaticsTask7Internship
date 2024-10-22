// src/pages/Services.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => {
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

        <div className="container-fluid bg-dark bg-gradient d-flex row p-2 justify-content-around shadow-lg">
        <h1 className="text-center fw-bold text-white mt-3">...Our Courses...</h1>
        
        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"
            className="object-fit-fill mt-3"
            alt="Data Science"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">NASSCOM Futureskills Prime Certified Data Science</h4>
            <p className="card-text">
              This is a great choice for tech geeks, students, working professionals and aspiring data scientists who want to upskill and build a better foundation is the stream of Data Science.
            </p>
            <NavLink to="development" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>

        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"
            className="object-fit-fill mt-3"
            alt="Full-Stack-Web-Development"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">Full Stack Development</h4>
            <p className="card-text">
              Learn the right skills to break into a development career & advance yourself as a full-stack Developer. It includes Frontend, Backend, databases, debugging & testing.
            </p>
            <NavLink to="development" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>

        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg"
            className="object-fit-fill mt-3"
            alt="Digital-marketing"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">Digital Marketing</h4>
            <p className="card-text">
              Digital Marketing Course at Innomatics is perfect for Entrepreneurs, Freelancers, Job seekers, Wanna be Entrepreneurs, working professionals who want to enhance their skill.
            </p>
            <NavLink to="design" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>

        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"
            className="object-fit-fill mt-3"
            alt="Analytics"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">NASSCOM Futureskills Prime Certified Predictive Analytics</h4>
            <p className="card-text">
              Predictive Analytics Modeler is to gain knowledge in analytics models to collect, data mining, data collection, data visualization, and integration, nodes, and statistical analysis.
            </p>
            <NavLink to="development" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>

        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg"
            className="object-fit-fill mt-3"
            alt="AWS"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">Amazon Web Services</h4>
            <p className="card-text">
              Right from the jobseeker or existing professional who wants to accelerate their career with advanced concepts of cloud computing, AWS and core services.
            </p>
            <NavLink to="development" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>

        <div className="card col-4 m-4 text-center bg-black border border-3 rounded-0 card-course" style={{ width: '22rem' }}>
          <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg"
            className="object-fit-fill mt-3"
            alt="DevOps"
          />
          <div className="card-body text-white">
            <h4 className="card-title fw-bold">Devops</h4>
            <p className="card-text">
              This is a must-learn course for the individuals who started her journey in the DevOps and cloud world and is ideally suited to developers, Cloud Admin, Solutions Architects and managers.
            </p>
            <NavLink to="development" className="btn btn-outline-danger border border-danger border-3 rounded-0">Explore </NavLink>
          </div>
        </div>
      </div>

      {/* This Outlet will render the child routes */}
      <Outlet />
    </div>
  );
};

export default Services;

