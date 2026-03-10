import {latitudeKeys} from 'geolib';
import Images from '../assests/Appimages';
import navigationServices from '../navigator/navigationServices';

export const social_logins = [
  {
    id: 1,
    name: 'google',
    image: Images.google_icon,
  },
  {
    id: 2,
    name: 'facebook',
    image: Images.facebook_icon,
  },
  {
    id: 3,
    name: 'apple',
    image: Images.apple_icon,
  },
];

export const dummyUsers = [
  {id: 1, name: 'John Doe', email: 'john@example.com'},
  {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
];

export const rideHistory = [
  {
    id: 1,
    from: 'Grand Canyon',
    to: 'Yellowstone National Park',
    date: '2025-02-24',
    fare: 250,
  },
  {
    id: 2,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
  },
  {
    id: 3,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
  },
];

export const history = [
  {
    id: 1,
    from: 'Grand Canyon',
    to: 'Yellowstone National Park',
    date: '2025-02-24',
    fare: 250,
    status: 'Cancel',
    image: Images.car_image,
  },
  {
    id: 2,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
    status: 'complete',
    image: Images.car_image,
  },
  {
    id: 3,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
    status: 'complete',
    image: Images.cargo_card,
  },
  {
    id: 3,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
    status: 'Cancel by Rider',
    image: Images.pet_card,
  },
  {
    id: 1,
    from: 'Grand Canyon',
    to: 'Yellowstone National Park',
    date: '2025-02-24',
    fare: 250,
    status: 'Cancel',
    image: Images.car_image,
  },
  {
    id: 2,
    from: 'Mesa Verde National Park',
    to: 'Yellowstone National Park',
    date: '2025-02-23',
    fare: 180,
    status: 'complete',
    image: Images.car_image,
  },
];

export const carsList = [
  {id: 1, model: 'Toyota Corolla', plate: 'ABC-123', type: 'Sedan'},
  {id: 2, model: 'Honda Civic', plate: 'XYZ-789', type: 'Sedan'},
];

export const vehicle_list = [
  {
    id: 1,
    image: Images.cab_card,
    title: 'Cab \nBooking',
  },
  {
    id: 2,
    image: Images.cargo_card,
    title: 'Parcel \nDelivery',
  },
  {
    id: 3,
    image: Images.pet_card,
    title: 'Pet \nDelivery',
  },
];

export const wallet_list = [
  {id: 1, from: 'Today Earnings', fare: 250},
  {id: 1, from: 'Deposit', fare: 250},
];

export const drawer_items = [
  {
    id: 1,
    name: 'Home',
    onPress: () => {
      navigationServices.navigate('HomeScreen');
    },
  },
  {
    id: 3,
    name: 'History',
    onPress: () => {
      navigationServices.navigate('HistoryScreen');
    },
  },
  {
    id: 8,
    name: 'Edit Profile',
    onPress: () => {
      navigationServices.navigate('UserEditProfile');
    },
  },
  {
    id: 3,
    name: 'Saved Locations',
    onPress: () => {
      navigationServices.navigate('SaveAddress');
    },
  },
  {
    id: 5,
    name: 'Change Password',
    onPress: () => {
      navigationServices.navigate('ChangeScreen');
    },
  },
  {
    id: 5,
    name: 'Notifications',
    onPress: () => {
      navigationServices.navigate('NotificationScreen');
    },
  },
  {
    id: 5,
    name: 'Safety',
    // onPress: () => {
    //   navigationServices.navigate('ChangeScreen');
    // },
  },
  {
    id: 5,
    name: 'Settings',
    onPress: () => {
      navigationServices.navigate('Setting');
    },
  },
  {
    id: 5,
    name: 'Support',
    // onPress: () => {
    //   navigationServices.navigate('Setting');
    // },
  },
  {
    id: 5,
    name: 'HElp',
    // onPress: () => {
    //   navigationServices.navigate('Setting');
    // },
  },
  {
    id: 6,
    name: 'Privacy Policy',
    // onPress: () => {
    //   navigationServices.navigate('PrivacyPolicy');
    // },
  },
  {
    id: 7,
    name: 'Terms & Conditions',
    // onPress: () => {
    //   navigationServices.navigate('TermsAndConditions');
    // },
  },
];

export const rider_drawer_item = [
  {
    id: 1,
    name: 'DashBoard',
    onPress: () => {
      navigationServices.navigate('DashBoardScreen');
    },
  },
  {
    id: 2,
    name: 'Profile',
    onPress: () => {
      navigationServices.navigate('RiderEditProfile');
    },
  },
  {
    id: 2,
    name: 'Choose Your vehicle',
    onPress: () => {
      navigationServices.navigate('ChooseVechicle');
    },
  },
  {
    id: 3,
    name: 'Booking',
    onPress: () => {
      navigationServices.navigate('MyBookingScreen');
    },
  },
  // {
  //   id: 4,
  //   name: 'Payments',
  // },
  {
    id: 5,
    name: 'Support & Help',
  },
  {
    id: 6,
    name: 'Setting',
    onPress: () => {
      navigationServices.navigate('Setting');
    },
  },
  {
    id: 7,
    name: 'Refer & Earn',
  },
  {
    id: 8,
    name: 'Ride preferences',
  },
];

export const notifications = [
  {
    id: 7,
    type: 'offer',
    title: '🎉 Weekend Special!',
    message: '20% cashback on all rides this weekend! Max $10',
    time: '2 hours ago',
    couponCode: 'WEEKEND20',
    expiryDate: '2024-03-31',
    terms: 'Valid on rides over $15',
    colors: {
      background: '#FFF3E0',
      text: '#BF360C',
      border: '#FF9800',
      icon: '#F57C00',
    },
  },
  {
    id: 8,
    type: 'offer',
    title: '🚀 First Ride Free',
    message: 'First ride up to $20 absolutely free for new users!',
    time: '1 day ago',
    couponCode: 'FIRSTRIDE20',
    maxDiscount: 20,
    colors: {
      background: '#FFF3E0',
      text: '#BF360C',
      border: '#FF9800',
      icon: '#F57C00',
    },
  },

  // Ride Updates - Teal Theme
  {
    id: 9,
    type: 'ride_started',
    title: '▶️ Ride Started',
    message: 'Your trip to San Francisco Airport has begun',
    time: '20 min ago',
    destination: 'SFO Airport',
    eta: '25 min',
    route: 'US-101 N',
    colors: {
      background: '#E0F2F1',
      text: '#004D40',
      border: '#009688',
      icon: '#00695C',
    },
  },
  {
    id: 10,
    type: 'ride_completed',
    title: '🏁 Ride Completed',
    message: "You've arrived at your destination. Rate your ride!",
    time: '1 hour ago',
    totalFare: 45.5,
    tip: 5.5,
    total: 51.0,
    rating: null,
    colors: {
      background: '#E8F5E9',
      text: '#1B5E20',
      border: '#4CAF50',
      icon: '#2E7D32',
    },
  },

  // Emergency & Safety - Red Colors
  {
    id: 11,
    type: 'safety_alert',
    title: '🆘 Safety Alert',
    message: 'Your ride location is being shared with emergency contacts',
    time: '5 min ago',
    priority: 'high',
    action: 'share_location',
    emergencyContact: 'Sarah - +1 (310) 555-9876',
    colors: {
      background: '#FFEBEE',
      text: '#B71C1C',
      border: '#F44336',
      icon: '#C62828',
    },
  },

  // Cancellation - Red Theme
  {
    id: 12,
    type: 'cancellation',
    title: '❌ Ride Cancelled',
    message: 'Driver cancelled - finding you another driver',
    time: '25 min ago',
    reason: 'Vehicle issue',
    compensation: '$5 credit added to your account',
    colors: {
      background: '#FFEBEE',
      text: '#B71C1C',
      border: '#F44336',
      icon: '#C62828',
    },
  },

  // Rating & Feedback - Amber Theme
  {
    id: 13,
    type: 'rating_reminder',
    title: '⭐ Rate Your Driver',
    message: 'How was your ride with Michael? Your feedback helps!',
    time: '2 hours ago',
    rideDate: 'Today, 10:30 AM',
    driverName: 'Michael',
    colors: {
      background: '#FFF8E1',
      text: '#FF6F00',
      border: '#FFC107',
      icon: '#FF8F00',
    },
  },

  // Wallet Updates - Cyan Theme
  {
    id: 14,
    type: 'wallet_credit',
    title: '💰 Wallet Credit',
    message: '$50 added to your Uber Cash wallet',
    time: '3 hours ago',
    amount: 50,
    currency: 'USD',
    balance: 120,
    colors: {
      background: '#E0F7FA',
      text: '#006064',
      border: '#00BCD4',
      icon: '#0097A7',
    },
  },
  {
    id: 15,
    type: 'wallet_low',
    title: '⚠️ Low Balance Alert',
    message: 'Your Uber Cash balance is $5 - running low',
    time: '5 hours ago',
    currentBalance: 5.5,
    suggestedRecharge: 25,
    colors: {
      background: '#FFF3E0',
      text: '#BF360C',
      border: '#FF9800',
      icon: '#F57C00',
    },
  },

  // Referral Program - Pink Theme
  {
    id: 16,
    type: 'referral',
    title: '🤝 Referral Bonus!',
    message: 'Your friend Emily joined! $10 credit added',
    time: '1 day ago',
    friendName: 'Emily Johnson',
    bonusAmount: 10,
    currency: 'USD',
    colors: {
      background: '#FCE4EC',
      text: '#880E4F',
      border: '#E91E63',
      icon: '#C2185B',
    },
  },

  // Traffic Updates - Deep Orange Theme
  {
    id: 17,
    type: 'traffic_alert',
    title: '🚦 Traffic Alert',
    message: 'Heavy traffic on I-405. Added 15 mins to your trip',
    time: '40 min ago',
    location: 'I-405, Los Angeles',
    delay: '15 min',
    alternateRoute: 'Sepulveda Blvd',
    colors: {
      background: '#FBE9E7',
      text: '#BF360C',
      border: '#FF5722',
      icon: '#D84315',
    },
  },

  // Surge Pricing - Deep Purple Theme
  {
    id: 18,
    type: 'surge_pricing',
    title: '⚡ Surge Pricing Active',
    message: 'High demand area - 1.8x normal prices',
    time: '1 hour ago',
    surgeMultiplier: 1.8,
    location: 'Downtown LA',
    estimatedFare: '$25-30 instead of $15',
    colors: {
      background: '#EDE7F6',
      text: '#311B92',
      border: '#673AB7',
      icon: '#512DA8',
    },
  },

  // Scheduled Rides - Indigo Theme
  {
    id: 19,
    type: 'scheduled_reminder',
    title: '⏰ Scheduled Ride Reminder',
    message: 'Your 8 AM ride to LAX tomorrow is confirmed',
    time: '12 hours ago',
    scheduledTime: 'Tomorrow, 8:00 AM',
    pickup: '123 Main St, Downtown',
    dropoff: 'LAX Airport',
    driver: 'James will be your driver',
    colors: {
      background: '#E8EAF6',
      text: '#1A237E',
      border: '#3F51B5',
      icon: '#283593',
    },
  },

  // Business Profile - Grey Theme
  {
    id: 20,
    type: 'business',
    title: '💼 Business Trip',
    message: 'Your business ride to Google HQ is expensed',
    time: '3 hours ago',
    company: 'Tech Corp Inc.',
    receipt: 'Receipt sent to finance@techcorp.com',
    colors: {
      background: '#ECEFF1',
      text: '#263238',
      border: '#607D8B',
      icon: '#455A64',
    },
  },

  // Airport Specific - Light Blue Theme
  {
    id: 21,
    type: 'airport',
    title: '✈️ Airport Pickup',
    message: 'Your driver will meet you at Arrivals, Column 7',
    time: '10 min ago',
    airport: 'LAX - Terminal 4',
    meetingPoint: 'Arrivals, Column 7, Level 1',
    driverName: 'Robert',
    colors: {
      background: '#E1F5FE',
      text: '#0277BD',
      border: '#039BE5',
      icon: '#0288D1',
    },
  },

  // Weather Alert - Light Blue Theme
  {
    id: 22,
    type: 'weather_alert',
    title: '🌧️ Weather Alert',
    message: 'Heavy rain expected. Allow extra travel time',
    time: '30 min ago',
    weather: 'Thunderstorms expected at 5 PM',
    advice: 'Book early to avoid surge pricing',
    colors: {
      background: '#E1F5FE',
      text: '#0277BD',
      border: '#039BE5',
      icon: '#0288D1',
    },
  },

  // Support Messages - Blue Grey Theme
  {
    id: 23,
    type: 'support',
    title: '🛠️ Support Update',
    message: 'Your refund request has been approved',
    time: '2 days ago',
    ticketId: 'USA789012',
    status: 'resolved',
    refundAmount: 15.5,
    colors: {
      background: '#ECEFF1',
      text: '#263238',
      border: '#607D8B',
      icon: '#455A64',
    },
  },

  // Ride Pass - Green Theme
  {
    id: 24,
    type: 'ride_pass',
    title: '🎫 Ride Pass Active',
    message: 'Your weekly pass gives you 10% off all rides',
    time: '1 day ago',
    passType: 'Weekly Commuter Pass',
    savings: '$12 saved this week',
    validUntil: 'March 31, 2024',
    colors: {
      background: '#E8F5E9',
      text: '#1B5E20',
      border: '#4CAF50',
      icon: '#2E7D32',
    },
  },
];

export const settings_item = [
  {
    id: 2,
    title: 'Display Traffic',
    check: true,
  },
  {
    id: 3,
    title: "Don't Call me",
    description: "we'll ask the driver not to call unless its an emergency",
    check: true,
  },
  {
    id: 4,
    title: 'Share my location with Driver',
    description:
      'The Driver will be able to see your location untill you get in the car',
    check: true,
  },
  {
    id: 5,
    title: 'More',
  },
];

export const driverCategories = [
  {
    image: Images.car_image,
    title: 'Cab Driver',
    text: 'Drive passengers to their destinations safely and comfortably. Accept ride requests from nearby riders and earn by providing reliable city rides.',
    value: 'cab',
  },
  {
    image: Images.pet_card,
    title: 'Bike Rider',
    text: 'Offer quick and affordable bike rides around the city. Perfect for short trips and faster travel through traffic.',
    value: 'bike',
  },
  {
    image: Images.cargo_card,
    title: 'Cargo Driver',
    text: 'Deliver packages and goods across the city. Help businesses and customers transport items safely and on time.',
    value: 'cargo',
  },
  {
    image: Images.pet_delivery,
    title: 'Pet Delivery Driver',
    text: 'Transport pets safely and with care. Help pet owners move their pets comfortably to clinics, homes, or other locations.',
    value: 'pet',
  },
];

export const rideRequests = [
  {
    id: 2,
    name: 'Emily Smith',
    riderRating: 4.7,
    pickupLocation: 'Union Station, Washington, DC',
    dropoffLocation: 'Smithsonian Museum, Washington, DC',
    distance: '2.5 mi',
    duration: '10 min',
    fare: '$12',
    vehicleType: 'Cab',
    image: Images.user_image2,
    pickup_latitude: 24.9266,
    pickup_longitude: 67.0336,
    dropoff_latitude: 38.897095,
    dropoff_longitude: -77.006332,
  },
];

export const ridesData = [
  {
    id: 1,
    driverName: 'Michael Chen',
    carModel: 'Toyota Camry',
    carNumber: 'ABC-1234',
    carColor: 'Silver',
    rating: 4.8,
    pickupLocation: '1012 Ocean Avenue, New York',
    dropoffLocation: 'JFK International Airport',
    distance: '15.2 km',
    duration: '25 min',
    fare: '$24.50',
    date: 'Jan 04, 2023',
    time: '17:00 PM',
    status: 'Active',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },
  {
    id: 2,
    driverName: 'Sarah Johnson',
    carModel: 'Honda Civic',
    carNumber: 'XYZ-5678',
    carColor: 'Black',
    rating: 4.9,
    pickupLocation: '1901 Thornridge Cir. Sh',
    dropoffLocation: 'Grand Central Station',
    distance: '8.5 km',
    duration: '18 min',
    fare: '$18.75',
    date: 'Jan 07, 2023',
    time: '18:00 PM',
    status: 'Active',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },

  // Completed Rides
  {
    id: 3,
    driverName: 'David Kumar',
    carModel: 'Toyota Corolla',
    carNumber: 'LMN-9012',
    carColor: 'White',
    rating: 4.7,
    pickupLocation: '4517 Washington Ave',
    dropoffLocation: 'Times Square',
    distance: '5.2 km',
    duration: '12 min',
    fare: '$14.30',
    date: 'Jan 20, 2023',
    time: '18:30 PM',
    status: 'Completed',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },
  {
    id: 4,
    driverName: 'Emily Watson',
    carModel: 'Hyundai Elantra',
    carNumber: 'DEF-3456',
    carColor: 'Blue',
    rating: 4.9,
    pickupLocation: '2118 Thornridge Cir. Syracuse',
    dropoffLocation: 'Central Park',
    distance: '10.8 km',
    duration: '22 min',
    fare: '$22.50',
    date: 'Jan 15, 2023',
    time: '19:00 PM',
    status: 'Completed',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },

  // Cancelled Rides
  {
    id: 5,
    driverName: 'Robert Smith',
    carModel: 'Nissan Altima',
    carNumber: 'GHI-7890',
    carColor: 'Gray',
    rating: 4.5,
    pickupLocation: '6391 Elgin St. Celina',
    dropoffLocation: 'Brooklyn Bridge',
    distance: '12.5 km',
    duration: '28 min',
    fare: '$28.75',
    date: 'Jan 12, 2023',
    time: '20:00 PM',
    status: 'Cancelled',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },
  {
    id: 6,
    driverName: 'Lisa Wang',
    carModel: 'Kia Optima',
    carNumber: 'JKL-1234',
    carColor: 'Red',
    rating: 4.6,
    pickupLocation: '3891 Ranchview Dr. Rich',
    dropoffLocation: 'Staten Island Ferry',
    distance: '18.3 km',
    duration: '35 min',
    fare: '$32.00',
    date: 'Jan 10, 2023',
    time: '21:00 PM',
    status: 'Cancelled',
    driverImage: Images.user_image2,
    carImage: Images.carimage,
  },
];

export default {
  social_logins,
  dummyUsers,
  rideHistory,
  carsList,
  drawer_items,
  vehicle_list,
  notifications,
  settings_item,
  driverCategories,
  rider_drawer_item,
  ridesData,
};
