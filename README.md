# Evergreen Event Planner 🌿

A premium, eco-conscious event planning website built with React, TypeScript, and modern web technologies.

## 🎯 Features

### Client-Facing Features
- **Individual Service Pages** - Dedicated pages for each service category with detailed information
- **WhatsApp Integration** - Direct WhatsApp contact with pre-filled messages for each service
- **Booking System** - Users can book services directly through the website
- **Portfolio Gallery** - Showcase of past events with category filtering
- **Testimonials** - Client reviews and success stories
- **Mobile Responsive** - Optimized for all devices
- **Accessibility** - WCAG compliant with proper alt text and ARIA labels

### Admin Features
- **Admin Dashboard** - Secure admin panel at `/admin` (demo: admin/admin123)
- **Service Management** - Add, edit, and delete service items
- **Portfolio Management** - Manage event showcases
- **Booking Management** - View customer booking requests
- **Settings Configuration** - Update WhatsApp number and contact info

### Service Categories
1. **Event Management** - Full event planning and coordination
2. **Tent & Canopy Rentals** - Weather-proof tent solutions
3. **Furniture & Equipment Hire** - Tables, chairs, and décor equipment
4. **Décor & Floral Design** - Custom floral arrangements and styling
5. **Photography & Videography** - Professional event documentation
6. **Catering Services** - Exquisite culinary experiences

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd evergreen-event-reimagined

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173

### First Steps
1. Update WhatsApp number in `/src/pages/ServiceCategory.tsx`
2. Replace demo images in `/public/images/`
3. Customize service data in `/src/data/services.ts`
4. Test admin panel at `/admin` (login: admin/admin123)

## 📁 Project Structure

```
src/
├── data/
│   └── services.ts           # Service categories and items
├── pages/
│   ├── Index.tsx             # Homepage
│   ├── Services.tsx          # Services overview
│   ├── ServiceCategory.tsx   # Individual service pages
│   ├── Admin.tsx             # Admin dashboard
│   ├── Portfolio.tsx         # Portfolio gallery
│   ├── About.tsx             # About us
│   └── Contact.tsx           # Contact page
├── components/              # Reusable components
└── lib/                     # Utilities

public/
└── images/                  # Event images
```

## 📱 Important URLs

- Homepage: `/`
- Services: `/services`
- Individual Service: `/services/catering`
- Portfolio: `/portfolio`
- About: `/about`
- Contact: `/contact`
- Admin Panel: `/admin`

## 🔧 Configuration

### WhatsApp Number
Edit `/src/pages/ServiceCategory.tsx`:
```typescript
const whatsappNumber = "+254712345678"; // Your number here
```

### Service Content
Edit `/src/data/services.ts` to customize:
- Service descriptions
- Pricing
- Images
- WhatsApp messages
- Service items

## 🎨 Customization

### Colors
The site uses a forest green and gold color scheme. To modify:
- Edit CSS variables in `/src/index.css`
- Update Tailwind config in `/tailwind.config.ts`

### Images
1. Add your images to `/public/images/`
2. Update image paths in service data
3. Ensure images are optimized for web (< 500KB recommended)

## 🔐 Admin Panel

Access at `/admin` with demo credentials:
- Username: `admin`
- Password: `admin123`

**Note:** This is a frontend-only admin panel. For full functionality, you need to:
1. Set up a backend (see `BACKEND_SETUP.md`)
2. Connect to a database
3. Implement API endpoints

## 📚 Documentation

- **QUICKSTART.md** - Quick start guide
- **IMPLEMENTATION_SUMMARY.md** - Complete feature list
- **BACKEND_SETUP.md** - Backend integration guide

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## Project info

**URL**: https://lovable.dev/projects/94e257cc-dab8-4202-9aca-371630a8a876

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/94e257cc-dab8-4202-9aca-371630a8a876) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/94e257cc-dab8-4202-9aca-371630a8a876) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
