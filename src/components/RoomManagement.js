import React from 'react';

const RoomManagement = () => {
  const rooms = [
    { id: 1, number: '101', type: 'Standard Single', status: 'available', price: 99.99 },
    { id: 2, number: '102', type: 'Standard Double', status: 'occupied', price: 149.99 },
    { id: 3, number: '201', type: 'Deluxe Suite', status: 'maintenance', price: 299.99 },
  ];

  return (
    <div className="component-container fade-in">
      <h2 className="component-title">🏠 Room Management</h2>
      
      <div className="grid-3">
        {rooms.map(room => (
          <div key={room.id} className="card">
            <h3>Room {room.number}</h3>
            <p>{room.type}</p>
            <p className={`status-badge status-${room.status}`}>{room.status}</p>
            <p><strong>${room.price}/night</strong></p>
            <button className="btn btn-primary">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomManagement; 