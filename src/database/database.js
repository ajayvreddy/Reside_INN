const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

class HotelDatabase {
  constructor() {
    this.db = null;
    this.init();
  }

  init() {
    try {
      // Create database file in the database directory
      const dbPath = path.join(__dirname, 'hotel_management.db');
      this.db = new Database(dbPath);
      
      // Enable foreign keys
      this.db.pragma('foreign_keys = ON');
      
      console.log('Connected to SQLite database successfully');
      this.createTables();
      this.insertSampleData();
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  createTables() {
    try {
      const schemaPath = path.join(__dirname, 'schema.sql');
      const schema = fs.readFileSync(schemaPath, 'utf8');
      
      // Split schema by semicolons and execute each statement
      const statements = schema.split(';').filter(stmt => stmt.trim());
      
      statements.forEach(statement => {
        if (statement.trim()) {
          this.db.exec(statement + ';');
        }
      });
      
      console.log('Database tables created successfully');
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  insertSampleData() {
    try {
      // Insert room types
      const insertRoomType = this.db.prepare(`
        INSERT OR IGNORE INTO room_types (type_name, base_price, max_occupancy, amenities, description)
        VALUES (?, ?, ?, ?, ?)
      `);

      const roomTypes = [
        ['Standard Single', 99.99, 1, 'WiFi, TV, AC', 'Comfortable single room with essential amenities'],
        ['Standard Double', 149.99, 2, 'WiFi, TV, AC, Mini Fridge', 'Spacious double room perfect for couples'],
        ['Deluxe Suite', 299.99, 4, 'WiFi, TV, AC, Mini Fridge, Balcony, Jacuzzi', 'Luxury suite with premium amenities'],
        ['Family Room', 199.99, 6, 'WiFi, TV, AC, Mini Fridge, Sofa Bed', 'Large room perfect for families'],
        ['Executive Suite', 499.99, 2, 'WiFi, TV, AC, Mini Fridge, Balcony, Jacuzzi, Work Desk', 'Premium suite for business travelers']
      ];

      roomTypes.forEach(roomType => {
        insertRoomType.run(...roomType);
      });

      // Insert rooms
      const insertRoom = this.db.prepare(`
        INSERT OR IGNORE INTO rooms (room_number, room_type_id, floor, status)
        VALUES (?, ?, ?, ?)
      `);

      // Generate rooms for each type
      const rooms = [
        // Standard Single rooms (Floor 1)
        ['101', 1, 1, 'available'], ['102', 1, 1, 'available'], ['103', 1, 1, 'occupied'],
        // Standard Double rooms (Floor 1-2)
        ['104', 2, 1, 'available'], ['105', 2, 1, 'available'], ['201', 2, 2, 'available'],
        ['202', 2, 2, 'maintenance'], ['203', 2, 2, 'available'],
        // Deluxe Suites (Floor 3)
        ['301', 3, 3, 'available'], ['302', 3, 3, 'occupied'], ['303', 3, 3, 'available'],
        // Family Rooms (Floor 2)
        ['204', 4, 2, 'available'], ['205', 4, 2, 'available'],
        // Executive Suites (Floor 4)
        ['401', 5, 4, 'available'], ['402', 5, 4, 'available']
      ];

      rooms.forEach(room => {
        insertRoom.run(...room);
      });

      // Insert services
      const insertService = this.db.prepare(`
        INSERT OR IGNORE INTO services (service_name, description, price, service_type)
        VALUES (?, ?, ?, ?)
      `);

      const services = [
        ['Room Service', '24/7 room service for meals and refreshments', 15.00, 'Food & Beverage'],
        ['Laundry Service', 'Same-day laundry and dry cleaning', 25.00, 'Housekeeping'],
        ['Spa Treatment', 'Relaxing spa treatments and massages', 80.00, 'Wellness'],
        ['Airport Transfer', 'Private transfer to/from airport', 45.00, 'Transportation'],
        ['Late Checkout', 'Extend checkout time until 6 PM', 30.00, 'Room'],
        ['Extra Bed', 'Additional bed in room', 20.00, 'Room'],
        ['Breakfast', 'Continental breakfast buffet', 18.00, 'Food & Beverage'],
        ['Parking', 'Secure parking space', 12.00, 'Transportation']
      ];

      services.forEach(service => {
        insertService.run(...service);
      });

      // Insert sample staff
      const insertStaff = this.db.prepare(`
        INSERT OR IGNORE INTO staff (employee_id, first_name, last_name, email, phone, position, department, hire_date, salary)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      const staff = [
        ['EMP001', 'John', 'Smith', 'john.smith@residinn.com', '+1-555-0101', 'Manager', 'Management', '2023-01-15', 60000.00],
        ['EMP002', 'Sarah', 'Johnson', 'sarah.johnson@residinn.com', '+1-555-0102', 'Receptionist', 'Front Desk', '2023-03-10', 35000.00],
        ['EMP003', 'Mike', 'Davis', 'mike.davis@residinn.com', '+1-555-0103', 'Housekeeping Supervisor', 'Housekeeping', '2023-02-20', 40000.00],
        ['EMP004', 'Lisa', 'Wilson', 'lisa.wilson@residinn.com', '+1-555-0104', 'Concierge', 'Guest Services', '2023-04-05', 38000.00],
        ['EMP005', 'Tom', 'Brown', 'tom.brown@residinn.com', '+1-555-0105', 'Maintenance', 'Engineering', '2023-01-30', 42000.00]
      ];

      staff.forEach(member => {
        insertStaff.run(...member);
      });

      console.log('Sample data inserted successfully');
    } catch (error) {
      console.error('Error inserting sample data:', error);
    }
  }

  // Room Management Methods
  getAllRooms() {
    const query = `
      SELECT r.*, rt.type_name, rt.base_price, rt.max_occupancy, rt.amenities
      FROM rooms r
      JOIN room_types rt ON r.room_type_id = rt.id
      ORDER BY r.room_number
    `;
    return this.db.prepare(query).all();
  }

  getAvailableRooms(checkIn, checkOut) {
    const query = `
      SELECT r.*, rt.type_name, rt.base_price, rt.max_occupancy, rt.amenities
      FROM rooms r
      JOIN room_types rt ON r.room_type_id = rt.id
      WHERE r.status = 'available' 
      AND r.id NOT IN (
        SELECT room_id FROM bookings 
        WHERE (check_in_date <= ? AND check_out_date > ?)
        OR (check_in_date < ? AND check_out_date >= ?)
        AND booking_status != 'cancelled'
      )
      ORDER BY rt.base_price, r.room_number
    `;
    return this.db.prepare(query).all(checkIn, checkIn, checkOut, checkOut);
  }

  // Guest Management Methods
  createGuest(guestData) {
    const query = `
      INSERT INTO guests (first_name, last_name, email, phone, address, id_type, id_number, date_of_birth, nationality)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const result = this.db.prepare(query).run(
      guestData.first_name,
      guestData.last_name,
      guestData.email,
      guestData.phone,
      guestData.address,
      guestData.id_type,
      guestData.id_number,
      guestData.date_of_birth,
      guestData.nationality
    );
    return result.lastInsertRowid;
  }

  findGuestByEmail(email) {
    return this.db.prepare('SELECT * FROM guests WHERE email = ?').get(email);
  }

  // Booking Management Methods
  createBooking(bookingData) {
    const query = `
      INSERT INTO bookings (booking_reference, guest_id, room_id, check_in_date, check_out_date, 
                           adults, children, total_amount, special_requests, booking_source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const result = this.db.prepare(query).run(
      bookingData.booking_reference,
      bookingData.guest_id,
      bookingData.room_id,
      bookingData.check_in_date,
      bookingData.check_out_date,
      bookingData.adults,
      bookingData.children,
      bookingData.total_amount,
      bookingData.special_requests,
      bookingData.booking_source
    );
    return result.lastInsertRowid;
  }

  getAllBookings() {
    const query = `
      SELECT b.*, g.first_name, g.last_name, g.email, r.room_number, rt.type_name
      FROM bookings b
      JOIN guests g ON b.guest_id = g.id
      JOIN rooms r ON b.room_id = r.id
      JOIN room_types rt ON r.room_type_id = rt.id
      ORDER BY b.check_in_date DESC
    `;
    return this.db.prepare(query).all();
  }

  getBookingByReference(reference) {
    const query = `
      SELECT b.*, g.first_name, g.last_name, g.email, g.phone, r.room_number, rt.type_name
      FROM bookings b
      JOIN guests g ON b.guest_id = g.id
      JOIN rooms r ON b.room_id = r.id
      JOIN room_types rt ON r.room_type_id = rt.id
      WHERE b.booking_reference = ?
    `;
    return this.db.prepare(query).get(reference);
  }

  // Service Management Methods
  getAllServices() {
    return this.db.prepare('SELECT * FROM services WHERE is_active = 1 ORDER BY service_type, service_name').all();
  }

  // Staff Management Methods
  getAllStaff() {
    return this.db.prepare('SELECT * FROM staff WHERE is_active = 1 ORDER BY department, position').all();
  }

  // Utility method to generate booking reference
  generateBookingReference() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'BK';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  close() {
    if (this.db) {
      this.db.close();
      console.log('Database connection closed');
    }
  }
}

module.exports = HotelDatabase; 