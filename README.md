# 🏨 Reside INN Management System

A comprehensive hotel management system built with React and SQLite for managing hotel operations including rooms, bookings, guests, and services.

## ✨ Features

### 📊 Dashboard
- Real-time hotel statistics
- Occupancy rates and revenue tracking
- Recent bookings overview
- Quick action buttons

### 🏠 Room Management
- Room status tracking (Available, Occupied, Maintenance)
- Room type management with pricing
- Floor-wise organization
- Amenities and pricing management

### 📅 Booking Management
- Complete reservation system
- Guest check-in/check-out
- Booking status tracking
- Payment management

### 👥 Guest Management
- Guest profile management
- Contact information and preferences
- Booking history and spending analytics
- VIP guest identification

### 🛎️ Services
- Hotel service catalog
- Service pricing and categories
- Service booking integration

## 🛠️ Technology Stack

- **Frontend**: React.js with modern CSS
- **Database**: SQLite with better-sqlite3
- **Styling**: Custom CSS with responsive design
- **Architecture**: Component-based with modern React patterns

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git (for cloning the repository)

### Installation & Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajayvreddy/Reside_INN.git
   cd Reside_INN
   ```

2. **Navigate to the React application directory:**
   ```bash
   cd reside-inn-management
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Access the application:**
   - **Local access**: Open your browser and navigate to `http://localhost:3000`
   - **Network access**: Use `http://[your-ip-address]:3000` to access from other devices on the same network
   - The application will automatically open in your default browser

### 🎯 What You'll See

Once the application starts, you'll have access to:

- **📊 Dashboard**: Overview of hotel statistics and quick actions
- **🏠 Rooms**: Manage room inventory, status, and pricing
- **📅 Bookings**: Handle reservations and guest management
- **👥 Guests**: Manage guest profiles and information
- **🛎️ Services**: Configure hotel services and pricing

### 🔄 Development Workflow

The application supports hot reloading, so any changes you make to the code will automatically refresh in the browser.

**To stop the development server:**
- Press `Ctrl + C` in the terminal where the server is running

## 💾 Database Setup

The application includes a SQLite database with the following features:

- **Room Types**: Standard Single, Double, Family Rooms, Deluxe Suites, Executive Suites
- **Sample Data**: Pre-populated with rooms, room types, services, and staff
- **Relationships**: Proper foreign key relationships between entities

### Testing the Database (Optional)

To test the SQLite database functionality:

```bash
# From the reside-inn-management directory
node src/database/test-db.js
```

This will create the database file and populate it with sample data.

### Database Schema
- `room_types` - Room categories and pricing
- `rooms` - Individual room inventory
- `guests` - Guest information and profiles
- `bookings` - Reservations and booking details
- `payments` - Payment tracking
- `services` - Hotel services catalog
- `staff` - Employee management

## 📱 User Interface

The application features a modern, responsive design with:
- **Glass-morphism effects** with backdrop blur
- **Gradient backgrounds** and smooth animations
- **Mobile-responsive** layouts
- **Intuitive navigation** with emoji icons
- **Professional color scheme** with proper contrast

## 🔧 Development

### Project Structure
```
Reside_INN/
├── README.md                    # Project documentation
├── reside-inn-management/       # React application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Dashboard.js
│   │   │   ├── RoomManagement.js
│   │   │   ├── BookingManagement.js
│   │   │   ├── GuestManagement.js
│   │   │   └── Services.js
│   │   ├── database/           # Database setup and utilities
│   │   │   ├── database.js
│   │   │   ├── schema.sql
│   │   │   └── test-db.js
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Global styles
│   │   └── index.js           # Application entry point
│   ├── public/                # Static files
│   ├── package.json           # Dependencies and scripts
│   └── package-lock.json      # Dependency lock file
└── src/                       # Additional source files
```

### Available Scripts

From the `reside-inn-management` directory:

- `npm start` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### 🛠️ Making Changes

1. **Adding new components**: Create new files in `src/components/`
2. **Modifying styles**: Update `src/App.css` for global styles
3. **Database changes**: Modify `src/database/schema.sql` and `src/database/database.js`
4. **Adding new pages**: Import and add to the navigation in `src/App.js`

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication and authorization
- [ ] Real-time notifications
- [ ] Reporting and analytics dashboard
- [ ] Email integration for bookings
- [ ] Payment gateway integration
- [ ] Mobile app development
- [ ] Advanced search and filtering
- [ ] Calendar integration
- [ ] Multi-language support

## 🚀 Production Deployment

To create a production build:

```bash
# From the reside-inn-management directory
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Ajay V Reddy**
- GitHub: [@ajayvreddy](https://github.com/ajayvreddy)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Create React App for the initial setup
- SQLite for the lightweight database solution
- All contributors and supporters of this project 