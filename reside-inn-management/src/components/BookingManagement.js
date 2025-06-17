import React from 'react';

const BookingManagement = () => {
  const bookings = [
    { id: 1, guest: 'John Smith', room: '101', checkIn: '2024-01-15', status: 'confirmed' },
    { id: 2, guest: 'Sarah Johnson', room: '102', checkIn: '2024-01-16', status: 'checked-in' },
    { id: 3, guest: 'Mike Davis', room: '201', checkIn: '2024-01-17', status: 'pending' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#17a2b8';
      case 'checked-in': return '#28a745';
      case 'pending': return '#ffc107';
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
        📅 Booking Management
      </h2>
      
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ 
                padding: '1rem', 
                background: '#667eea', 
                color: 'white', 
                textAlign: 'left' 
              }}>Guest</th>
              <th style={{ 
                padding: '1rem', 
                background: '#667eea', 
                color: 'white', 
                textAlign: 'left' 
              }}>Room</th>
              <th style={{ 
                padding: '1rem', 
                background: '#667eea', 
                color: 'white', 
                textAlign: 'left' 
              }}>Check-in</th>
              <th style={{ 
                padding: '1rem', 
                background: '#667eea', 
                color: 'white', 
                textAlign: 'left' 
              }}>Status</th>
              <th style={{ 
                padding: '1rem', 
                background: '#667eea', 
                color: 'white', 
                textAlign: 'left' 
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}>{booking.guest}</td>
                <td style={{ padding: '1rem' }}>Room {booking.room}</td>
                <td style={{ padding: '1rem' }}>{booking.checkIn}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{
                    background: getStatusColor(booking.status),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase'
                  }}>
                    {booking.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
