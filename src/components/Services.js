import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Room Service', price: 15.00, type: 'Food & Beverage' },
    { id: 2, name: 'Laundry Service', price: 25.00, type: 'Housekeeping' },
    { id: 3, name: 'Spa Treatment', price: 80.00, type: 'Wellness' },
    { id: 4, name: 'Airport Transfer', price: 45.00, type: 'Transportation' },
  ];

  return (
    <div className="component-container fade-in">
      <h2 className="component-title">🛎️ Hotel Services</h2>
      
      <div className="grid-2">
        {services.map(service => (
          <div key={service.id} className="card">
            <h3>{service.name}</h3>
            <p>Type: {service.type}</p>
            <p><strong>${service.price}</strong></p>
            <button className="btn btn-primary">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 