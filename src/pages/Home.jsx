// src/pages/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = () => {
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
        <div className="container bg-body-tertiary rounded p-5 shadow-lg lh-base" data-aos="fade-up-right">
      <h1 className="fw-bolder text-center">
        Welcome to INNOMATICS <span style={{ color: 'red' }}>RESEARCH LABS</span>
      </h1>
      <hr className="divider mb-5" />
      <p className="fw-bold mb-2 test-start fs-3">
        We just don’t train, <br />
        We transform the careers.....
      </p>

      <p className="fs-5">
        <span className="fw-bold">Innomatics Research Labs</span> is a pioneer in <span className="fw-bold">“Transforming Careers and Lives”</span> of individuals in the Digital Space by catering advanced training on <span className="fw-bold">
          <span className="text-danger">NASSCOM Future skills prime Certified Data Science</span>, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI),
          <span className="text-danger">Full-stack web development</span>, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, <span className="text-danger">Digital Marketing</span>, and Career Launching program
        </span> for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.
      </p>
      <hr className="divider mb-3" />
      <br />
      <p className="fs-5 text-end">
        <span className="fw-bold mb-2" style={{ color: 'red' }}>NASSCOM Futureskills Prime Registered Business Partner</span><br />
        As an authorized “Training Partner with NASSCOM Futureskills Prime,” we strive to make individuals learn not just algorithms but also case studies and challenges derived from businesses. To improve the effectiveness and productivity of our trainees, <span className="fw-bold fst-italic">hackathons, workshops, and meetups</span> are conducted on a timely basis. Having a dedicated <span className="fw-bold">placement vertical</span>, which helps trainees conquer the business world, solves the complexities. Innomatics Research Labs are supporting <span className="fw-bold">over 100 companies</span> in finding the best candidates, which can upskill the business requirements and foster growth.
      </p>
      <hr className="divider mb-3" />
      <p className="fs-5">
        <span className="fw-bold mb-2" style={{ color: 'red' }}>Best Edtech company</span><br />
        Recognized and rewarded by <span className="fw-bold">Times Of India</span> as the <span className="fst-italic">Best Training Institute in Hyderabad for Data Science & Digital Marketing Training.</span> With relentless hard work, sophisticated equipment, advanced classrooms, cutting-edge training methodologies, practical training approach, and making individuals skillful. We have trained and placed <span className="fw-bold">10000</span> students with a track record of <span className="fw-bold">350+</span> batches, <span className="fw-bold">200+</span> Hackathons, <span className="fw-bold">150+</span> Industry Experts, <span className="fw-bold">500+</span> Webinars, and <span className="fw-bold">500+</span> Hiring Partners.
      </p>
    </div>
      </div>
      
      
    );
  };

export default Home;
