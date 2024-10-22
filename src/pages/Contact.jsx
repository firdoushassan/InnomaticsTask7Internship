// src/pages/Contact.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', form);
    }
  };

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
<div class="container mt-5">
    <h2 class="text-center fw-bold text-danger mb-4">Contact Us</h2>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label fw-bold">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label fw-bold">Subject</label>
                    <input type="text" class="form-control" id="subject" placeholder="Subject" required />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label fw-bold">Message</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" class="btn btn-danger w-100">Send Message</button>
            </form>
        </div>
    </div>
</div>

    </div>
  );
};

export default Contact;
