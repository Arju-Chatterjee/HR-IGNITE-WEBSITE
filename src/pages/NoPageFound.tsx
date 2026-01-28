import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NoPageFound: React.FC = () => {
    const [showSpark, setShowSpark] = useState(false);

    useEffect(() => {
        // Trigger spark animation every 2 seconds
        const interval = setInterval(() => {
            setShowSpark(true);
            setTimeout(() => setShowSpark(false), 400);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-orange-50 to-amber-50 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="relative" style={{ height: '700px' }}>

                    {/* Sun - Top Left */}
                    <motion.div
                        className="absolute top-0 left-20"
                        style={{ width: '140px', height: '140px' }}
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        }}
                    >
                        {/* Sun Core with Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500"
                            animate={{
                                boxShadow: [
                                    '0 0 40px 15px rgba(251, 191, 36, 0.6)',
                                    '0 0 80px 30px rgba(251, 191, 36, 0.9)',
                                    '0 0 40px 15px rgba(251, 191, 36, 0.6)',
                                ],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Sun Rays */}
                        {[...Array(16)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-gradient-to-t from-yellow-400 to-transparent rounded-full"
                                style={{
                                    width: '4px',
                                    height: '35px',
                                    top: '50%',
                                    left: '50%',
                                    transformOrigin: '2px 2px',
                                    transform: `rotate(${i * 22.5}deg) translateY(-70px)`,
                                }}
                                animate={{
                                    opacity: [0.6, 1, 0.6],
                                    scaleY: [0.7, 1.3, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.08,
                                }}
                            />
                        ))}

                        {/* Sun Face */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-4xl">☀️</div>
                        </div>
                    </motion.div>

                    {/* Energy Beam from Sun to Solar Panel */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                        <defs>
                            <linearGradient id="sunBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.8)" />
                                <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
                            </linearGradient>

                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Multiple Sun Beams */}
                        {[0, 1, 2].map((i) => (
                            <motion.line
                                key={i}
                                x1="160"
                                y1="70"
                                x2="220"
                                y2="220"
                                stroke="url(#sunBeam)"
                                strokeWidth="3"
                                opacity="0.6"
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                    strokeWidth: [2, 4, 2],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </svg>

                    {/* Solar Panel - Mid Left */}
                    <motion.div
                        className="absolute left-16 top-44"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Solar Panel Stand */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-20 bg-gradient-to-b from-gray-600 to-gray-800" />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-700 rounded" />

                            {/* Solar Panel */}
                            <motion.div
                                className="relative w-72 h-48 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-xl shadow-2xl border-4 border-gray-700 transform -rotate-12"
                                style={{
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.4), inset 0 0 20px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                {/* Solar Cells Grid */}
                                <div className="absolute inset-3 grid grid-cols-6 grid-rows-4 gap-1">
                                    {[...Array(24)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded border border-blue-400/50 relative overflow-hidden"
                                            animate={{
                                                backgroundColor: ['#3b82f6', '#2563eb', '#1d4ed8', '#3b82f6'],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                            }}
                                        >
                                            {/* Cell Reflection */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Energy Collection Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-yellow-300/20 to-yellow-400/0 rounded-lg"
                                    animate={{
                                        opacity: [0, 0.5, 0],
                                        y: [-50, 200],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Wire Connection with Cut and Sparks */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <filter id="wireShadow">
                                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                            </filter>
                        </defs>

                        {/* Wire Path - First Part (Solar to Cut Point) */}
                        <motion.path
                            d="M 340 290 Q 400 280, 480 300"
                            stroke="#1f2937"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#wireShadow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                        />

                        {/* Energy Flow Particles - First Wire */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={`flow1-${i}`}
                                r="5"
                                fill="#fbbf24"
                                filter="url(#glow)"
                                initial={{ offsetDistance: '0%', opacity: 0 }}
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                    opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.25 + 1.5,
                                    ease: 'linear',
                                }}
                                style={{
                                    offsetPath: 'path("M 340 290 Q 400 280, 480 300")',
                                }}
                            />
                        ))}

                        {/* Cut Point Circle */}
                        <motion.circle
                            cx="480"
                            cy="300"
                            r="8"
                            fill="#dc2626"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                        />

                        {/* Wire Cut - Separated Parts */}
                        <motion.path
                            d="M 470 295 L 475 300"
                            stroke="#1f2937"
                            strokeWidth="6"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        />
                        <motion.path
                            d="M 485 300 L 490 305"
                            stroke="#1f2937"
                            strokeWidth="6"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        />

                        {/* Spark Effect at Cut Point */}
                        {showSpark && (
                            <g>
                                {/* Main Spark Flash */}
                                <motion.circle
                                    cx="480"
                                    cy="300"
                                    r="30"
                                    fill="#fbbf24"
                                    opacity="0.8"
                                    animate={{
                                        scale: [0, 2.5, 0],
                                        opacity: [0.9, 0.3, 0]
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />

                                {/* Electric Arcs/Lightning Bolts */}
                                {[...Array(12)].map((_, i) => {
                                    const angle = (i * 30 * Math.PI) / 180;
                                    const length = 30 + Math.random() * 20;
                                    const endX = 480 + Math.cos(angle) * length;
                                    const endY = 300 + Math.sin(angle) * length;
                                    const midX = 480 + Math.cos(angle) * (length * 0.5) + (Math.random() - 0.5) * 15;
                                    const midY = 300 + Math.sin(angle) * (length * 0.5) + (Math.random() - 0.5) * 15;

                                    return (
                                        <motion.path
                                            key={i}
                                            d={`M 480 300 L ${midX} ${midY} L ${endX} ${endY}`}
                                            stroke={i % 2 === 0 ? "#fbbf24" : "#fb923c"}
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                            filter="url(#glow)"
                                            initial={{ pathLength: 0, opacity: 1 }}
                                            animate={{
                                                pathLength: 1,
                                                opacity: [1, 0.8, 0],
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    );
                                })}

                                {/* Spark Particles */}
                                {[...Array(20)].map((_, i) => {
                                    const angle = Math.random() * Math.PI * 2;
                                    const distance = 40 + Math.random() * 30;
                                    const endX = 480 + Math.cos(angle) * distance;
                                    const endY = 300 + Math.sin(angle) * distance;

                                    return (
                                        <motion.circle
                                            key={`spark-${i}`}
                                            cx="480"
                                            cy="300"
                                            r={2 + Math.random() * 3}
                                            fill={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#fb923c" : "#ffffff"}
                                            initial={{ cx: 480, cy: 300, opacity: 1 }}
                                            animate={{
                                                cx: endX,
                                                cy: endY,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.4 + Math.random() * 0.2,
                                                ease: "easeOut"
                                            }}
                                        />
                                    );
                                })}
                            </g>
                        )}

                        {/* Wire Path - Second Part (Cut Point to House) - Disconnected */}
                        <motion.path
                            d="M 490 305 Q 550 320, 600 300"
                            stroke="#1f2937"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#wireShadow)"
                            opacity="0.7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </svg>

                    {/* House - Center (moved up slightly) */}
                    <motion.div
                        className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
                    >
                        <div className="relative w-64 h-64">
                            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                                {/* House Shadow */}
                                <ellipse cx="100" cy="190" rx="80" ry="10" fill="rgba(0,0,0,0.2)" />

                                {/* House Body */}
                                <rect x="40" y="90" width="120" height="100" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="3" rx="2" />

                                {/* Roof */}
                                <motion.polygon
                                    points="20,90 100,30 180,90"
                                    fill="#6d28d9"
                                    stroke="#5b21b6"
                                    strokeWidth="3"
                                    animate={{
                                        fill: ['#6d28d9', '#7c3aed', '#6d28d9'],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                {/* Chimney */}
                                <rect x="130" y="50" width="20" height="40" fill="#5b21b6" stroke="#4c1d95" strokeWidth="2" />

                                {/* Door */}
                                <rect x="85" y="140" width="30" height="50" fill="#4c1d95" rx="2" />
                                <circle cx="110" cy="165" r="2" fill="#fbbf24" />

                                {/* Windows - Flickering due to power issue */}
                                <motion.rect
                                    x="50"
                                    y="110"
                                    width="25"
                                    height="20"
                                    fill="#fbbf24"
                                    opacity="0.9"
                                    animate={{
                                        opacity: showSpark ? [0.9, 0.2, 0.9] : [0.5, 0.9, 0.5],
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                />
                                <line x1="62.5" y1="110" x2="62.5" y2="130" stroke="#6d28d9" strokeWidth="2" />
                                <line x1="50" y1="120" x2="75" y2="120" stroke="#6d28d9" strokeWidth="2" />

                                <motion.rect
                                    x="125"
                                    y="110"
                                    width="25"
                                    height="20"
                                    fill="#fbbf24"
                                    opacity="0.9"
                                    animate={{
                                        opacity: showSpark ? [0.9, 0.2, 0.9] : [0.5, 0.9, 0.5],
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                />
                                <line x1="137.5" y1="110" x2="137.5" y2="130" stroke="#6d28d9" strokeWidth="2" />
                                <line x1="125" y1="120" x2="150" y2="120" stroke="#6d28d9" strokeWidth="2" />

                                {/* Power Cable Connection Point */}
                                <motion.circle
                                    cx="40"
                                    cy="120"
                                    r="5"
                                    fill="#1f2937"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    animate={{
                                        stroke: showSpark ? "#dc2626" : "#1f2937",
                                    }}
                                />
                            </svg>

                            {/* "No Power" Indicator - Fixed positioning below house */}
                            <motion.div
                                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                ⚠️ No Power
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 404 Message - Bottom Center (moved down and separated from house) */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-8xl md:text-9xl font-black mb-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                            style={{
                                textShadow: '0 0 40px rgba(239, 68, 68, 0.4)',
                                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
                            }}
                            animate={{
                                textShadow: [
                                    '0 0 40px rgba(239, 68, 68, 0.4)',
                                    '0 0 60px rgba(239, 68, 68, 0.7)',
                                    '0 0 40px rgba(239, 68, 68, 0.4)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            404
                        </motion.h1>

                        <motion.div
                            animate={{
                                y: showSpark ? [0, -3, 0] : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
                                <motion.span
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    ⚡
                                </motion.span>
                                <span>Power Line Disconnected!</span>
                                <motion.span
                                    animate={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    ⚡
                                </motion.span>
                            </h2>

                            <p className="text-base md:text-xl text-gray-700 mb-1 font-semibold">
                                Oops! The solar connection has been disrupted.
                            </p>
                            <p className="text-sm md:text-lg text-gray-600 mb-6">
                                Our wire got short-circuited and we couldn't power this page.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-500 hover:from-green-600 hover:via-emerald-700 hover:to-green-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-2xl transition-all duration-300 text-base md:text-lg border-2 border-green-400"
                                style={{
                                    boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                                }}
                            >
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="text-xl md:text-2xl"
                                >
                                    🔌
                                </motion.span>
                                <span>Reconnect to Homepage</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NoPageFound;
