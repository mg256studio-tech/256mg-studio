import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      <main className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-16 relative">
          <div className="absolute -top-10 -right-2 font-hand text-2xl text-primary/60 rotate-[-5deg] border-2 border-primary/20 px-3 py-1 rounded-sm">Sheet No. 042</div>
          <h1 className="font-serif text-5xl md:text-7xl text-primary mb-4 relative inline-block">
            Project Specification
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary/30" preserveAspectRatio="none" viewBox="0 0 300 15">
              <path d="M5,10 Q150,15 295,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </h1>
          <p className="font-hand text-2xl text-primary/70 mt-4 max-w-2xl">
            Let's sketch out the blueprint for your next digital masterpiece. Fill in the details below.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Ruler decoration */}
          <div className="hidden xl:block absolute -left-20 top-0 h-full w-16 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 60 800" width="60">
              <rect fill="#e0dac9" height="100%" stroke="#1241a1" strokeWidth="1" width="40" x="10" y="0" />
              <defs>
                <pattern height="40" id="rulerTicks" patternUnits="userSpaceOnUse" width="60" x="0" y="0">
                  <line stroke="#1241a1" strokeWidth="1" x1="10" x2="25" y1="10" y2="10" />
                  <line stroke="#1241a1" strokeWidth="1" x1="10" x2="20" y1="20" y2="20" />
                  <line stroke="#1241a1" strokeWidth="1" x1="10" x2="25" y1="30" y2="30" />
                  <line stroke="#1241a1" strokeWidth="1" x1="10" x2="30" y1="40" y2="40" />
                </pattern>
              </defs>
              <rect fill="url(#rulerTicks)" height="100%" width="60" x="0" y="0" />
            </svg>
          </div>
          {/* Main form area */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Scope of Works */}
            <section className="relative">
              <h2 className="font-serif text-2xl text-primary mb-6 border-b border-primary/20 pb-2 inline-block">01. Scope of Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['UI/UX Design', 'Brand Identity', 'Full-Stack Development', 'eCommerce', 'Motion & Interaction', 'Consultancy'].map(item => (
                  <label key={item} className="flex items-center gap-4 cursor-pointer group">
                    <input className="wobbly-checkbox text-primary focus:ring-0" type="checkbox" />
                    <span className="font-display text-lg text-primary font-medium group-hover:underline decoration-wavy underline-offset-4 decoration-primary/30">{item}</span>
                  </label>
                ))}
              </div>
            </section>
            {/* Timeline */}
            <section>
              <h2 className="font-serif text-2xl text-primary mb-8 border-b border-primary/20 pb-2 inline-block">02. Estimated Timeline</h2>
              <div className="relative pt-8 pb-12 px-4">
                <div className="timeline-line w-full absolute top-1/2 left-0 -translate-y-1/2 transform rotate-1" />
                <div className="flex justify-between relative z-10 w-full">
                  <div className="flex flex-col items-center gap-2 -mt-8">
                    <span className="font-hand text-2xl text-primary">ASAP</span>
                    <div className="w-4 h-4 border-2 border-primary rounded-full bg-paper rotate-3">
                      <span className="material-symbols-outlined text-base -ml-[2px] -mt-[2px]">close</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="w-4 h-4 border-2 border-primary rounded-full bg-paper -rotate-2" />
                    <span className="font-hand text-xl text-primary/60">1-2 Mo.</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 -mt-6">
                    <span className="font-hand text-xl text-primary/60">3-4 Mo.</span>
                    <div className="w-4 h-4 border-2 border-primary rounded-full bg-paper rotate-1" />
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="w-4 h-4 border-2 border-primary rounded-full bg-paper -rotate-3" />
                    <span className="font-hand text-xl text-primary/60">6+ Mo.</span>
                  </div>
                </div>
              </div>
            </section>
            {/* Budget */}
            <section>
              <h2 className="font-serif text-2xl text-primary mb-6 border-b border-primary/20 pb-2 inline-block">03. Budgetary Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="budget-box p-6 cursor-pointer relative bg-white/40">
                  <span className="font-hand text-3xl text-primary font-bold block mb-2">$5k - 15k</span>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-primary/80">Starter</span>
                  <p className="text-xs text-primary/60 mt-2 font-display">MVP or Single Page Site</p>
                </div>
                <div className="budget-box p-6 cursor-pointer relative bg-white/40 ring-1 ring-primary ring-offset-2 ring-offset-[#f7f5f0]">
                  <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] uppercase font-bold px-2 py-0.5 transform rotate-2">High Intent</div>
                  <span className="font-hand text-3xl text-primary font-bold block mb-2">$15k - 40k</span>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-primary/80">Standard</span>
                  <p className="text-xs text-primary/60 mt-2 font-display">Full Product or Brand Overhaul</p>
                </div>
                <div className="budget-box p-6 cursor-pointer relative bg-white/40">
                  <span className="font-hand text-3xl text-primary font-bold block mb-2">$40k +</span>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-primary/80">Enterprise</span>
                  <p className="text-xs text-primary/60 mt-2 font-display">Full Transformation &amp; Scale</p>
                </div>
              </div>
            </section>
            {/* Project Blueprint */}
            <section className="relative mt-4">
              <h2 className="font-serif text-2xl text-primary mb-6 border-b border-primary/20 pb-2 inline-block">04. Project Blueprint</h2>
              <div className="relative w-full">
                <div className="absolute -right-8 -top-12 w-32 md:w-48 z-20 pointer-events-none pencil-sketch hidden md:block">
                  <svg className="w-full h-full transform rotate-[25deg]" fill="none" viewBox="0 0 200 20">
                    <path d="M190 5 L200 10 L190 15" fill="#f0e6d2" stroke="none" />
                    <path d="M190 5 L170 5 L170 15 L190 15 Z" fill="#d4b483" stroke="#8d6e63" strokeWidth="1" />
                    <rect fill="#1241a1" height="10" stroke="#0f2c63" strokeWidth="1" width="150" x="20" y="5" />
                    <path d="M20 5 L15 5 L15 15 L20 15 Z" fill="#ccc" stroke="#999" strokeWidth="1" />
                    <path d="M15 5 C10 5 5 10 15 15" fill="#e57373" stroke="none" />
                  </svg>
                </div>
                <div className="hand-drawn-border bg-white/30 p-1 relative min-h-[300px]">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent border-none p-6 text-lg font-hand text-primary placeholder-primary/40 focus:ring-0 resize-y"
                    placeholder={"Describe your vision here...\nTarget Audience:\nKey Objectives:\nExisting Assets:"} />
                  <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(#1241a1 1px, transparent 1px)', backgroundSize: '100% 2rem', top: '1.5rem' }} />
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-8">
                  <div className="flex-1">
                    <label className="font-serif text-lg text-primary block mb-1">Your Name</label>
                    <input className="w-full hand-drawn-input px-0 py-2" placeholder="John Architect" type="text" />
                  </div>
                  <div className="flex-1">
                    <label className="font-serif text-lg text-primary block mb-1">Email Coordinates</label>
                    <input className="w-full hand-drawn-input px-0 py-2" placeholder="john@studio.com" type="email" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Sidebar - Estimate Memo */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="sticky top-32">
              <div className="relative bg-[#fffdf5] p-6 shadow-xl transform rotate-1 border border-gray-200">
                <div className="tape-strip" />
                <h3 className="font-display font-bold uppercase tracking-widest text-sm text-primary/60 border-b border-primary/10 pb-4 mb-4 text-center">Estimate Memo</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start font-hand text-xl text-primary">
                    <span>Draft Date:</span><span>Oct 24, 2024</span>
                  </div>
                  <div className="h-px bg-primary/10 w-full my-2" />
                  <div className="font-hand text-xl text-primary/80">
                    <p className="mb-2">Selected Items:</p>
                    <ul className="list-disc list-inside pl-2 space-y-1 text-lg">
                      <li>UI/UX Design</li>
                      <li>Full Transformation</li>
                    </ul>
                  </div>
                  <div className="h-px bg-primary/10 w-full my-2" />
                  <div className="flex justify-between items-center font-serif font-bold text-primary text-lg">
                    <span>Est. Tier:</span><span>Standard</span>
                  </div>
                </div>
                <div className="flex justify-center mt-8 mb-4">
                  <Link to="/message" className="wax-seal w-32 h-32 hover:scale-105 transition-transform duration-300 group relative flex items-center justify-center">
                    <span className="text-center text-sm leading-tight tracking-wide font-bold uppercase">Submit<br />For<br />Review</span>
                    <div className="absolute inset-0 border border-white/20 rounded-[inherit] scale-90" />
                  </Link>
                </div>
                <div className="text-center font-mono text-[10px] text-primary/40 mt-4 uppercase tracking-widest">Ref: 256-MG-WKSHT</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
