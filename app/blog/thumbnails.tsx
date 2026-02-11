import { motion } from "framer-motion";

export const BuilderThumbnail = () => (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
            {/* Red Nested Hell */}
            <div className="border border-red-500/20 rounded-lg p-2 flex flex-col gap-2 overflow-hidden">
                <div className="border border-red-500/20 rounded p-1 h-full">
                    <div className="border border-red-500/20 rounded p-1 h-full">
                        <div className="border border-red-500/20 rounded p-1 h-full bg-red-900/20"></div>
                    </div>
                </div>
            </div>
            {/* Green Pure Code */}
            <div className="border border-green-500/20 rounded-lg p-2 flex items-center justify-center">
                <div className="w-full h-8 bg-green-500/20 rounded border border-green-500/40"></div>
            </div>
        </div>
    </div>
);

export const ThemeForestThumbnail = () => (
    <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-end p-8 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        {/* Stack */}
        <div className="flex flex-col-reverse gap-1 w-2/3 items-center opacity-80 mb-[-10px]">
            <div className="w-full h-4 bg-gray-700 rounded-sm"></div>
            <div className="w-[90%] h-3 bg-green-800 rounded-sm"></div>
            <div className="w-[85%] h-3 bg-blue-800 rounded-sm"></div>
            <div className="w-[95%] h-3 bg-yellow-800 rounded-sm"></div>
            <div className="w-[80%] h-3 bg-red-800 rounded-sm rotate-3 transform translate-x-2"></div>
            <div className="w-[60%] h-3 bg-purple-800 rounded-sm -rotate-3 transform -translate-x-2"></div>
            <div className="w-[40%] h-3 bg-pink-800 rounded-sm rotate-6 transform translate-x-3 mb-4"></div>
        </div>
    </div>
);

export const RevenueThumbnail = () => (
    <div className="w-full h-full bg-gray-900 flex items-end justify-center p-8 gap-2">
        <div className="w-1/4 h-[80%] bg-green-500/20 border border-green-500/50 rounded-t-sm relative group">
            <div className="absolute bottom-0 w-full h-full bg-green-500/20 animate-pulse"></div>
        </div>
        <div className="w-1/4 h-[60%] bg-green-500/10 border border-green-500/30 rounded-t-sm"></div>
        <div className="w-1/4 h-[40%] bg-yellow-500/10 border border-yellow-500/30 rounded-t-sm"></div>
        <div className="w-1/4 h-[20%] bg-red-500/20 border border-red-500/50 rounded-t-sm"></div>
    </div>
);

export const DefaultThumbnail = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white/10 rounded-full"></div>
    </div>
);
