# Evergreen Event Planner - Backend Setup Guide

This guide will help you set up a backend for the Evergreen Event Planner application to support the admin panel, bookings, and dynamic content management.

## Features to Implement

1. **Admin Authentication** - Secure login for administrators
2. **Service Management** - CRUD operations for service categories and items
3. **Portfolio Management** - Add, edit, delete portfolio items
4. **Booking System** - Store and manage client booking requests
5. **Image Upload** - Handle image uploads for services and portfolio
6. **WhatsApp Integration** - Manage WhatsApp contact information

## Option 1: Node.js + Express + MongoDB Backend

### Prerequisites
- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)

### Setup Steps

1. **Create Backend Directory**
```bash
mkdir backend
cd backend
npm init -y
```

2. **Install Dependencies**
```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken multer
npm install --save-dev nodemon
```

3. **Project Structure**
```
backend/
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   ├── Service.js
│   ├── Portfolio.js
│   └── Booking.js
├── routes/
│   ├── auth.js
│   ├── services.js
│   ├── portfolio.js
│   └── bookings.js
├── middleware/
│   └── auth.js
└── uploads/
```

4. **Environment Variables** (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/evergreen-events
JWT_SECRET=your-secret-key-here
FRONTEND_URL=http://localhost:5173
```

5. **Sample Server Code** (server.js)
```javascript
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/services'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/bookings', require('./routes/bookings'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

6. **Sample Models**

**models/Service.js**
```javascript
const mongoose = require('mongoose');

const ServiceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  price: String,
});

const ServiceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  icon: String,
  description: String,
  whatsappMessage: String,
  images: [String],
  features: [String],
  items: [ServiceItemSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Service', ServiceSchema);
```

**models/Booking.js**
```javascript
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventDate: Date,
  serviceCategory: String,
  message: String,
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
```

7. **Run the Backend**
```bash
nodemon server.js
```

## Option 2: Python + Django + PostgreSQL Backend

### Prerequisites
- Python (3.8+)
- PostgreSQL

### Setup Steps

1. **Create Django Project**
```bash
pip install django djangorestframework django-cors-headers pillow
django-admin startproject backend
cd backend
python manage.py startapp api
```

2. **Configure settings.py**
```python
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'evergreen_events',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

3. **Create Models** (api/models.py)
```python
from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    icon = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

class ServiceItem(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='items')
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')
    price = models.CharField(max_length=100, blank=True)

class Booking(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    event_date = models.DateField(null=True, blank=True)
    message = models.TextField()
    status = models.CharField(max_length=20, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
```

## Frontend Integration

### Update API Base URL

Create a new file: `src/lib/api.ts`

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Services
  getServices: async () => {
    const response = await fetch(`${API_BASE_URL}/services`);
    return response.json();
  },
  
  addServiceItem: async (categoryId: string, item: any) => {
    const response = await fetch(`${API_BASE_URL}/services/${categoryId}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    return response.json();
  },

  // Bookings
  createBooking: async (bookingData: any) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return response.json();
  },

  // Portfolio
  getPortfolio: async () => {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    return response.json();
  },
};
```

### Environment Variables

Create `.env` in the root:
```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=+254712345678
```

## Image Upload Implementation

### Using Multer (Node.js)

```javascript
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Images only!'));
  }
});

// Route
app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ path: `/uploads/${req.file.filename}` });
});
```

## Security Considerations

1. **Authentication** - Implement JWT tokens
2. **Input Validation** - Validate all user inputs
3. **Rate Limiting** - Prevent abuse
4. **HTTPS** - Use SSL in production
5. **Environment Variables** - Never commit secrets
6. **CORS** - Configure properly for production

## Deployment

### Backend Deployment Options
- **Heroku** - Easy deployment for Node.js/Python
- **DigitalOcean** - VPS with more control
- **AWS/Azure** - Enterprise solutions
- **Vercel/Netlify** - For serverless functions

### Database Hosting
- **MongoDB Atlas** - Free tier available
- **Amazon RDS** - For PostgreSQL/MySQL
- **Supabase** - PostgreSQL with real-time features

## Next Steps

1. Choose your backend stack (Node.js or Python recommended)
2. Set up the database
3. Implement authentication
4. Create API endpoints
5. Test with Postman/Insomnia
6. Integrate with frontend
7. Deploy to production

## Support

For questions or issues, refer to:
- Express.js: https://expressjs.com/
- Django: https://www.djangoproject.com/
- MongoDB: https://www.mongodb.com/docs/
- PostgreSQL: https://www.postgresql.org/docs/

---

**Note:** The current frontend is fully functional without a backend, using static data. The backend is required only for dynamic content management through the admin panel.
