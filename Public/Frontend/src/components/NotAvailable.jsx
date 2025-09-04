import React from 'react';
import { Link } from 'react-router-dom';
import './NotAvailable.css';

const NotAvailable = () => {
  return (
    <div className="not-available">
      <div className="not-available-container">
        <div className="not-available-content">
          <div className="not-available-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          
          <h1 className="not-available-title">Project Not Available</h1>
          
          <p className="not-available-description">
            This project is currently not available for live demo. 
            You can still view the source code on GitHub.
          </p>
          
          <div className="not-available-actions">
            <Link to="/" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Back to Home
            </Link>
            
            <Link to="/#projects" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
              View All Projects
            </Link>
          </div>
          
          <div className="not-available-info">
            <p className="info-text">
              <strong>Note:</strong> This project may be under development, 
              private, or the live demo is temporarily unavailable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAvailable;
