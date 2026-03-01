export interface Equipment {
  id: string;
  name: string;
  brand: string;
  model: string;
  hp: number;
  type: string;
  priceHourly: number;
  pricePerAcre: number;
  priceDaily: number;
  location: string;
  distanceKm: number;
  rating: number;
  reviewsCount: number;
  ownerName: string;
  ownerId: string;
  images: string[];
  available: boolean;
  operatorIncluded: boolean;
  description: string;
  fuelType: string;
  year: number;
  agriScore: number;
  lat: number;
  lng: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  cropType: string;
}

export interface Booking {
  id: string;
  equipmentId: string;
  equipmentName: string;
  date: string;
  duration: string;
  amount: number;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

export const equipmentCategories = [
  { name: "Tractor", icon: "🚜", startingPrice: 500 },
  { name: "Combine Harvester", icon: "🌾", startingPrice: 1200 },
  { name: "Rotavator", icon: "🔄", startingPrice: 400 },
  { name: "Drone Sprayer", icon: "💧", startingPrice: 800 },
  { name: "Seed Drill", icon: "🌱", startingPrice: 350 },
  { name: "Power Tiller", icon: "🌿", startingPrice: 300 },
  { name: "Boom Sprayer", icon: "🚿", startingPrice: 450 },
  { name: "Transplanter", icon: "🌾", startingPrice: 600 },
];

export const equipment: Equipment[] = [
  {
    id: "1", name: "Mahindra 575 DI", brand: "Mahindra", model: "575 DI", hp: 45,
    type: "Tractor", priceHourly: 600, pricePerAcre: 1200, priceDaily: 4500,
    location: "Nagpur, Maharashtra", distanceKm: 5, rating: 4.8, reviewsCount: 124,
    ownerName: "Rajesh Patil", ownerId: "o1", images: [], available: true,
    operatorIncluded: true, description: "Well-maintained Mahindra tractor, ideal for ploughing and hauling. Comes with experienced operator.",
    fuelType: "Diesel", year: 2021, agriScore: 92, lat: 21.1458, lng: 79.0882,
  },
  {
    id: "2", name: "John Deere 5310", brand: "John Deere", model: "5310", hp: 55,
    type: "Tractor", priceHourly: 800, pricePerAcre: 1500, priceDaily: 6000,
    location: "Pune, Maharashtra", distanceKm: 12, rating: 4.9, reviewsCount: 89,
    ownerName: "Sunil Jadhav", ownerId: "o2", images: [], available: true,
    operatorIncluded: true, description: "Premium John Deere tractor with power steering and excellent fuel efficiency.",
    fuelType: "Diesel", year: 2022, agriScore: 96, lat: 18.5204, lng: 73.8567,
  },
  {
    id: "3", name: "Preet 949 Harvester", brand: "Preet", model: "949", hp: 101,
    type: "Combine Harvester", priceHourly: 1500, pricePerAcre: 2500, priceDaily: 12000,
    location: "Amritsar, Punjab", distanceKm: 8, rating: 4.7, reviewsCount: 56,
    ownerName: "Gurpreet Singh", ownerId: "o3", images: [], available: true,
    operatorIncluded: true, description: "High-capacity combine harvester perfect for wheat and rice harvesting season.",
    fuelType: "Diesel", year: 2020, agriScore: 88, lat: 31.6340, lng: 74.8723,
  },
  {
    id: "4", name: "Shaktiman Rotavator", brand: "Shaktiman", model: "SRT-150", hp: 0,
    type: "Rotavator", priceHourly: 450, pricePerAcre: 900, priceDaily: 3500,
    location: "Indore, MP", distanceKm: 15, rating: 4.5, reviewsCount: 78,
    ownerName: "Vikram Sharma", ownerId: "o1", images: [], available: true,
    operatorIncluded: false, description: "Heavy-duty rotavator for soil preparation. Requires 45+ HP tractor.",
    fuelType: "N/A", year: 2022, agriScore: 84, lat: 22.7196, lng: 75.8577,
  },
  {
    id: "5", name: "DJI Agras T30", brand: "DJI", model: "Agras T30", hp: 0,
    type: "Drone Sprayer", priceHourly: 1000, pricePerAcre: 500, priceDaily: 8000,
    location: "Hyderabad, Telangana", distanceKm: 20, rating: 4.9, reviewsCount: 45,
    ownerName: "Ravi Kumar", ownerId: "o2", images: [], available: false,
    operatorIncluded: true, description: "Latest DJI agricultural drone with 30L tank. Covers 20 acres/hour with precision spraying.",
    fuelType: "Electric", year: 2023, agriScore: 95, lat: 17.3850, lng: 78.4867,
  },
  {
    id: "6", name: "Dasmesh Seed Drill", brand: "Dasmesh", model: "SD-921", hp: 0,
    type: "Seed Drill", priceHourly: 400, pricePerAcre: 800, priceDaily: 3000,
    location: "Ludhiana, Punjab", distanceKm: 10, rating: 4.6, reviewsCount: 92,
    ownerName: "Harjinder Gill", ownerId: "o3", images: [], available: true,
    operatorIncluded: false, description: "9-row seed drill for precision sowing of wheat, mustard, and other crops.",
    fuelType: "N/A", year: 2021, agriScore: 86, lat: 30.9010, lng: 75.8573,
  },
  {
    id: "7", name: "VST Shakti Tiller", brand: "VST", model: "Shakti 130 DI", hp: 13,
    type: "Power Tiller", priceHourly: 350, pricePerAcre: 700, priceDaily: 2800,
    location: "Coimbatore, TN", distanceKm: 7, rating: 4.4, reviewsCount: 67,
    ownerName: "Murugan S", ownerId: "o1", images: [], available: true,
    operatorIncluded: true, description: "Compact power tiller ideal for small farms and paddy fields.",
    fuelType: "Diesel", year: 2022, agriScore: 80, lat: 11.0168, lng: 76.9558,
  },
  {
    id: "8", name: "Mitra Boom Sprayer", brand: "Mitra", model: "BS-600", hp: 0,
    type: "Boom Sprayer", priceHourly: 500, pricePerAcre: 400, priceDaily: 3500,
    location: "Nashik, Maharashtra", distanceKm: 18, rating: 4.3, reviewsCount: 34,
    ownerName: "Anand Deshmukh", ownerId: "o2", images: [], available: true,
    operatorIncluded: false, description: "600L tank boom sprayer with 12m spray width. Tractor-mounted.",
    fuelType: "N/A", year: 2021, agriScore: 78, lat: 19.9975, lng: 73.7898,
  },
  {
    id: "9", name: "Yanmar Rice Transplanter", brand: "Yanmar", model: "VP6D", hp: 0,
    type: "Transplanter", priceHourly: 700, pricePerAcre: 1800, priceDaily: 5500,
    location: "Thanjavur, TN", distanceKm: 22, rating: 4.8, reviewsCount: 41,
    ownerName: "Kannan R", ownerId: "o3", images: [], available: true,
    operatorIncluded: true, description: "6-row riding-type rice transplanter. Speeds up paddy transplanting by 10x.",
    fuelType: "Diesel", year: 2022, agriScore: 90, lat: 10.7870, lng: 79.1378,
  },
  {
    id: "10", name: "Sonalika 60 RX", brand: "Sonalika", model: "60 RX", hp: 60,
    type: "Tractor", priceHourly: 750, pricePerAcre: 1400, priceDaily: 5500,
    location: "Jaipur, Rajasthan", distanceKm: 9, rating: 4.6, reviewsCount: 103,
    ownerName: "Bharat Meena", ownerId: "o1", images: [], available: true,
    operatorIncluded: true, description: "Powerful 60HP tractor with AC cabin. Perfect for large farms.",
    fuelType: "Diesel", year: 2023, agriScore: 91, lat: 26.9124, lng: 75.7873,
  },
  {
    id: "11", name: "Swaraj 744 FE", brand: "Swaraj", model: "744 FE", hp: 48,
    type: "Tractor", priceHourly: 650, pricePerAcre: 1300, priceDaily: 5000,
    location: "Bhopal, MP", distanceKm: 14, rating: 4.5, reviewsCount: 71,
    ownerName: "Devendra Yadav", ownerId: "o2", images: [], available: false,
    operatorIncluded: false, description: "Reliable Swaraj tractor with excellent resale value and low maintenance.",
    fuelType: "Diesel", year: 2020, agriScore: 82, lat: 23.2599, lng: 77.4126,
  },
  {
    id: "12", name: "KisanKraft Sprayer Drone", brand: "KisanKraft", model: "KK-AGR10", hp: 0,
    type: "Drone Sprayer", priceHourly: 900, pricePerAcre: 450, priceDaily: 7000,
    location: "Bengaluru, Karnataka", distanceKm: 25, rating: 4.7, reviewsCount: 29,
    ownerName: "Prashanth N", ownerId: "o3", images: [], available: true,
    operatorIncluded: true, description: "10L agricultural drone with AI-powered pest detection and precision spraying.",
    fuelType: "Electric", year: 2023, agriScore: 93, lat: 12.9716, lng: 77.5946,
  },
];

export const reviews: Review[] = [
  { id: "r1", userName: "Ramesh K", rating: 5, comment: "Excellent tractor! The operator was very skilled and finished my field in no time.", date: "2025-12-15", cropType: "Wheat" },
  { id: "r2", userName: "Lakshmi D", rating: 4, comment: "Good machine but arrived 30 minutes late. Otherwise very happy with the service.", date: "2025-11-20", cropType: "Rice" },
  { id: "r3", userName: "Ajay P", rating: 5, comment: "The drone sprayer saved me hours of manual work. Will definitely book again!", date: "2025-10-10", cropType: "Cotton" },
  { id: "r4", userName: "Meena S", rating: 4, comment: "Very affordable and the booking process was simple. Recommended to all farmers.", date: "2025-09-05", cropType: "Sugarcane" },
  { id: "r5", userName: "Kiran B", rating: 5, comment: "AgriRent is a game changer for small farmers like me. No need to buy expensive machines.", date: "2025-08-22", cropType: "Maize" },
];

export const farmerBookings: Booking[] = [
  { id: "b1", equipmentId: "1", equipmentName: "Mahindra 575 DI", date: "2026-03-05", duration: "4 hours", amount: 2400, status: "confirmed" },
  { id: "b2", equipmentId: "5", equipmentName: "DJI Agras T30", date: "2026-02-20", duration: "10 acres", amount: 5000, status: "completed" },
  { id: "b3", equipmentId: "3", equipmentName: "Preet 949 Harvester", date: "2026-03-12", duration: "1 day", amount: 12000, status: "pending" },
  { id: "b4", equipmentId: "6", equipmentName: "Dasmesh Seed Drill", date: "2026-01-15", duration: "6 hours", amount: 2400, status: "completed" },
  { id: "b5", equipmentId: "9", equipmentName: "Yanmar Transplanter", date: "2025-12-01", duration: "5 acres", amount: 9000, status: "completed" },
  { id: "b6", equipmentId: "2", equipmentName: "John Deere 5310", date: "2025-11-10", duration: "1 day", amount: 6000, status: "cancelled" },
];

export const testimonials = [
  {
    name: "Rajendra Patil",
    village: "Wardha, Maharashtra",
    crop: "Cotton & Soybean",
    quote: "AgriRent saved me ₹6 lakhs this season. Instead of buying a tractor, I rent one whenever I need it. The operator was skilled and my field was ready in hours!",
    avatar: "RP",
  },
  {
    name: "Gurpreet Kaur",
    village: "Moga, Punjab",
    crop: "Wheat & Rice",
    quote: "The combine harvester I rented through AgriRent was top-quality. Booking was as easy as ordering food online. Every farmer should know about this platform!",
    avatar: "GK",
  },
  {
    name: "Lakshmi Devi",
    village: "Thanjavur, Tamil Nadu",
    crop: "Paddy",
    quote: "As a woman farmer, I was hesitant to rent machinery. But AgriRent's verified owners and transparent pricing gave me confidence. The transplanter saved my entire season.",
    avatar: "LD",
  },
];

export const aiRecommendations: Record<string, Record<string, string[]>> = {
  Rice: {
    Kharif: ["Transplanter", "Drone Sprayer", "Power Tiller"],
    Rabi: ["Seed Drill", "Boom Sprayer"],
    Zaid: ["Power Tiller", "Drone Sprayer"],
  },
  Wheat: {
    Kharif: ["Rotavator", "Seed Drill"],
    Rabi: ["Seed Drill", "Combine Harvester", "Boom Sprayer"],
    Zaid: ["Rotavator"],
  },
  Sugarcane: {
    Kharif: ["Rotavator", "Tractor", "Boom Sprayer"],
    Rabi: ["Tractor", "Rotavator"],
    Zaid: ["Drone Sprayer", "Boom Sprayer"],
  },
  Cotton: {
    Kharif: ["Tractor", "Drone Sprayer", "Boom Sprayer"],
    Rabi: ["Rotavator"],
    Zaid: ["Power Tiller"],
  },
  Maize: {
    Kharif: ["Seed Drill", "Tractor", "Boom Sprayer"],
    Rabi: ["Seed Drill", "Combine Harvester"],
    Zaid: ["Power Tiller", "Drone Sprayer"],
  },
};
