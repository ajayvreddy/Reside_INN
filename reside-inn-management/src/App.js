import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import RoomManagement from './components/RoomManagement';
import BookingManagement from './components/BookingManagement';
import GuestManagement from './components/GuestManagement';
import Services from './components/Services';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'rooms':
        return <RoomManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'guests':
        return <GuestManagement />;
      case 'services':
        return <Services />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="hotel-logo">
            <span className="hotel-icon">🏨</span>
            <div className="hotel-text">
              <h1 className="hotel-name">RESIDE INN</h1>
              <div className="hotel-subtitle">LUXURY HOTEL MANAGEMENT</div>
            </div>
          </div>
          <div className="hotel-tagline">
            <span className="tagline-text">Experience Excellence in Hospitality</span>
            <div className="tagline-subtitle">Professional Management System</div>
          </div>
        </div>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <span className="decoration-diamond">◆</span>
          <div className="decoration-line"></div>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-container">
          <button 
            className={activeTab === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={activeTab === 'rooms' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('rooms')}
          >
            🏠 Rooms
          </button>
          <button 
            className={activeTab === 'bookings' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('bookings')}
          >
            📅 Bookings
          </button>
          <button 
            className={activeTab === 'guests' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('guests')}
          >
            👥 Guests
          </button>
          <button 
            className={activeTab === 'services' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('services')}
          >
            🛎️ Services
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Reside INN Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
