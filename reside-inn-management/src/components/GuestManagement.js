import React from 'react';

const GuestManagement = () => {
  const guests = [
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '+1-555-0101', status: 'VIP' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1-555-0102', status: 'Regular' },
    { id: 3, name: 'Mike Davis', email: 'mike@email.com', phone: '+1-555-0103', status: 'Regular' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'VIP': return '#667eea';
      case 'Regular': return '#28a745';
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
        👥 Guest Management
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {guests.map(guest => (
          <div key={guest.id} style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            borderLeft: `6px solid ${getStatusColor(guest.status)}`,
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: getStatusColor(guest.status),
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {guest.status}
            </div>
            
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem', paddingRight: '4rem' }}>
              {guest.name}
            </h3>
            <p style={{ color: '#6c757d', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              📧 {guest.email}
            </p>
            <p style={{ color: '#6c757d', marginBottom: '1rem', fontSize: '0.9rem' }}>
              📞 {guest.phone}
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}>
                👁️ View Details
              </button>
              <button style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}>
                📋 New Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestManagement;
