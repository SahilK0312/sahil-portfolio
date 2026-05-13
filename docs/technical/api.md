# 🔌 API Documentation

## Base URL
```
http://localhost:5001/api
```

## Authentication
JWT Bearer token. Include in header:
```
Authorization: Bearer <token>
```

---

## Public Endpoints

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | List all published projects |
| GET | `/projects?featured=true` | List featured projects only |
| GET | `/projects/:slug` | Get project by slug (case study) |

### Experience
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/experience` | List all published experience |

### Skills
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/skills` | Get skills grouped by category |

### Testimonials
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/testimonials` | List all published testimonials |

### Inquiries
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/inquiries` | Submit a project inquiry |

**Inquiry Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "projectType": "Mobile App | Web Application | Full Stack | Consulting | Architecture Review | Other",
  "budgetRange": "Under $5k | $5k - $15k | $15k - $50k | $50k+ | Let's Discuss",
  "message": "string (required)"
}
```

---

## Admin Endpoints (JWT Required)

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Admin login |
| GET | `/auth/me` | Get current user profile |

**Login Body:**
```json
{
  "email": "sahilkhatri312@gmail.com",
  "password": "admin@portfolio2026"
}
```

### Projects (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/projects` | Create project |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |
| PATCH | `/projects/:id/toggle-featured` | Toggle featured |

### Experience (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/experience` | Create experience |
| PUT | `/experience/:id` | Update experience |
| DELETE | `/experience/:id` | Delete experience |

### Skills (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/skills` | Create skill |
| PUT | `/skills/:id` | Update skill |
| DELETE | `/skills/:id` | Delete skill |

### Testimonials (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/testimonials` | Create testimonial |
| PUT | `/testimonials/:id` | Update testimonial |
| DELETE | `/testimonials/:id` | Delete testimonial |

### Inquiries (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/inquiries` | List all inquiries |
| GET | `/inquiries?status=new` | Filter by status |
| PATCH | `/inquiries/:id/status` | Update inquiry status |
| DELETE | `/inquiries/:id` | Delete inquiry |
