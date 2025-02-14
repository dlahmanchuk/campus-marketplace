# Business Plan:

* Trading Platform
**Description:** A trading website, focused on college students, which would let people trade different supplies such as textbooks, clothes, merch, etc. People would make a post like on eBay or Depop and would be able to trade their things. Others would reply with something they'd like to trade for it along with images.

**UI**
*insert mockups here*

## Phase 1:
* Begin at CSUN & expand to other college campuses


## Payment Options
- Advertising
- Trading fee (to use the app)
- Subscription model
- Referral links to bookstores/Amazon

## Tech Stack

**Frontend Template:** https://v0.dev/
**Hosting:** https://supabase.com/

### Frontend (User Interface)
React.js (or Next.js for SSR & SEO benefits)
Tailwind CSS or Bootstrap (for styling)
Redux Toolkit (for state management)
Framer Motion (for animations)

### Backend (Server & Logic)
Node.js with Express.js (for API handling)
Django (Python) (alternative if you prefer Python)
REST API or GraphQL (for client-server communication)

### Database (Storing Data)
PostgreSQL (for structured data like users, products, orders)
MongoDB (if you prefer a NoSQL approach for flexibility)
Redis (for caching & performance boost)

### Authentication & Security
JWT (JSON Web Tokens) (for authentication)
OAuth 2.0 (for social login: Google, Facebook)
Helmet.js & CORS (for security)

### Payment Integration
Stripe API (for credit/debit card payments)
PayPal API (as an alternative)

### Cloud Storage & Image Upload
Cloudinary or AWS S3 (for handling product images)
Multer (Node.js) (for local file uploads before cloud storage)

### Deployment & Hosting
Vercel (for frontend)
AWS EC2 / DigitalOcean / Render (for backend)
PostgreSQL on Supabase / RDS (for database)
Docker (for containerization)

## Features
- Sort by school
- Sort by product type
- Put what you want to trade for
