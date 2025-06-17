import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Room Service', price: 15.00, type: 'Food & Beverage', description: '24/7 room service' },
    { id: 2, name: 'Laundry Service', price: 25.00, type: 'Housekeeping', description: 'Same-day service' },
    { id: 3, name: 'Spa Treatment', price: 80.00, type: 'Wellness', description: 'Relaxing treatments' },
    { id: 4, name: 'Airport Transfer', price: 45.00, type: 'Transportation', description: 'Private transfer' },
    { id: 5, name: 'Breakfast', price: 18.00, type: 'Food & Beverage', description: 'Continental buffet' },
    { id: 6, name: 'Parking', price: 12.00, type: 'Transportation', description: 'Secure parking' },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Food & Beverage': return '#28a745';
      case 'Housekeeping': return '#17a2b8';
      case 'Wellness': return '#667eea';
      case 'Transportation': return '#ffc107';
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
        🛎️ Hotel Services
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {services.map(service => (
          <div key={service.id} style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            borderTop: `4px solid ${getTypeColor(service.type)}`
          }}>
            <div style={{
              background: getTypeColor(service.type),
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              {service.type}
            </div>
            
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
              {service.name}
            </h3>
            <p style={{ color: '#6c757d', marginBottom: '1rem', fontSize: '0.9rem' }}>
              {service.description}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#667eea' 
              }}>
                ${service.price}
              </div>
              <button style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
