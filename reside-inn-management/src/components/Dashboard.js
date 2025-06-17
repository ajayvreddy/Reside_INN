import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.95)', 
      borderRadius: '16px', 
      padding: '2rem', 
      margin: '1rem 0' 
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '1.5rem', 
        color: '#2c3e50', 
        textAlign: 'center' 
      }}>
        📊 Hotel Dashboard
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea' }}>15</div>
          <div style={{ color: '#6c757d' }}>Total Rooms</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>9</div>
          <div style={{ color: '#6c757d' }}>Available</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#dc3545' }}>4</div>
          <div style={{ color: '#6c757d' }}>Occupied</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffc107' }}>$4,580</div>
          <div style={{ color: '#6c757d' }}>Today's Revenue</div>
        </div>
      </div>

      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '1.5rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2c3e50' }}>🏨 Welcome to Reside INN Management</h3>
        <p style={{ marginBottom: '1rem' }}>
          This is your hotel management dashboard where you can monitor all hotel operations.
        </p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Today's Activities:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
              ✅ 3 Check-ins scheduled for today
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
              🚪 2 Check-outs completed
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
              🛎️ 5 Room service requests pending
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              🔧 1 Maintenance task in progress
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
