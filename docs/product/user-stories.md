# 📖 User Stories

## Version 2.0.0 — Portfolio Transformation

### US-001: View Portfolio Homepage
**As a** recruiter/client  
**I want to** see a premium, dark-themed portfolio homepage  
**So that** I can evaluate the developer's expertise at a glance  

**Acceptance Criteria:**
- Hero section with name, title, and stats
- Engineering Philosophy section
- Strategic Edge (trust cards)
- Featured Projects with case study links
- Experience timeline
- Skills with AI tools
- AI-Assisted Engineering workflow
- Inquiry form (replaces basic contact)
- Scroll progress bar

---

### US-002: View Project Case Study
**As a** technical decision-maker  
**I want to** read deep case studies for each project  
**So that** I can evaluate the developer's engineering depth  

**Acceptance Criteria:**
- Navigate to `/project/:slug`
- See: Problem Statement, Architecture Decisions, System Design, Technical Challenges, Performance Metrics, Tech Stack Justification, Outcome & Impact
- Dynamic OG meta tags per project
- Back navigation to homepage

---

### US-003: Submit Project Inquiry
**As a** potential client  
**I want to** submit a structured inquiry with project details  
**So that** I can start a conversation about my project  

**Acceptance Criteria:**
- Form fields: Name, Email, Project Type, Budget Range, Message
- Success/error state feedback
- Data stored in MongoDB
- Email notification sent to portfolio owner

---

### US-004: Admin Login
**As the** portfolio owner  
**I want to** securely login to an admin panel  
**So that** I can manage portfolio content  

**Acceptance Criteria:**
- POST /api/auth/login with email/password
- JWT token returned
- Protected admin routes

---

### US-005: Manage Projects (Admin)
**As an** admin  
**I want to** create, update, delete, and toggle featured projects  
**So that** I can keep my portfolio current  

**Acceptance Criteria:**
- Full CRUD operations
- Toggle featured status
- Slug auto-generation

---

### US-006: Manage Experience/Skills (Admin) 
**As an** admin  
**I want to** manage experience entries and skills  
**So that** I can update my professional history  

**Acceptance Criteria:**
- CRUD for experience entries
- CRUD for skills with category grouping
