import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Home, ArrowLeft, Sun, Zap } from 'lucide-react';

interface UnderDevelopmentProps {
    pageName?: string;
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({ pageName = "This Page" }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Animated Solar Panel Icon */}
                    <motion.div
                        className="mx-auto mb-8 relative"
                        style={{ width: '200px', height: '200px' }}
                    >
                        {/* Sun */}
                        <motion.div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2"
                            animate={{
                                y: [0, -10, 0],
                                rotate: 360,
                            }}
                            transition={{
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            }}
                        >
                            <Sun className="w-16 h-16 text-yellow-400" strokeWidth={2} />
                        </motion.div>

                        {/* Solar Panel */}
                        <motion.div
                            className="absolute top-20 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-2xl">
                                {/* Panel Body */}
                                <rect
                                    x="10"
                                    y="10"
                                    width="100"
                                    height="60"
                                    fill="#1e3a8a"
                                    stroke="#60a5fa"
                                    strokeWidth="2"
                                    rx="4"
                                />
                                {/* Solar Cells */}
                                {[...Array(12)].map((_, i) => {
                                    const row = Math.floor(i / 4);
                                    const col = i % 4;
                                    return (
                                        <motion.rect
                                            key={i}
                                            x={15 + col * 24}
                                            y={15 + row * 18}
                                            width="20"
                                            height="15"
                                            fill="#3b82f6"
                                            stroke="#60a5fa"
                                            strokeWidth="1"
                                            rx="2"
                                            animate={{
                                                fill: ['#3b82f6', '#60a5fa', '#3b82f6'],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                            }}
                                        />
                                    );
                                })}
                            </svg>
                        </motion.div>

                        {/* Energy Beams */}
                        <svg className="absolute inset-0" width="200" height="200">
                            {[0, 1, 2].map((i) => (
                                <motion.line
                                    key={i}
                                    x1="100"
                                    y1="32"
                                    x2="100"
                                    y2="90"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </svg>

                        {/* Construction Tools Icon */}
                        <motion.div
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                            animate={{
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            <div className="relative">
                                <Wrench className="w-12 h-12 text-orange-400" strokeWidth={2} />
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 mb-4"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            style={{
                                backgroundSize: '200% 200%',
                            }}
                        >
                            Under Development
                        </motion.h1>

                        <motion.div
                            className="flex items-center justify-center gap-2 mb-6"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                {pageName} is Being Powered Up!
                            </h2>
                            <Zap className="w-6 h-6 text-yellow-400" />
                        </motion.div>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Our team is working hard to bring you an amazing solar-powered experience.
                            Like solar panels charging in the sun, we're energizing this page with great features!
                        </p>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="max-w-md mx-auto mb-8"
                        >
                            <div className="bg-gray-800/50 rounded-full h-3 overflow-hidden border border-green-500/30">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-400 relative"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '25%' }}
                                    transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{ x: ['-100%', '200%'] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 0.5,
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <p className="text-green-400 text-sm font-semibold mt-2">25% Complete</p>
                        </motion.div>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-wrap justify-center gap-3 mb-10"
                        >
                            {['Design', 'Development', 'Testing', 'Launch'].map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + idx * 0.1 }}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${idx < 1
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                        : 'bg-gray-700/50 text-gray-400 border border-gray-600/50'
                                        }`}
                                >
                                    {idx < 1 ? '✓ ' : '⏳ '}
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link to="/">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                                >
                                    <Home className="w-5 h-5" />
                                    <span>Back to Home</span>
                                </motion.button>
                            </Link>

                            <motion.button
                                onClick={() => window.history.back()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-full border-2 border-gray-600 hover:border-gray-500 shadow-lg transition-all duration-300"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Go Back</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default UnderDevelopment;
