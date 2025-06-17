import React from 'react';

const Dashboard = () => {
  return (
    <div className="component-container fade-in">
      <h2 className="component-title">📊 Hotel Dashboard</h2>
      
      <div className="grid-4">
        <div className="stat-card">
          <div className="stat-number">15</div>
          <div className="stat-label">Total Rooms</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">9</div>
          <div className="stat-label">Available</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4</div>
          <div className="stat-label">Occupied</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">$4,580</div>
          <div className="stat-label">Today's Revenue</div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem', color: '#2c3e50' }}>🏨 Recent Activity</h3>
        <p>Welcome to Reside INN Management System!</p>
        <p>This dashboard provides an overview of your hotel operations.</p>
      </div>
    </div>
  );
};

export default Dashboard; 