const HotelDatabase = require('./database.js');

// Test the database setup
function testDatabase() {
  console.log('🏨 Testing Hotel Management Database...\n');
  
  const db = new HotelDatabase();
  
  try {
    // Test 1: Get all rooms
    console.log('📋 Test 1: Getting all rooms...');
    const rooms = db.getAllRooms();
    console.log(`✅ Found ${rooms.length} rooms`);
    console.log('Sample room:', rooms[0]);
    console.log('');
    
    // Test 2: Get available rooms for a date range
    console.log('📋 Test 2: Getting available rooms for 2024-02-01 to 2024-02-05...');
    const availableRooms = db.getAvailableRooms('2024-02-01', '2024-02-05');
    console.log(`✅ Found ${availableRooms.length} available rooms`);
    console.log('');
    
    // Test 3: Get all services
    console.log('📋 Test 3: Getting all services...');
    const services = db.getAllServices();
    console.log(`✅ Found ${services.length} services`);
    services.forEach(service => {
      console.log(`- ${service.service_name}: $${service.price} (${service.service_type})`);
    });
    console.log('');
    
    // Test 4: Get all staff
    console.log('📋 Test 4: Getting all staff...');
    const staff = db.getAllStaff();
    console.log(`✅ Found ${staff.length} staff members`);
    staff.forEach(member => {
      console.log(`- ${member.first_name} ${member.last_name}: ${member.position} (${member.department})`);
    });
    console.log('');
    
    // Test 5: Create a sample guest and booking
    console.log('📋 Test 5: Creating sample guest and booking...');
    
    const sampleGuest = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1-555-1234',
      address: '123 Main St, Anytown, USA',
      id_type: 'Passport',
      id_number: 'P123456789',
      date_of_birth: '1985-06-15',
      nationality: 'USA'
    };
    
    const guestId = db.createGuest(sampleGuest);
    console.log(`✅ Created guest with ID: ${guestId}`);
    
    const bookingReference = db.generateBookingReference();
    const sampleBooking = {
      booking_reference: bookingReference,
      guest_id: guestId,
      room_id: 1, // Standard Single room 101
      check_in_date: '2024-02-15',
      check_out_date: '2024-02-18',
      adults: 1,
      children: 0,
      total_amount: 299.97, // 3 nights * $99.99
      special_requests: 'Late check-in after 9 PM',
      booking_source: 'Direct Website'
    };
    
    const bookingId = db.createBooking(sampleBooking);
    console.log(`✅ Created booking with ID: ${bookingId}, Reference: ${bookingReference}`);
    
    // Verify the booking
    const createdBooking = db.getBookingByReference(bookingReference);
    console.log('📄 Booking Details:');
    console.log(`   Guest: ${createdBooking.first_name} ${createdBooking.last_name}`);
    console.log(`   Room: ${createdBooking.room_number} (${createdBooking.type_name})`);
    console.log(`   Dates: ${createdBooking.check_in_date} to ${createdBooking.check_out_date}`);
    console.log(`   Total: $${createdBooking.total_amount}`);
    console.log('');
    
    // Test 6: Get all bookings
    console.log('📋 Test 6: Getting all bookings...');
    const allBookings = db.getAllBookings();
    console.log(`✅ Found ${allBookings.length} total bookings`);
    console.log('');
    
    console.log('🎉 All database tests passed successfully!');
    console.log('💾 Database file created at: src/database/hotel_management.db');
    console.log('🚀 Ready to integrate with React frontend!');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    db.close();
  }
}

// Run the test
testDatabase(); 