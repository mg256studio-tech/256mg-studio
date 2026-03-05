import Footer from '../components/layout/Footer';

const TeamMember = ({ name, role, icon, animDuration, reverse }) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-40 h-40 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
      <div className={`absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_${animDuration}s_linear_infinite${reverse ? '_reverse' : ''}]`} />
      <div className="absolute inset-2 rounded-full border-2 border-primary bg-white flex items-center justify-center overflow-hidden">
        <span className="material-symbols-outlined text-8xl text-primary mt-4">{icon}</span>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-paper border border-primary p-1 rounded-full">
        <span className="material-symbols-outlined text-xl text-primary">{role.badgeIcon}</span>
      </div>
    </div>
    <h3 className="font-serif text-xl font-bold text-primary">{name}</h3>
    <p className="font-serif italic text-primary/70 mt-1 text-sm">{role.title}</p>
  </div>
);

const ProcessStep = ({ title, desc, icon, align }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16`}>
    {align === 'right' && <div className="flex-1 hidden md:block order-1" />}
    {align === 'left' && (
      <div className="flex-1 text-center md:text-right order-2 md:order-1">
        <h3 className="font-serif text-3xl font-bold text-primary">{title}</h3>
        <p className="text-primary/70 mt-2">{desc}</p>
      </div>
    )}
    <div className={`w-24 h-24 shrink-0 bg-paper hand-drawn-border flex items-center justify-center ${align === 'left' ? 'order-1 md:order-2' : 'order-1 md:order-2'} shadow-lg relative`}>
      <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm -z-10" />
      <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
    </div>
    {align === 'right' && (
      <div className="flex-1 text-center md:text-left order-2 md:order-3">
        <h3 className="font-serif text-3xl font-bold text-primary">{title}</h3>
        <p className="text-primary/70 mt-2">{desc}</p>
      </div>
    )}
    {align === 'left' && <div className="flex-1 hidden md:block order-3" />}
  </div>
);

export default function Philosophy() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      {/* Header */}
      <header className="pt-32 pb-20 px-6 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-primary/70 text-sm font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-[1px] bg-primary" />
            <span>The Philosophy</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-medium text-primary mb-6 leading-tight">
            We are the <span className="italic">architects</span> of the digital page.
          </h1>
          <p className="text-lg md:text-xl text-primary/80 font-light max-w-2xl mx-auto leading-relaxed">
            More than a studio, we are a collective of thinkers, drawers, and code poets. We believe in the power of craft, the beauty of restraint, and the magic of midnight ink.
          </p>
          <div className="absolute top-0 right-[20%] w-32 h-32 bg-primary/5 rounded-full filter blur-2xl ink-splat -z-10" />
          <div className="absolute bottom-10 left-[20%] w-24 h-24 bg-primary/5 rounded-full filter blur-xl ink-splat -z-10" />
        </div>
      </header>

      {/* Isometric Studio Illustration */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white hand-drawn-border p-4 md:p-8 sketch-shadow overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(#0f2c6308_1px,transparent_1px),linear-gradient(90deg,#0f2c6308_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative w-full h-full flex items-end justify-between px-10 pb-10">
              <div className="relative w-1/4 h-3/4 border-2 border-primary rounded-t-full flex flex-col items-center justify-end bg-primary/5">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20" />
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20" />
                <div className="w-16 h-12 border-2 border-primary rounded-b-lg mb-2 relative z-10 bg-white" />
                <div className="absolute bottom-14 w-24 h-32 flex justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary absolute -left-4 top-0 rotate-[-15deg]">eco</span>
                  <span className="material-symbols-outlined text-7xl text-primary absolute left-2 -top-6">eco</span>
                  <span className="material-symbols-outlined text-6xl text-primary absolute right-0 top-2 rotate-[15deg]">eco</span>
                </div>
              </div>
              <div className="relative w-1/2 h-1/2 flex gap-4 items-end justify-center">
                <div className="w-32 h-24 border-2 border-primary skew-x-12 bg-white relative">
                  <span className="absolute -top-8 left-4 material-symbols-outlined text-4xl text-primary">monitor</span>
                  <span className="absolute -top-3 right-2 material-symbols-outlined text-2xl text-primary">keyboard</span>
                </div>
                <div className="w-32 h-24 border-2 border-primary skew-x-12 bg-white relative hidden md:block">
                  <span className="absolute -top-8 left-4 material-symbols-outlined text-4xl text-primary">laptop_mac</span>
                  <div className="absolute -top-12 -right-4 rotate-12">
                    <span className="material-symbols-outlined text-3xl text-primary">local_cafe</span>
                  </div>
                </div>
              </div>
              <div className="relative w-1/6 h-2/3 flex flex-col items-center justify-end">
                <div className="w-full h-2 border-b-2 border-primary mb-12 relative">
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 material-symbols-outlined text-5xl text-primary">coffee_maker</span>
                </div>
                <div className="w-full h-32 border-2 border-primary bg-white flex items-center justify-center relative">
                  <div className="w-full absolute top-2 border-t border-primary/20" />
                  <div className="w-full absolute top-12 border-t border-primary/20" />
                  <span className="font-serif italic text-xs absolute bottom-2">Brewing Ideas</span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 left-8 bg-paper px-2 py-1 border border-primary text-xs font-bold uppercase rotate-[-2deg]">Creative Corner</div>
            <div className="absolute top-12 right-12 bg-paper px-2 py-1 border border-primary text-xs font-bold uppercase rotate-[3deg]">Fuel Station</div>
          </div>
          <div className="text-center mt-4 font-serif italic text-primary/60 text-sm">Fig. 1: The physical manifestation of our digital dreams.</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-primary mb-16 text-center">The Architects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Elena Rostova" role={{ title: 'Lead Architect of Pixels', badgeIcon: 'edit' }} icon="face" animDuration="10" />
            <TeamMember name="Marcus Chen" role={{ title: 'Keeper of the Codebase', badgeIcon: 'terminal' }} icon="face_3" animDuration="12" reverse />
            <TeamMember name="Sarah Jenkins" role={{ title: 'Color Theory Sorceress', badgeIcon: 'palette' }} icon="face_6" animDuration="15" />
            <TeamMember name="David Wright" role={{ title: 'Illustrator in Chief', badgeIcon: 'draw' }} icon="face_2" animDuration="11" reverse />
          </div>
        </div>
      </section>

      {/* From Sketch to Screen */}
      <section className="py-24 px-6 bg-primary/5 border-y border-primary/10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl text-primary">From Sketch to Screen</h2>
            <p className="text-primary/60 mt-4 font-serif italic">The winding path of creation</p>
          </div>
          <div className="relative">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-[200px] hidden md:block z-0 pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 100 800">
              <path className="opacity-30" d="M50,0 C50,100 10,150 50,200 C90,250 50,300 50,400 C50,500 10,550 50,600 C90,650 50,700 50,800" stroke="#0f2c63" strokeDasharray="8 8" strokeWidth="2" />
            </svg>
            <div className="space-y-24 relative z-10">
              <ProcessStep title="Drafting" desc="Pencil hits paper. No bad ideas, just rough lines and raw concepts." icon="edit" align="left" />
              <ProcessStep title="Caffeinating" desc="Crucial step. The beans fuel the dreams. Refining the messy sketches." icon="local_cafe" align="right" />
              <ProcessStep title="Inking" desc="Committing to the lines. Digital translation begins here." icon="ink_pen" align="left" />
              <ProcessStep title="Publishing" desc="The sanctuary goes live. The ink dries on the screen." icon="rocket_launch" align="right" />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Journal */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-white ripped-edge-top z-10" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl text-primary">Studio Journal</h2>
            <p className="text-primary/60 mt-4 font-serif italic">Glimpses into the creative psyche</p>
          </div>
          <div className="relative max-w-5xl mx-auto aspect-[1.4/1] bg-paper shadow-2xl rounded-sm overflow-visible flex hand-drawn-border">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 journal-spine z-20 border-x border-primary/5" />
            <div className="absolute top-0 left-[65%] w-8 h-[110%] bg-primary shadow-lg z-30 transition-transform hover:translate-y-2 cursor-pointer"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%)' }} />
            <div className="w-1/2 h-full bg-white/40 p-10 relative overflow-visible border-r border-primary/10">
              <div className="h-full w-full flex flex-col justify-between">
                <div className="relative flex-1">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-[15rem] text-primary">architecture</span>
                  </div>
                  <div className="absolute top-1/2 left-4 z-40">
                    <div className="scrap-paper p-4 rotate-[-4deg] relative border border-primary/5">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 tape opacity-60 rotate-2" />
                      <p className="font-hand text-xl font-bold text-marginalia tracking-wider italic">Craft &gt; Chaos</p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-hand text-lg text-primary/80 leading-tight">
                    "The intersection of brutalist architecture and fluid ink strokes. Exploring how static grids can breathe."
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full bg-white/40 p-12 relative flex flex-col gap-10 overflow-visible">
              <div className="absolute top-8 right-8 font-hand text-sm text-primary/40 rotate-6">Oct 24, 2023</div>
              <article className="relative">
                <h3 className="font-serif text-2xl text-primary mb-3">On Midnight Ink</h3>
                <p className="font-hand text-lg text-primary/90 leading-relaxed">
                  There is a specific weight to the pen after midnight. The lines become less calculated, more honest. We're redesigning the core studio flow tonight, stripping back the digital noise until only the structure remains.
                </p>
              </article>
              <div className="w-1/3 h-[1px] bg-primary/10 self-center" />
              <article>
                <h3 className="font-serif text-2xl text-primary mb-3">The Coffee Ritual</h3>
                <p className="font-hand text-lg text-primary/90 leading-relaxed">
                  Spent the morning at the 'Fuel Station'. Elena noticed that the steam from her cup mirrored the curve of the new branding we've been struggling with. Sometimes the best solutions are staring you in the face, hidden in plain sight.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white ripped-edge-bottom z-10" />
      </section>

      {/* Visit Us */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="hand-drawn-border p-12 text-center relative bg-white/60 backdrop-blur-sm sketch-shadow">
            <div className="absolute -top-10 right-10 transform rotate-12">
              <span className="material-symbols-outlined text-6xl text-primary">cruelty_free</span>
            </div>
            <h2 className="text-4xl font-serif text-primary mb-4">Come visit us</h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
            <div className="font-serif text-lg text-primary/80 space-y-2 mb-8">
              <p>123 Creative Avenue, Suite 400</p>
              <p>New York, NY 10012</p>
              <p className="italic text-sm mt-4">(The coffee is always brewing)</p>
            </div>
            <a className="group relative inline-block px-8 py-3 font-bold text-primary transition-transform active:scale-95" href="https://maps.google.com" target="_blank" rel="noreferrer">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-primary/20" />
              <span className="relative w-full h-full border-2 border-primary rounded-lg block translate-y-0 group-hover:-translate-y-1 transition-transform bg-paper flex gap-2 items-center px-4 py-2">
                <span>Get Directions</span>
                <span className="material-symbols-outlined text-lg">map</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
