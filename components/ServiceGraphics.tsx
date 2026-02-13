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
