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

  const handleQuickAction = (action) => {
    alert(`${action} functionality will be implemented!`);
  };

  return (
    <div className="App">
      <header style={{
        background: 'white',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '3rem' }}>🏨</span>
          <div>
            <h1 style={{
              fontSize: '3rem',
              color: '#2c3e50',
              margin: '0',
              fontFamily: 'Georgia, serif'
            }}>
              RESIDE INN
            </h1>
            <p style={{
              fontSize: '1rem',
              color: '#667eea',
              margin: '0.5rem 0 0 0',
              letterSpacing: '0.2em'
            }}>
              LUXURY HOTEL MANAGEMENT
            </p>
          </div>
        </div>
        <p style={{
          fontSize: '1.2rem',
          color: '#7f8c8d',
          fontStyle: 'italic',
          margin: '0'
        }}>
          Experience Excellence in Hospitality
        </p>
      </header>

      {/* Quick Action Buttons */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem 2rem',
        borderBottom: '2px solid #e9ecef'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button 
            onClick={() => handleQuickAction('New Booking')}
            style={{
              background: 'linear-gradient(135deg, #28a745, #20c997)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            📋 New Booking
          </button>
          
          <button 
            onClick={() => handleQuickAction('Check-In Guest')}
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            ✅ Check-In
          </button>
          
          <button 
            onClick={() => handleQuickAction('Check-Out Guest')}
            style={{
              background: 'linear-gradient(135deg, #ffc107, #fd7e14)',
              color: '#212529',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            🚪 Check-Out
          </button>
          
          <button 
            onClick={() => handleQuickAction('Room Service')}
            style={{
              background: 'linear-gradient(135deg, #17a2b8, #138496)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            🛎️ Room Service
          </button>
          
          <button 
            onClick={() => handleQuickAction('Maintenance')}
            style={{
              background: 'linear-gradient(135deg, #dc3545, #c82333)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            🔧 Maintenance
          </button>
          
          <button 
            onClick={() => handleQuickAction('View Reports')}
            style={{
              background: 'linear-gradient(135deg, #6f42c1, #5a32a3)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
          >
            📊 Reports
          </button>
        </div>
      </div>

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
