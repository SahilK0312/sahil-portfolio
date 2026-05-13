# 🗄️ Database Schema

## Database: `portfolio` (MongoDB)

---

### Collection: `projects`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | ✅ | Project name |
| slug | String | ✅ | URL-friendly identifier (unique, indexed) |
| category | String | ✅ | e.g., "Animal Welfare", "Medical" |
| isFeatured | Boolean | - | Show in featured section (default: false) |
| image | String | - | Image path/URL |
| problem | String | - | Problem statement |
| description | String | ✅ | Short description |
| result | String | - | Result summary |
| metrics | [String] | - | Emoji metric labels |
| tags | [String] | - | Tech tags |
| architectureDecisions | [{title, description}] | - | Why certain tech choices |
| systemDesignOverview | String | - | System design description |
| technicalChallenges | [{title, description, solution}] | - | Challenge/solution pairs |
| performanceMetrics | [{label, value, improvement}] | - | Quantified improvements |
| techStackJustification | [{tech, reason}] | - | Tech choice justifications |
| outcome | String | - | Technical outcome |
| businessImpact | String | - | Business impact |
| link | String | - | Live app URL |
| github | String | - | GitHub URL |
| playStore | String | - | Play Store URL |
| appStore | String | - | App Store URL |
| order | Number | - | Display order |
| isPublished | Boolean | - | Visibility flag (default: true) |

---

### Collection: `experiences`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| company | String | ✅ | Company name |
| role | String | ✅ | Job title |
| period | String | ✅ | e.g., "March 2025 – Present" |
| startDate | Date | ✅ | Start date |
| endDate | Date | - | End date (null if current) |
| isCurrent | Boolean | - | Currently working here |
| description | String | ✅ | Role description |
| highlights | [String] | - | Key achievements |
| technologies | [String] | - | Technologies used |
| order | Number | - | Display order |
| isPublished | Boolean | - | Visibility flag |

---

### Collection: `skills`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | ✅ | Skill name |
| category | String | ✅ | "technical" \| "soft" \| "ai-tools" |
| icon | String | - | Icon identifier |
| proficiency | Number | - | 1-5 rating |
| order | Number | - | Display order |
| isPublished | Boolean | - | Visibility flag |

---

### Collection: `testimonials`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | ✅ | Client name |
| role | String | ✅ | Client role |
| company | String | ✅ | Client company |
| content | String | ✅ | Testimonial text |
| avatar | String | - | Avatar URL |
| rating | Number | - | 1-5 stars |
| isFeatured | Boolean | - | Featured flag |
| isPublished | Boolean | - | Visibility flag |
| order | Number | - | Display order |

---

### Collection: `inquiries`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | ✅ | Inquirer name |
| email | String | ✅ | Inquirer email |
| projectType | String | ✅ | Enum: Mobile App, Web Application, Full Stack, Consulting, Architecture Review, Other |
| budgetRange | String | ✅ | Enum: Under $5k, $5k-$15k, $15k-$50k, $50k+, Let's Discuss |
| message | String | ✅ | Project details |
| status | String | - | new \| read \| replied \| archived |

---

### Collection: `users`
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | ✅ | Admin name |
| email | String | ✅ | Login email (unique) |
| password | String | ✅ | Bcrypt hashed (select: false) |
| role | String | - | "admin" \| "viewer" |

> All collections include `createdAt` and `updatedAt` timestamps.
