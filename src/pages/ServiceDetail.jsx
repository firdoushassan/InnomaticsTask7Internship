// src/pages/ServiceDetail.js
import React from 'react';

const ServiceDetail = ({ service }) => {
  return (
    <div>
      <div className="rounded-5 bg-body-tertiary shadow-lg d-flex row">
      <h1 className="col-12 text-center fw-bold text-danger mt-3 mb-3">{service} Services</h1>
      <h2 className="col-12 text-center fw-bold text-danger mt-3 mb-3">Details about our {service} service.</h2>
      <ul className="col-6 list-group text-center p-3">
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Flexible Online Live and Classroom Training
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          100% Internship Guarantee Program
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Dedicated Placement Vertical
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Mastery Level Certifications That Are Globally Accepted
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Backup Classes & Lifetime LMS Access
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Completely Practical Oriented Approach
        </li>
        <li className="list-group-item border border-0 bg-body-tertiary fw-bold">
          Hands-on Training on the Capstone Projects
        </li>
      </ul>
      <ul className="col-6 list-group text-center p-3">
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Bi-weekly connects from industry experts
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Domain Teach back and Reverse Presentations
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Free Technical Support & Individual Career Counselling
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Expert mentoring Weekly Tests & Assignments
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Mock-up Exams, and Interviews
        </li>
        <li className="list-group-item border border-0 border-bottom border border-danger bg-body-tertiary fw-bold">
          Meet-ups, Workshops, Hackathons & Conferences
        </li>
        <li className="list-group-item border border-0 bg-body-tertiary fw-bold">
          Exclusive programs for Non-IT professionals
        </li>
      </ul>
    </div>
      {/* Video Section */}
      <div className="col-12 text-center mb-5 pb-5">
        <h2 className="col-12 text-center fw-bold text-danger mt-3 mb-3">Let’s Watch a Video Bite from our Institute</h2>
        <iframe
          width="50%"
          height="90%"
          src="https://www.youtube.com/embed/OKUFrW40xyI?si=rc1Mo2h59hhImZsy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />
        <a className="btn btn-danger mb-5 p-2" href="https://www.youtube.com/@InnomaticsResearchLabs" role="button">
          Watch More
        </a>
      </div>
    </div>
  );
};

export default ServiceDetail;
