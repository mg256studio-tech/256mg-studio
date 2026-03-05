import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function Message() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 relative flex flex-col items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20" viewBox="0 0 800 600">
            <path d="M100,300 C200,100 400,100 500,300 S700,500 750,300" fill="none" stroke="#1241a1" strokeDasharray="10,10" strokeWidth="2" />
            <path d="M500,300 C600,150 750,200 650,450 S350,550 250,400" fill="none" stroke="#1241a1" strokeDasharray="8,12" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-3xl w-full mx-auto relative z-10 text-center">
          <div className="relative w-48 h-48 mx-auto mb-8 animate-float">
            <svg className="w-full h-full text-primary drop-shadow-xl transform rotate-12" viewBox="0 0 200 200">
              <path d="M20,100 L180,40 L120,160 L100,110 L20,100 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d="M100,110 L180,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d="M50,103 L120,160" fill="none" opacity="0.5" stroke="currentColor" strokeDasharray="4,4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <div className="absolute top-1/2 left-0 -translate-x-8 -translate-y-4 flex flex-col gap-1 opacity-60">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <div className="w-12 h-0.5 bg-primary rounded-full translate-x-2" />
            </div>
          </div>
          <div className="relative inline-block mb-6">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary relative z-10">Message Received.</h1>
            <div className="absolute -top-6 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl ink-blot rotate-45 z-0" />
            <div className="absolute -bottom-2 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg ink-blot -rotate-12 z-0" />
            <svg className="absolute -right-10 -top-8 w-12 h-12 text-primary opacity-80" viewBox="0 0 100 100">
              <path d="M50,50 Q70,20 80,40 T90,60" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
              <circle cx="90" cy="60" fill="currentColor" r="3" />
              <circle cx="85" cy="30" fill="currentColor" r="2" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl text-primary/80 font-display font-light max-w-lg mx-auto leading-relaxed mb-12">
            Our architects are reviewing your vision. Expect an ink-signed reply within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-8">
              <Link className="wobbly-line-link font-serif text-lg font-bold text-primary group" to="/">
                Return to Homepage
                <svg preserveAspectRatio="none" viewBox="0 0 200 9"><path d="M0,7 C50,9 50,2 100,5 C150,8 150,2 200,6" /></svg>
              </Link>
              <Link className="wobbly-line-link font-serif text-lg font-bold text-primary group" to="/work">
                Explore our work
                <svg preserveAspectRatio="none" viewBox="0 0 200 9"><path d="M0,7 C50,9 50,2 100,5 C150,8 150,2 200,6" /></svg>
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-4 md:-right-24 rotate-6 hidden md:block group hover:rotate-3 transition-transform duration-500 cursor-pointer z-20">
            <div className="polaroid-frame bg-white w-48">
              <div className="w-full h-40 bg-gray-100 overflow-hidden relative border border-gray-200">
                <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
                  <circle cx="30" cy="40" fill="none" r="10" stroke="#1241a1" strokeWidth="1" />
                  <path d="M30,50 L30,80 M15,60 L45,60 M20,80 L40,80" fill="none" stroke="#1241a1" strokeWidth="1" />
                  <circle cx="70" cy="35" fill="none" r="9" stroke="#1241a1" strokeWidth="1" />
                  <path d="M70,44 L70,75 M55,55 L85,55 M60,75 L80,75" fill="none" stroke="#1241a1" strokeWidth="1" />
                </svg>
              </div>
              <div className="mt-3 text-center font-serif italic text-sm text-primary/70">The Architects</div>
              <div className="absolute -top-10 -right-8 w-16 h-16 animate-bounce">
                <svg className="text-primary w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="#fff" r="40" stroke="currentColor" strokeWidth="3" />
                  <circle cx="35" cy="45" fill="currentColor" r="4" />
                  <circle cx="65" cy="45" fill="currentColor" r="4" />
                  <path d="M35,65 Q50,75 65,65" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path d="M85,50 Q95,30 90,20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <circle cx="90" cy="20" fill="currentColor" r="5" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/80 rotate-2 shadow-sm border border-yellow-200/50" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
