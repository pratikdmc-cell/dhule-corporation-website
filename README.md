# Dhule Municipality E-Governance Portal

A modern, responsive e-governance website for Dhule Municipal Corporation with comprehensive services for citizens.

## Features

- 🏛️ **E-Services**: Property tax, water bills, licenses, tenders
- 📋 **Grievance Management**: File and track complaints
- 📊 **Citizen Dashboard**: View payments, grievances, status
- 📰 **News & Updates**: Latest announcements
- 📱 **Mobile Responsive**: Works on all devices
- 🎨 **Modern UI**: Beautiful Tailwind CSS design
- 🔐 **Secure**: NextAuth integration ready

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express (optional)
- **Database**: MongoDB (optional)
- **Deployment**: Vercel, Netlify

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pratikdmc-cell/dhule-corporation-website.git
cd dhule-corporation-website

# Install dependencies
npm install

# Create .env.local from .env.example
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Pages

- **Home** (`/`) - Landing page
- **Services** (`/services`) - All e-services
- **Grievance** (`/grievance`) - File complaints
- **Dashboard** (`/dashboard`) - Citizen portal
- **News** (`/news`) - Announcements

## Environment Variables

See `.env.example` for required variables.

## License

MIT

## Contact

For support, contact: info@dhulecorp.in