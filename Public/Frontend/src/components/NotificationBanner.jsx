import React, { useState, useEffect } from 'react';
import './NotificationBanner.css';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show notification after a short delay for better UX
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Auto-remove after 5 seconds
    const autoRemoveTimer = setTimeout(() => {
      handleClose();
    }, 6000); // 1s delay + 5s display = 6s total

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoRemoveTimer);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`notification-banner ${isClosing ? 'closing' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <div className="notification-text">
          <span className="notification-title">🚀 Available for Opportunities</span>
          <span className="notification-subtitle">Open to new projects and collaborations</span>
        </div>
        <button className="notification-close" onClick={handleClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
