import { motion } from 'framer-motion';

export const LoadingSkeleton = ({ className = '', count = 1 }: { className?: string; count?: number }) => (
    <div className={`space-y-4 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
            <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                className="bg-white/5 rounded-2xl h-32 w-full border border-white/5"
            />
        ))}
    </div>
);

export const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-20">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full"
        />
    </div>
);

export const ErrorDisplay = ({ message, onRetry }: { message?: string; onRetry?: () => void }) => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="p-4 rounded-full bg-red-500/10 text-red-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        </div>
        <p className="text-neutral-400 text-sm mb-4">{message || 'Something went wrong'}</p>
        {onRetry && (
            <button
                onClick={onRetry}
                className="px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold border border-purple-500/20 hover:bg-purple-500/20 transition-all"
            >
                Try Again
            </button>
        )}
    </div>
);

export const EmptyState = ({ message = 'No data available' }: { message?: string }) => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-full bg-white/5 text-neutral-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        </div>
        <p className="text-neutral-500 text-sm">{message}</p>
    </div>
);
