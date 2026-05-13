import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach auth token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('portfolio_admin_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ═══════════════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════════════
export const projectsApi = {
    getAll: (featured?: boolean) =>
        api.get('/projects', { params: featured !== undefined ? { featured } : {} }).then(r => r.data),
    getBySlug: (slug: string) =>
        api.get(`/projects/${slug}`).then(r => r.data),
    create: (data: any) =>
        api.post('/projects', data).then(r => r.data),
    update: (id: string, data: any) =>
        api.put(`/projects/${id}`, data).then(r => r.data),
    delete: (id: string) =>
        api.delete(`/projects/${id}`).then(r => r.data),
    toggleFeatured: (id: string) =>
        api.patch(`/projects/${id}/toggle-featured`).then(r => r.data),
};

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════════════
export const experienceApi = {
    getAll: () => api.get('/experience').then(r => r.data),
    create: (data: any) => api.post('/experience', data).then(r => r.data),
    update: (id: string, data: any) => api.put(`/experience/${id}`, data).then(r => r.data),
    delete: (id: string) => api.delete(`/experience/${id}`).then(r => r.data),
};

// ═══════════════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════════════
export const skillsApi = {
    getAll: () => api.get('/skills').then(r => r.data),
    create: (data: any) => api.post('/skills', data).then(r => r.data),
    update: (id: string, data: any) => api.put(`/skills/${id}`, data).then(r => r.data),
    delete: (id: string) => api.delete(`/skills/${id}`).then(r => r.data),
};

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════
export const testimonialsApi = {
    getAll: () => api.get('/testimonials').then(r => r.data),
    create: (data: any) => api.post('/testimonials', data).then(r => r.data),
    update: (id: string, data: any) => api.put(`/testimonials/${id}`, data).then(r => r.data),
    delete: (id: string) => api.delete(`/testimonials/${id}`).then(r => r.data),
};

// ═══════════════════════════════════════════════════════════════
// INQUIRIES
// ═══════════════════════════════════════════════════════════════
export const inquiriesApi = {
    submit: (data: {
        name: string;
        email: string;
        projectType: string;
        budgetRange: string;
        message: string;
    }) => api.post('/inquiries', data).then(r => r.data),
    getAll: (status?: string) =>
        api.get('/inquiries', { params: status ? { status } : {} }).then(r => r.data),
    updateStatus: (id: string, status: string) =>
        api.patch(`/inquiries/${id}/status`, { status }).then(r => r.data),
    delete: (id: string) => api.delete(`/inquiries/${id}`).then(r => r.data),
};

// ═══════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════
export const authApi = {
    login: (email: string, password: string) =>
        api.post('/auth/login', { email, password }).then(r => r.data),
    getMe: () => api.get('/auth/me').then(r => r.data),
};

export default api;
