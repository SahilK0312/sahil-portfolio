# 📋 Changelog

## [2.0.1] — 2026-04-23

### Added
- **Root Development Scripts**: Added `dev`, `frontend`, and `backend` scripts to the root `package.json` for easier management of the MERN stack.

## [2.0.0] — 2026-04-17

### Added
- **Backend API Foundation**: Complete REST API with 6 collections (projects, experience, skills, testimonials, inquiries, users)
- **JWT Authentication**: Secure admin login with bcrypt password hashing and JWT token flow
- **Project Case Study Pages**: Dedicated `/project/:slug` routes with deep case study content (architecture decisions, technical challenges, performance metrics, tech stack justification, business impact)
- **Inquiry System**: Structured project inquiry form with project type + budget range dropdowns, MongoDB storage, and Nodemailer email notification
- **AI-Assisted Engineering Section**: New section showcasing AI workflow with Antigravity, Cursor, Windsurf, ChatGPT
- **Engineering Philosophy Section**: "I build systems, not just apps" with 4 core principles
- **Scroll Progress Bar**: Animated top progress bar tracking scroll position
- **Mobile Navigation**: Hamburger menu with full-screen overlay for mobile devices
- **React Query Data Layer**: All API integrations using @tanstack/react-query with caching
- **React Router**: BrowserRouter with `/` and `/project/:slug` routes
- **SEO**: React Helmet for dynamic meta/OG tags, sitemap.xml, robots.txt
- **Google Inter Font**: Premium typography
- **Comprehensive Seed Script**: 9 projects (5 featured with full case studies), 3 experience entries, 16 skills, admin user

### Updated
- **Project Cards**: Now link to dedicated case study pages via React Router
- **Navbar**: Streamlined navigation with mobile hamburger, AI section link
- **Contact Section**: Replaced basic email copy with structured inquiry form
- **Backend Port**: Changed from 5000 to 5001 (AirPlay conflict avoidance)
- **Mongoose v9 Compatibility**: Fixed pre-save hooks for Mongoose 9.x

### Fixed
- **Mongoose Pre-Save Hooks**: Updated to async pattern (Mongoose v9 removed next() callback)
- **TypeScript ObjectId Conversion**: Fixed ObjectId-to-string conversion in auth controller
