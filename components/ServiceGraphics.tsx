"use client";

import { motion } from "framer-motion";

export const LandingPageGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 overflow-hidden relative group">
        {/* Browser Chrome */}
        <div className="h-8 bg-gray-800 flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            <div className="ml-4 flex-1 h-4 bg-gray-900 rounded-full w-full max-w-[200px]"></div>
        </div>
        {/* Content */}
        <div className="p-6 relative">
            <div className="w-3/4 h-4 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded mb-6"></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-gray-800 rounded border border-white/5"></div>
                <div className="h-24 bg-gray-800 rounded border border-white/5"></div>
            </div>
            {/* Lighthouse Score */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute bottom-4 right-4 w-16 h-16 bg-gray-900 rounded-full border-4 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/20"
            >
                <span className="text-green-500 font-mono font-bold text-xl">100</span>
            </motion.div>
        </div>
    </div>
);

export const FormGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-6 flex flex-col justify-center relative overflow-hidden">
        {/* Progress */}
        <div className="flex gap-2 mb-6">
            <div className="h-1 bg-blue-500 flex-1 rounded-full"></div>
            <div className="h-1 bg-blue-500 flex-1 rounded-full"></div>
            <div className="h-1 bg-gray-700 flex-1 rounded-full"></div>
        </div>

        <div className="space-y-3 relative z-10">
            <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                    <div className="h-2 w-12 bg-gray-600 rounded"></div>
                    <div className="h-8 bg-gray-800 border border-blue-500/50 rounded flex items-center px-3 text-xs text-blue-400">
                        John Doe <span className="ml-auto text-green-500">✓</span>
                    </div>
                </div>
                <div className="flex-1 space-y-1">
                    <div className="h-2 w-12 bg-gray-600 rounded"></div>
                    <div className="h-8 bg-gray-800 border border-white/10 rounded"></div>
                </div>
            </div>
            <div className="space-y-1">
                <div className="h-2 w-20 bg-gray-600 rounded"></div>
                <div className="h-8 bg-gray-800 border border-white/10 rounded"></div>
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold mt-2 cursor-pointer shadow-lg shadow-blue-500/20"
            >
                Next Step →
            </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
    </div>
);

export const CodeGraphic = () => (
    <div className="w-full aspect-video bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden font-mono text-xs relative">
        <div className="absolute top-2 right-4 text-xs text-gray-500">tsx</div>
        <div className="p-4 pt-8 text-gray-300 space-y-1">
            <div className="flex"><span className="text-purple-400 mr-2">export</span><span className="text-blue-400 mr-2">async</span><span className="text-yellow-400">function</span></div>
            <div className="flex pl-4"><span className="text-yellow-400">getData</span>() {"{"}</div>
            <div className="flex pl-8"><span className="text-purple-400 mr-2">const</span> data = <span className="text-blue-400 mr-2">await</span> db.</div>
            <div className="flex pl-12"><span className="text-yellow-400">query</span>(<span className="text-green-400">'SELECT *'</span>);</div>
            <div className="flex pl-8"><span className="text-purple-400">return</span> data;</div>
            <div className="flex pl-4">{"}"}</div>
        </div>
        {/* Terminal */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-black/50 border-t border-white/5 flex items-center px-4 gap-2">
            <span className="text-green-500">➜</span>
            <span className="text-gray-400">build success</span>
            <span className="text-gray-600 text-[10px] ml-auto">42ms</span>
        </div>
    </div>
);

export const DashboardGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800/50 border-r border-white/5 p-3 space-y-2">
            <div className="h-6 w-full bg-indigo-500/20 rounded mb-4"></div>
            <div className="h-2 w-3/4 bg-gray-700/50 rounded"></div>
            <div className="h-2 w-1/2 bg-gray-700/50 rounded"></div>
            <div className="h-2 w-2/3 bg-gray-700/50 rounded"></div>
        </div>
        {/* Main */}
        <div className="flex-1 p-4 flex flex-col">
            <div className="flex gap-4 mb-4">
                <div className="flex-1 h-16 bg-gray-800 rounded border border-white/5 p-2">
                    <div className="h-2 w-12 bg-gray-600 rounded mb-2"></div>
                    <div className="text-xl font-bold text-white">$42k</div>
                </div>
                <div className="flex-1 h-16 bg-gray-800 rounded border border-white/5 p-2">
                    <div className="h-2 w-12 bg-gray-600 rounded mb-2"></div>
                    <div className="text-xl font-bold text-green-400">+12%</div>
                </div>
            </div>
            {/* Chart */}
            <div className="flex-1 bg-gray-800/30 rounded border border-white/5 relative flex items-end px-2 pb-2 gap-2">
                <motion.div initial={{ height: "10%" }} whileInView={{ height: "40%" }} className="flex-1 bg-indigo-500/50 rounded-t"></motion.div>
                <motion.div initial={{ height: "10%" }} whileInView={{ height: "70%" }} className="flex-1 bg-indigo-500/50 rounded-t"></motion.div>
                <motion.div initial={{ height: "10%" }} whileInView={{ height: "50%" }} className="flex-1 bg-indigo-500/50 rounded-t"></motion.div>
                <motion.div initial={{ height: "10%" }} whileInView={{ height: "90%" }} className="flex-1 bg-indigo-500 rounded-t shadow-[0_0_15px_rgba(99,102,241,0.5)]"></motion.div>
            </div>
        </div>
    </div>
);

// --- Headless CMS Graphics ---

export const ContentAppGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-900/10"></div>
        <div className="relative z-10 flex items-end gap-4">
            {/* Desktop */}
            <div className="w-32 h-24 bg-gray-800 border-4 border-gray-700 rounded-t-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-pink-500/50 animate-pulse"></div>
                </div>
            </div>
            {/* Tablet */}
            <div className="w-20 h-28 bg-gray-800 border-4 border-gray-700 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded bg-pink-500/50 animate-pulse delay-100"></div>
                </div>
            </div>
            {/* Phone */}
            <div className="w-12 h-20 bg-gray-800 border-4 border-gray-700 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded bg-pink-500/50 animate-pulse delay-200"></div>
                </div>
            </div>
        </div>
        {/* Connection Lines from Cloud */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <div className="w-12 h-8 bg-pink-600 rounded-full blur-md"></div>
        </div>
    </div>
);

export const MigrationGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center gap-8">
        <div className="text-center opacity-50">
            <div className="text-4xl grayscale">🦕</div>
            <div className="text-xs mt-2 font-mono">Legacy</div>
        </div>
        <div className="flex gap-1">
            {[1, 2, 3].map(i => (
                <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 20, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    className="w-2 h-2 rounded-full bg-pink-500"
                />
            ))}
        </div>
        <div className="text-center">
            <div className="text-4xl">🚀</div>
            <div className="text-xs mt-2 font-mono text-pink-500">Sanity</div>
        </div>
    </div>
);

export const VisualEditingGraphic = () => (
    <div className="w-full aspect-video bg-white rounded-xl border border-white/10 relative overflow-hidden flex flex-col pointer-events-none select-none">
        {/* Fake UI */}
        <div className="bg-gray-100 h-8 border-b flex items-center px-4 space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="p-8">
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4 relative group">
                {/* Overlay */}
                <div className="absolute inset-0 border-2 border-pink-500/50 bg-pink-500/10 flex items-center justify-center">
                    <div className="bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Edit Title</div>
                </div>
            </div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
        </div>
        {/* Cursor */}
        <motion.div
            initial={{ x: 100, y: 100 }}
            animate={{ x: 150, y: 80 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
            className="absolute top-0 left-0 w-4 h-4"
        >
            <svg className="w-6 h-6 text-pink-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16L10 4L14.5 16L10 13L5.5 16Z" /></svg>
        </motion.div>
    </div>
);

// --- Headless WordPress Graphics ---

export const WPAdminGraphic = () => (
    <div className="w-full aspect-video bg-[#1d2327] rounded-xl border border-white/10 flex font-sans overflow-hidden">
        {/* Sidebar */}
        <div className="w-12 bg-[#000000] flex flex-col items-center py-4 space-y-4 border-r border-white/5">
            <div className="w-6 h-6 rounded-full bg-gray-700"></div>
            <div className="w-6 h-6 rounded bg-blue-600"></div>
            <div className="w-6 h-6 rounded bg-gray-800"></div>
            <div className="w-6 h-6 rounded bg-gray-800"></div>
        </div>
        {/* Main */}
        <div className="flex-1 p-4">
            <div className="h-8 bg-white/5 rounded w-full mb-4"></div>
            <div className="bg-white p-4 rounded text-black h-32 relative">
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce">
                    HEADLESS MODE
                </div>
                <div className="font-serif text-2xl font-bold mb-2">My Great Post</div>
                <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    </div>
);

export const DatabaseGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 w-24 h-32 border-4 border-blue-500/50 rounded-xl flex flex-col items-center justify-center bg-blue-900/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="w-full h-1 border-b border-blue-500/30"></div>
            <div className="w-full h-1 border-b border-blue-500/30 mt-2"></div>
            <span className="mt-4 font-mono font-bold text-blue-400">SQL</span>
        </div>
        {/* Data Particles */}
        <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    initial={{ top: "50%", left: "50%", opacity: 0 }}
                    animate={{
                        top: `${50 + ((i * 20) % 40 - 20)}%`,
                        left: `${50 + ((i * 30) % 40 - 20)}%`,
                        opacity: [0, 1, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                />
            ))}
        </div>
    </div>
);

// --- Mobile Graphics ---

export const CrossPlatformGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-6 flex justify-center gap-4 relative">
        <div className="w-24 h-full border-4 border-gray-700 bg-black rounded-2xl flex flex-col overflow-hidden relative group">
            <div className="h-4 bg-gray-800 w-full mb-2"></div>
            <div className="flex-1 bg-white p-2">
                <div className="w-full h-8 bg-blue-500 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-gray-500">iOS</div>
        </div>
        <div className="w-24 h-full border-4 border-gray-700 bg-black rounded-xl flex flex-col overflow-hidden relative group">
            <div className="h-4 bg-gray-800 w-full mb-2"></div>
            <div className="flex-1 bg-white p-2">
                <div className="w-full h-8 bg-blue-500 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-gray-500">Android</div>
        </div>
        {/* React Native Logo Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full border border-blue-400/50 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-spin"></div>
        </div>
    </div>
);

export const NativeModuleGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center gap-6 text-3xl">
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>📸</motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>📍</motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🔔</motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}>👆</motion.div>
    </div>
);

// --- Custom Integrations ---

export const ApiMeshGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full text-cyan-500/20" viewBox="0 0 100 100">
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <div className="absolute top-[20%] left-[20%] w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></div>
        <div className="absolute bottom-[20%] left-[50%] w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_blue]"></div>
        <div className="absolute top-[50%] right-[50%] w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center z-10">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>
    </div>
);

export const SyncStatusGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-4 font-mono text-xs flex flex-col justify-center space-y-2">
        <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">User_ID_492</span>
            <span className="text-green-500 flex items-center gap-1">SYNCED <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span></span>
        </div>
        <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Order_#9921</span>
            <span className="text-green-500 flex items-center gap-1">SYNCED <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span></span>
        </div>
        <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Inventory_SKU</span>
            <span className="text-yellow-500 flex items-center gap-1">PENDING... <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span></span>
        </div>
    </div>
);

// --- Custom Software ---

export const SaaSArchitectureGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center">
        <div className="relative w-3/4 h-3/4 bg-grid-white/[0.05] border border-white/5 rounded-lg flex flex-col items-center justify-center">
            <div className="absolute -top-3 bg-gray-900 border border-white/10 px-3 py-1 rounded-full text-[10px] text-purple-400 font-bold">MULTI-TENANT</div>
            <div className="grid grid-cols-3 gap-2 w-3/4">
                <div className="aspect-square bg-purple-500/20 rounded border border-purple-500/30"></div>
                <div className="aspect-square bg-purple-500/20 rounded border border-purple-500/30"></div>
                <div className="aspect-square bg-purple-500/20 rounded border border-purple-500/30"></div>
            </div>
            <div className="mt-4 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
    </div>
);

export const AdminPanelGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-2 overflow-hidden">
        <div className="w-full h-full bg-gray-800 rounded border border-white/5 flex">
            <div className="w-8 h-full border-r border-white/5 flex flex-col gap-2 p-1">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
            </div>
            <div className="flex-1 p-2">
                <div className="flex gap-2 mb-2">
                    <div className="flex-1 h-8 bg-gray-700 rounded"></div>
                    <div className="flex-1 h-8 bg-gray-700 rounded"></div>
                </div>
                <div className="w-full h-16 bg-gray-700/50 rounded border border-white/5"></div>
            </div>
        </div>
    </div>
);

// --- Design Systems ---

export const FigmaSyncGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-purple-500 rounded-lg absolute left-8 opacity-50 rotate-[-10deg]"></div>
        <div className="w-16 h-16 border-2 border-cyan-500 rounded-lg absolute right-8 opacity-50 rotate-[10deg]"></div>

        <div className="z-10 bg-white text-black font-bold p-2 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            Sync
            <span className="w-3 h-3 bg-cyan-500 rounded-full ml-auto"></span>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 60 50 Q 100 20 240 50" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
    </div>
);

export const StorybookGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-2 flex gap-1">
        <div className="w-1/4 h-full bg-white/5 rounded border border-white/5 p-1 space-y-1">
            <div className="h-2 w-3/4 bg-pink-500/50 rounded"></div>
            <div className="h-1 w-1/2 bg-gray-600 rounded"></div>
            <div className="h-1 w-2/3 bg-gray-600 rounded"></div>
        </div>
        <div className="flex-1 h-full bg-black rounded border border-white/5 flex items-center justify-center">
            <button className="px-3 py-1 bg-pink-500 rounded text-[10px] font-bold shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform">Button</button>
        </div>
    </div>
);

// --- Performance ---

export const LighthouseScoreGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center relative">
        <svg className="w-32 h-32 transform -rotate-90">
            <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-800" />
            <motion.circle
                cx="64" cy="64" r="50"
                stroke="#22c55e"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="314"
                strokeDashoffset="314"
                whileInView={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </svg>
        <div className="absolute text-3xl font-bold text-green-500 font-mono">95+</div>
    </div>
);

export const BundleSizeGraphic = () => (
    <div className="w-full aspect-video bg-gray-900 rounded-xl border border-white/10 p-4 flex items-center justify-center">
        <div className="w-full flex flex-col gap-1">
            <div className="flex items-end gap-1 h-48">
                <div className="w-1/2 bg-red-500/30 h-full rounded-t relative group">
                    <span className="absolute bottom-1 left-1 text-[8px] text-red-500">Before</span>
                </div>
                <div className="w-1/2 bg-green-500 h-1/3 rounded-t relative group">
                    <span className="absolute -top-4 w-full text-center text-[10px] text-green-400 font-bold">-60%</span>
                    <span className="absolute bottom-1 left-1 text-[8px] text-white">After</span>
                </div>
            </div>
            <div className="w-full h-px bg-white/20"></div>
        </div>
    </div>
);

