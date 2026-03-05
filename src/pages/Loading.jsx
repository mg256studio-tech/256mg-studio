import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 4000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center font-display text-ink selection:bg-primary/20 relative">
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
                <svg className="w-full h-full">
                    <line stroke="#1241a1" strokeDasharray="4 4" strokeWidth="1" x1="20%" x2="20%" y1="0" y2="100%" />
                    <line stroke="#1241a1" strokeDasharray="4 4" strokeWidth="1" x1="80%" x2="80%" y1="0" y2="100%" />
                    <line stroke="#1241a1" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="30%" y2="30%" />
                    <line stroke="#1241a1" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="70%" y2="70%" />
                    <path d="M 100,100 Q 200,50 300,100" fill="none" stroke="#1241a1" strokeWidth="0.5" />
                    <circle cx="50%" cy="50%" fill="none" r="300" stroke="#1241a1" strokeDasharray="2 10" strokeWidth="0.5" />
                    <text className="font-mono text-xs" fill="#1241a1" x="21%" y="50">y-axis: 02</text>
                    <text className="font-mono text-xs" fill="#1241a1" x="75%" y="90%">scale: 1:1</text>
                </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center max-w-xl w-full p-8">
                <div className="text-center mb-12 relative">
                    <h2 className="font-serif text-5xl md:text-6xl text-ink font-bold tracking-[0.15em] uppercase opacity-90 relative inline-block">
                        256MG.STUDIO
                        <span className="absolute -top-4 -right-12 font-hand text-xl text-ink/80 rotate-12 select-none">
                            EST. 2024
                            <svg className="absolute -bottom-1 -left-1 w-full h-2" preserveAspectRatio="none" viewBox="0 0 100 10">
                                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" opacity="0.3" stroke="#0f2c63" strokeWidth="1" />
                            </svg>
                        </span>
                    </h2>
                    <div className="mt-4 w-24 h-[1px] bg-ink/30 mx-auto" />
                </div>
                <div className="relative w-64 h-80 mb-6 flex items-end justify-center">
                    <div className="absolute -bottom-4 -left-10 w-24 h-24 splat transform rotate-12 opacity-60" />
                    <div className="absolute top-10 -right-8 w-16 h-16 splat transform -rotate-45 opacity-40" />
                    <div className="absolute bottom-0 right-10 w-8 h-8 rounded-full bg-ink/10 filter blur-sm" />
                    <div className="absolute left-[-60px] bottom-10 w-24 h-48 transform -rotate-12 opacity-80 pointer-events-none">
                        <svg className="w-full h-full drop-shadow-sm" fill="none" viewBox="0 0 100 200">
                            <path className="hand-drawn-path" d="M30,180 L70,180 L80,100 L50,10 L20,100 Z" fill="#fff" stroke="#1241a1" strokeWidth="2" />
                            <path d="M50,10 L50,80" stroke="#1241a1" strokeLinecap="round" strokeWidth="1.5" />
                            <circle cx="50" cy="85" fill="#f7f5f0" r="4" stroke="#1241a1" strokeWidth="1.5" />
                            <path d="M30,100 Q50,120 70,100" fill="none" stroke="#1241a1" strokeWidth="1" />
                            <path d="M30,180 L30,200 M70,180 L70,200" stroke="#1241a1" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="relative w-40 h-56 z-20">
                        <svg className="absolute inset-0 w-full h-full z-30 pointer-events-none drop-shadow-lg" fill="none" viewBox="0 0 160 220">
                            <rect fill="#fff" height="20" rx="2" stroke="#1241a1" strokeWidth="3" width="50" x="55" y="10" />
                            <line stroke="#1241a1" strokeLinecap="round" strokeWidth="2" x1="60" x2="100" y1="15" y2="15" />
                            <line stroke="#1241a1" strokeLinecap="round" strokeWidth="2" x1="60" x2="100" y1="20" y2="20" />
                            <path d="M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30" fill="none" stroke="#1241a1" strokeLinejoin="round" strokeWidth="3" />
                            <path d="M50,80 Q45,100 45,150" fill="none" stroke="#1241a1" strokeOpacity="0.3" strokeWidth="2" />
                            <rect height="60" rx="2" stroke="#1241a1" strokeDasharray="2 2" strokeOpacity="0.5" strokeWidth="1" transform="rotate(-2 80 130)" width="60" x="50" y="100" />
                            <text fill="#1241a1" fontFamily="Caveat" fontSize="12" opacity="0.6" transform="rotate(-2 80 130)" x="60" y="135">No. 5</text>
                        </svg>
                        <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "path('M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30 Z')" }}>
                            <div className="ink-wave w-full animate-fill-ink relative">
                                <div className="ink-surface" />
                                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-white/30 animate-bubble-rise" style={{ animationDelay: '0.2s' }} />
                                <div className="absolute bottom-8 right-6 w-3 h-3 rounded-full border border-white/20 animate-bubble-rise" style={{ animationDelay: '1.5s' }} />
                                <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 rounded-full border border-white/30 animate-bubble-rise" style={{ animationDelay: '2.8s' }} />
                                <div className="absolute inset-0 ink-texture-overlay bg-black/20 mix-blend-overlay" />
                            </div>
                        </div>
                        <div className="absolute inset-0 z-40 bottle-glass-highlight opacity-30 rounded-b-[30px]" style={{ clipPath: "path('M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30 Z')" }} />
                    </div>
                    <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-ink rounded-full animate-splash" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-[45%] left-[30%] w-2 h-2 bg-ink rounded-full animate-splash" style={{ animationDelay: '3.5s' }} />
                </div>
                <div className="text-center relative z-20">
                    <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-3 tracking-tight animate-pulse">
                        Brewing your experience...
                    </h1>
                    <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-primary/60 text-lg animate-spin" style={{ animationDuration: '3s' }}>autorenew</span>
                        <p className="font-hand text-xl text-primary/70">Collecting the ink.</p>
                    </div>
                    <div className="mt-8 relative w-64 h-3 mx-auto">
                        <div className="absolute inset-0 border-b-2 border-primary/20 border-dashed transform rotate-1" />
                        <div className="absolute left-0 bottom-0 h-[2px] bg-primary" style={{ animation: 'widthAnim 4s ease-in-out infinite' }} />
                        <div className="absolute right-0 -bottom-1 w-[2px] h-2 bg-primary/20" />
                        <div className="absolute left-0 -bottom-1 w-[2px] h-2 bg-primary/20" />
                        <span className="absolute -right-4 -top-4 font-mono text-[10px] text-primary/40">100%</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
                <p className="font-mono text-xs text-primary/30 uppercase tracking-[0.3em]">256mg.studio // loading sequence</p>
            </div>
            <div className="absolute top-20 right-20 w-32 h-32 pointer-events-none opacity-20 animate-scribble hidden md:block">
                <svg className="w-full h-full" fill="none" stroke="#1241a1" viewBox="0 0 100 100">
                    <path d="M10,50 Q30,40 50,50 T90,50 M20,60 Q40,40 60,60 T80,40" strokeWidth="0.5" />
                    <circle cx="80" cy="20" r="5" strokeDasharray="2 2" strokeWidth="0.5" />
                </svg>
            </div>
        </div>
    );
}
