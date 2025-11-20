# Quick Start Guide - Evergreen Event Planner

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Test Key Features

#### Service Pages
- Go to `/services`
- Click on any service card (e.g., "Catering Services")
- Test WhatsApp button
- Test "Call Now" button
- Click "Book Now" and fill the form

#### Admin Panel
- Visit `/admin`
- Login with: **admin** / **admin123**
- Explore the dashboard tabs:
  - Services Management
  - Portfolio Management
  - Bookings
  - Settings

#### Portfolio
- Visit `/portfolio`
- Filter by category (Weddings, Corporate, etc.)
- View different events

## 📱 Important Configuration

### Update WhatsApp Number
Edit `/src/pages/ServiceCategory.tsx` line 34:
```typescript
const whatsappNumber = "+254712345678"; // Replace with your number
```

### Update Service Data
Edit `/src/data/services.ts` to:
- Change service descriptions
- Update pricing
- Modify images
- Edit WhatsApp messages

## 🎨 Customization

### Add Your Images
1. Place images in `/public/images/`
2. Update image paths in `/src/data/services.ts`
3. Update portfolio images in `/src/pages/Portfolio.tsx`

### Modify Colors (Optional)
Edit `/src/index.css` to change:
- `--forest-green`: Main brand color
- `--gold`: Accent color
- `--primary`: Primary theme color

## 📦 Build for Production
```bash
npm run build
```

Output will be in `/dist` folder.

## 🔧 Backend Setup (Optional)

For dynamic content management through admin panel:
1. Read `BACKEND_SETUP.md`
2. Choose your backend stack
3. Set up database
4. Create API endpoints
5. Connect to frontend

## 🌐 Deployment

### Deploy Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Deploy Frontend (Netlify)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📞 Support

For issues or questions, refer to:
- `IMPLEMENTATION_SUMMARY.md` - Full feature list
- `BACKEND_SETUP.md` - Backend integration guide

## ✅ Checklist Before Launch

- [ ] Update WhatsApp number
- [ ] Replace demo images
- [ ] Update contact information
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Set up backend (optional)
- [ ] Configure custom domain
- [ ] Set up analytics (Google Analytics)
- [ ] Test WhatsApp links
- [ ] Review privacy policy
- [ ] Review terms & conditions

## 🎯 Key URLs

- Homepage: `/`
- Services: `/services`
- Individual Service: `/services/catering` (example)
- Portfolio: `/portfolio`
- About: `/about`
- Contact: `/contact`
- Admin Panel: `/admin`
- Blog: `/blog`

---

**Ready to launch!** 🚀

Start with `npm run dev` and explore all features.
