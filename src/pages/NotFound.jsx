// src/pages/NotFound.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
<div class="container mt-5 text-center">
    <h1 class="display-1 fw-bold text-danger">404</h1>
    <h2 class="fw-bold">Oops! Page Not Found</h2>
    <p class="lead">The page you are looking for does not exist.</p>
    <p>It might have been removed, had its name changed, or is temporarily unavailable.</p>
    <NavLink className="btn btn-danger btn-lg mt-4" to="/" exact activeClassName="active">Go to Homepage</NavLink>
</div>
    </div>
  );
};

export default NotFound;