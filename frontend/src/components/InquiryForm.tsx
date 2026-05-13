import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { inquiriesApi } from '../services/api';
import { Container, Section } from './shared/Layout';

const PROJECT_TYPES = ['Mobile App', 'Web Application', 'Full Stack', 'Consulting', 'Architecture Review', 'Other'];
const BUDGET_RANGES = ['Under $5k', '$5k - $15k', '$15k - $50k', '$50k+', "Let's Discuss"];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budgetRange: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            await inquiriesApi.submit(formData);
            setStatus('success');
            setFormData({ name: '', email: '', projectType: '', budgetRange: '', message: '' });
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <Section id="contact">
            <Container>
                <div className="glass-card p-8 md:p-16 relative overflow-hidden border border-white/5">
                    {/* Background Blob */}
                    <div className="bg-purple-600/10 blur-[120px] w-[500px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
                                Let's build something <br />
                                <span className="text-purple-400">extraordinary.</span>
                            </h2>
                            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                                Tell me about your project, and I'll get back to you within 24 hours with a strategy outline.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-16"
                                >
                                    <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-400 mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Inquiry Submitted! 🚀</h3>
                                    <p className="text-neutral-400 text-sm mb-8">I'll review your project details and respond within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-semibold hover:bg-white/10 transition-all"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Name & Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="inquiry-name" className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Full Name</label>
                                            <input
                                                id="inquiry-name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="inquiry-email" className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Email Address</label>
                                            <input
                                                id="inquiry-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@company.com"
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Type & Budget Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="inquiry-project-type" className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Project Type</label>
                                            <select
                                                id="inquiry-project-type"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-neutral-900">Select type...</option>
                                                {PROJECT_TYPES.map(type => (
                                                    <option key={type} value={type} className="bg-neutral-900">{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="inquiry-budget" className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Budget Range</label>
                                            <select
                                                id="inquiry-budget"
                                                name="budgetRange"
                                                value={formData.budgetRange}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-neutral-900">Select range...</option>
                                                {BUDGET_RANGES.map(range => (
                                                    <option key={range} value={range} className="bg-neutral-900">{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="inquiry-message" className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Project Details</label>
                                        <textarea
                                            id="inquiry-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project, timeline, and any technical requirements..."
                                            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                                        >
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="group flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-bold text-sm shadow-xl shadow-white/5 hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 size={18} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Inquiry
                                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default InquiryForm;
