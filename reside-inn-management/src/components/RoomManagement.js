import React from 'react';

const RoomManagement = () => {
  const rooms = [
    { id: 1, number: '101', type: 'Standard Single', status: 'available', price: 99.99 },
    { id: 2, number: '102', type: 'Standard Double', status: 'occupied', price: 149.99 },
    { id: 3, number: '201', type: 'Deluxe Suite', status: 'maintenance', price: 299.99 },
    { id: 4, number: '202', type: 'Family Room', status: 'available', price: 199.99 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return '#28a745';
      case 'occupied': return '#dc3545';
      case 'maintenance': return '#ffc107';
      default: return '#6c757d';
    }
  };

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
        🏠 Room Management
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {rooms.map(room => (
          <div key={room.id} style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            borderLeft: `6px solid ${getStatusColor(room.status)}`
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
              Room {room.number}
            </h3>
            <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
              {room.type}
            </p>
            <p style={{ 
              color: getStatusColor(room.status), 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              {room.status}
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
              ${room.price}/night
            </p>
            <button style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              cursor: 'pointer'
            }}>
              Manage Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomManagement;
