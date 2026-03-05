import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 relative flex flex-col items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-32 text-primary/10" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,80 C200,40 400,100 600,60 C800,20 1000,90 1200,50 L1200,120 L0,120 Z" fill="currentColor" />
            <path className="animate-drift" d="M0,90 C150,110 350,70 600,100 C850,130 1050,80 1200,100" fill="none" stroke="currentColor" strokeDasharray="8,8" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="relative w-full max-w-lg h-80 mx-auto mb-2 flex items-end justify-center">
            <div className="absolute top-0 right-1/3 animate-bob" style={{ animationDelay: '1s' }}>
              <svg className="text-primary/80 fill-none stroke-current stroke-2" height="80" viewBox="0 0 100 80" width="100">
                <path d="M10,50 Q0,50 0,40 Q0,20 20,20 Q30,0 50,0 Q70,0 80,20 Q100,20 100,40 Q100,50 90,50" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20,60 Q15,60 15,55" strokeDasharray="2,2" strokeWidth="1" />
                <path d="M80,60 Q85,60 85,55" strokeDasharray="2,2" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3 h-4 bg-primary rounded-full rounded-t-none animate-bounce origin-top" />
            </div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full flex justify-center items-center gap-12 pointer-events-none opacity-10 md:opacity-100 md:relative md:top-auto md:left-auto md:translate-x-0 md:h-full md:items-start z-0">
              <span className="font-display font-extrabold text-[12rem] md:text-[14rem] leading-none text-primary/5 tracking-tighter" style={{ fontFamily: "'Courier New', monospace" }}>404</span>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 z-10">
              <svg className="w-full h-full drop-shadow-xl text-primary stroke-current fill-none stroke-2" viewBox="0 0 100 200">
                <path className="fill-paper" d="M10,180 Q30,160 50,170 Q70,180 90,175 L95,190 L5,190 Z" fill="white" />
                <path d="M25,170 L35,50 L65,50 L75,170" strokeLinecap="round" strokeWidth="2.5" />
                <path d="M33,140 L67,140" strokeWidth="1.5" />
                <path d="M30,110 L70,110" strokeWidth="1.5" />
                <path d="M28,80 L72,80" strokeWidth="1.5" />
                <rect className="fill-paper" fill="white" height="20" strokeWidth="2" width="40" x="30" y="30" />
                <path d="M30,30 L50,10 L70,30" strokeWidth="2" />
                <line strokeWidth="2" x1="50" x2="50" y1="10" y2="0" />
                <path d="M70,40 L95,25" opacity="0.6" strokeDasharray="2,4" strokeWidth="1" />
                <path d="M30,40 L5,25" opacity="0.6" strokeDasharray="2,4" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute bottom-8 w-full flex justify-center overflow-hidden">
              <svg className="text-primary opacity-60" height="20" viewBox="0 0 300 20" width="300">
                <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <path d="M20,18 Q45,8 70,18 T120,18 T170,18" fill="none" opacity="0.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="relative z-20 -mt-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 relative inline-block">
              Lost at sea.
              <span className="absolute -top-6 -right-8 w-16 h-16 bg-primary/10 rounded-full ink-blot rotate-12 pointer-events-none" />
            </h1>
            <p className="text-lg md:text-xl text-primary/80 font-display font-light max-w-lg mx-auto leading-relaxed mb-10">
              It seems you've drifted beyond our digital charts. The page you are looking for has been erased or never drawn.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative">
              <Link to="/" className="group relative block w-48 transform transition-transform hover:-rotate-2">
                <div className="absolute inset-0 border-2 border-primary rounded-sm transform -skew-x-6 bg-paper shadow-[4px_4px_0px_0px_rgba(18,65,161,0.1)] group-hover:shadow-[6px_6px_0px_0px_rgba(18,65,161,0.15)] transition-shadow" />
                <div className="relative py-3 px-4 text-center">
                  <span className="font-serif font-bold text-primary flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm rotate-180">arrow_right_alt</span>
                    Back to Safety
                  </span>
                </div>
              </Link>
              <div className="hidden md:block w-px h-16 bg-primary/20 self-start mt-10" />
              <Link to="/work" className="group relative block w-48 transform transition-transform hover:rotate-2">
                <div className="absolute inset-0 border-2 border-primary rounded-sm transform skew-x-6 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(18,65,161,0.2)] group-hover:shadow-[6px_6px_0px_0px_rgba(18,65,161,0.25)] transition-shadow" />
                <div className="relative py-3 px-4 text-center">
                  <span className="font-serif font-bold text-white flex items-center justify-center gap-2">
                    Explore the Studio
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-4 right-10 md:right-20 animate-bob hidden md:block" style={{ animationDuration: '4s' }}>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full text-primary drop-shadow-md" viewBox="0 0 100 100">
                <path d="M20,75 Q50,85 80,75 L75,85 Q50,95 25,85 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <line stroke="currentColor" strokeWidth="1" x1="50" x2="50" y1="75" y2="85" />
                <line stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" x1="30" x2="10" y1="70" y2="85" />
                <circle cx="50" cy="65" fill="white" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M55,62 L70,58 L72,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <circle cx="73" cy="55" fill="currentColor" r="1.5" />
                <circle cx="50" cy="55" fill="white" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="53" cy="55" fill="currentColor" r="1" />
                <path d="M44,52 L56,52 L50,45 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-2 left-0 w-full text-center text-xs font-serif italic text-primary/60 transform -rotate-6">"Land ho?"</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
