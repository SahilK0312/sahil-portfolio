import { useQuery } from '@tanstack/react-query';
import { projectsApi, experienceApi, skillsApi, testimonialsApi } from '../services/api';

// ═══════════════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════════════
export const useProjects = (featured?: boolean) =>
    useQuery({
        queryKey: ['projects', { featured }],
        queryFn: () => projectsApi.getAll(featured),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });

export const useProject = (slug: string) =>
    useQuery({
        queryKey: ['project', slug],
        queryFn: () => projectsApi.getBySlug(slug),
        enabled: !!slug,
        staleTime: 10 * 60 * 1000, // 10 minutes cache
    });

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════════════
export const useExperience = () =>
    useQuery({
        queryKey: ['experience'],
        queryFn: experienceApi.getAll,
        staleTime: 10 * 60 * 1000,
    });

// ═══════════════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════════════
export const useSkills = () =>
    useQuery({
        queryKey: ['skills'],
        queryFn: skillsApi.getAll,
        staleTime: 10 * 60 * 1000,
    });

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════
export const useTestimonials = () =>
    useQuery({
        queryKey: ['testimonials'],
        queryFn: testimonialsApi.getAll,
        staleTime: 10 * 60 * 1000,
    });
