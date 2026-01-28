// components/VideoSplash.tsx - FIXED
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoSplashProps {
    videoSrc: string;
    duration?: number;
    onClose?: () => void;
}

const VideoSplash: React.FC<VideoSplashProps> = ({ videoSrc, duration = 10, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const timerRef = useRef<number | null>(null);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        document.body.style.overflow = 'unset';

        setTimeout(() => {
            onClose?.();
        }, 500);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Try to play video when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Video autoplay failed:', error);
                // If autoplay fails, unmute and try again
                setIsMuted(false);
                videoRef.current?.play();
            });
        }

        // Auto-hide after duration
        timerRef.current = setTimeout(() => {
            handleClose();
        }, duration * 1000);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            document.body.style.overflow = 'unset';
        };
    }, [duration, handleClose]);

    const handleVideoLoaded = useCallback(() => {
        setIsLoading(false);
        // Ensure video plays after loading
        videoRef.current?.play().catch(err => console.error('Play error:', err));
    }, []);

    const handleVideoEnd = useCallback(() => {
        handleClose();
    }, [handleClose]);

    const handleSkip = useCallback(() => {
        handleClose();
    }, [handleClose]);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => !prev);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/5 backdrop-blur-[2px]"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            handleSkip();
                        }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative w-[80vw] h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Loading Spinner - Only shows while video loads */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                                <div className="text-center">
                                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                    <p className="text-white text-sm">Loading video...</p>
                                </div>
                            </div>
                        )}

                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            autoPlay
                            muted={isMuted}
                            playsInline
                            preload="auto"
                            onLoadedData={handleVideoLoaded}
                            onCanPlay={handleVideoLoaded}
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-contain"
                            style={{ opacity: isLoading ? 0 : 1 }}
                        />

                        {/* Mute/Unmute Button */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={toggleMute}
                            className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full transition-all border border-white/20 hover:border-white/40 flex items-center justify-center text-xl z-20"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? '🔇' : '🔊'}
                        </motion.button>

                        {/* Skip Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            onClick={handleSkip}
                            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold transition-all border border-white/20 hover:border-white/40 z-20"
                        >
                            Skip →
                        </motion.button>

                        {/* Progress Bar */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 z-20"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: duration, ease: 'linear' }}
                        />

                        {/* Branding Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium bg-black/30 backdrop-blur-md px-4 py-2 rounded-full z-20"
                        >
                            HR Ignite Innovative India Pvt. Ltd.
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VideoSplash;
