import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function Work() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="font-serif text-5xl md:text-7xl text-primary mb-4 relative inline-block">
            Project Archives
            <svg className="absolute -bottom-2 w-full left-0 h-3 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h1>
          <p className="font-hand text-2xl text-primary/70 mt-2">Classified Design Files</p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto mt-12 min-h-[800px]">
          {/* Folder: Aura */}
          <div className="absolute top-12 left-4 md:left-12 w-full md:w-[90%] transition-transform hover:-translate-y-2 duration-300 z-10">
            <div className="relative">
              <div className="folder-tab bg-folder-beige h-10 w-48 absolute -top-10 left-0 border-t border-l border-r border-primary/20 rounded-t-md flex items-end justify-center pb-1">
                <span className="font-hand text-xl font-bold text-primary transform -rotate-1">Project: Aura</span>
              </div>
              <div className="folder-body bg-folder-beige h-24 w-full rounded-r-md rounded-bl-md border border-primary/10 relative p-6 flex items-center justify-between shadow-md">
                <div className="font-serif text-primary/40 italic text-sm">Archived: 2022</div>
                <div className="w-full h-px border-b border-dashed border-primary/20 mx-4" />
                <span className="material-symbols-outlined text-primary/30">lock</span>
              </div>
            </div>
          </div>
          {/* Folder: Velvet */}
          <div className="absolute top-24 left-2 md:left-8 w-full md:w-[92%] transition-transform hover:-translate-y-2 duration-300 z-20">
            <div className="relative">
              <div className="folder-tab bg-[#f1efe9] h-10 w-48 absolute -top-10 left-8 border-t border-l border-r border-primary/20 rounded-t-md flex items-end justify-center pb-1 shadow-sm">
                <span className="font-hand text-xl font-bold text-primary transform rotate-1">Project: Velvet</span>
              </div>
              <div className="folder-body bg-[#f1efe9] h-24 w-full rounded-r-md rounded-bl-md border border-primary/10 relative p-6 flex items-center justify-between shadow-md">
                <div className="font-serif text-primary/40 italic text-sm">Archived: 2023</div>
                <div className="w-full h-px border-b border-dashed border-primary/20 mx-4" />
                <span className="material-symbols-outlined text-primary/30">lock</span>
              </div>
            </div>
          </div>
          {/* Folder: Lumina (expanded) */}
          <div className="absolute top-40 left-0 w-full md:w-[95%] z-30 transform md:-rotate-1">
            <div className="relative">
              <div className="folder-tab bg-[#fbf8f3] h-12 w-56 absolute -top-12 left-16 border-t border-l border-r border-primary/20 rounded-t-md flex items-end justify-center pb-2 shadow-sm z-0">
                <span className="font-hand text-2xl font-bold text-primary">Project: Lumina</span>
              </div>
              <div className="folder-body bg-[#fbf8f3] min-h-[600px] w-full rounded-r-md rounded-bl-md border border-primary/20 relative p-4 md:p-10 shadow-xl flex flex-col md:flex-row gap-8 overflow-hidden">
                <div className="flex-1 relative z-10 transform rotate-1">
                  <div className="absolute -top-3 -left-3 z-20"><div className="paper-clip" /></div>
                  <div className="bg-white border-2 border-primary/20 p-6 shadow-sm h-full blueprint-grid relative">
                    <div className="absolute top-2 right-2 font-mono text-[10px] text-primary/50 border border-primary/20 px-1">FIG 1.0</div>
                    <h3 className="font-serif text-xl text-primary font-bold mb-4 border-b border-primary/10 pb-2">Interface Blueprint</h3>
                    <svg className="w-full h-auto text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 300 400">
                      <rect height="40" opacity="0.6" rx="2" strokeDasharray="5 5" width="280" x="10" y="10" />
                      <circle cx="30" cy="30" r="10" />
                      <line x1="250" x2="280" y1="25" y2="25" />
                      <line x1="250" x2="280" y1="35" y2="35" />
                      <rect height="120" rx="2" width="280" x="10" y="60" />
                      <path d="M10 140 Q 50 120 100 140 T 200 140 T 290 140" strokeOpacity="0.3" />
                      <rect fill="currentColor" fillOpacity="0.1" height="10" rx="1" width="100" x="30" y="80" />
                      <rect height="8" rx="1" strokeOpacity="0.3" width="80" x="30" y="100" />
                      <rect height="80" rx="2" strokeDasharray="2 3" width="86" x="10" y="200" />
                      <rect height="80" rx="2" strokeDasharray="2 3" width="86" x="106" y="200" />
                      <rect height="80" rx="2" strokeDasharray="2 3" width="86" x="202" y="200" />
                      <path d="M220 120 Q 250 100 270 80" stroke="#d63031" strokeWidth="1" />
                      <text fill="#d63031" fontFamily="Caveat" fontSize="14" stroke="none" x="230" y="70">Hero visual</text>
                    </svg>
                    <div className="absolute bottom-4 left-4 font-hand text-primary/60 text-sm">Scale 1:1</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-6 relative z-10">
                  <div className="bg-[#fffdf5] border border-primary/10 p-6 shadow-sm transform -rotate-1 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c4baa8] shadow-inner" />
                    <h4 className="font-serif text-lg text-primary border-b-2 border-primary/10 pb-1 mb-3">Technical Specs</h4>
                    <ul className="font-hand text-lg text-primary space-y-2 leading-tight">
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span><span>Primary Font: Playfair Display</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span><span>Grid System: 12-col fluid</span></li>
                      <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm mt-1">check_circle</span><span>Palette: Deep Navy &amp; Paper</span></li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-dashed border-primary/20">
                      <p className="font-mono text-xs text-primary/50 uppercase tracking-widest">Status: Production Ready</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 pb-8 shadow-md polaroid-shadow transform rotate-3 w-48 self-center md:self-end hover:scale-105 transition-transform duration-300 relative">
                    <div className="aspect-square bg-gray-100 overflow-hidden mb-2 border border-gray-200">
                      <svg className="w-full h-full text-primary opacity-80" viewBox="0 0 100 100">
                        <rect fill="#f0f0f0" height="100" width="100" />
                        <circle cx="50" cy="40" fill="none" r="20" stroke="currentColor" strokeWidth="1" />
                        <path d="M20,90 Q50,60 80,90" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="font-hand text-center text-primary font-bold text-lg">Final_V2.jpg</div>
                    <div className="absolute -top-4 -right-4 text-red-ink font-hand text-xl rotate-12 opacity-80 font-bold">Approved!</div>
                  </div>
                  <Link to="/case-study" className="self-end mt-auto font-bold text-primary border-b-2 border-primary hover:text-primary/70 transition-colors pb-1 font-serif text-lg flex items-center gap-2 group">
                    View Full Case Study
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Brass fastener */}
          <div className="absolute -bottom-8 left-10 md:left-32 w-20 h-20 rounded-full shadow-2xl z-40 brass-texture flex items-center justify-center opacity-90 pointer-events-none hidden md:flex">
            <div className="w-16 h-16 rounded-full border border-white/30 mix-blend-overlay" />
            <div className="absolute top-2 left-4 w-6 h-6 bg-white/40 rounded-full blur-sm" />
          </div>
          {/* Blueprint board behind */}
          <div className="absolute -top-10 -right-4 md:-right-10 w-48 h-64 bg-[#1241a1] z-0 transform rotate-6 shadow-lg border-2 border-white/10 hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
              <div className="border border-white/30" />
              <div className="border border-white/30" />
              <div className="border border-white/30" />
            </div>
            <div className="absolute bottom-4 right-4 text-white/50 font-mono text-xs rotate-90 origin-bottom-right">Blueprint Set A4</div>
          </div>
        </div>
      </main>
      <Footer variant="project" />
    </div>
  );
}
