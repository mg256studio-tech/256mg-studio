import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const ServiceBlueprint = ({ number, label, title, subtitle, children, aside, processSteps, ctaText }) => (
  <section className="pt-16 mt-16 pb-20 px-6 max-w-7xl mx-auto">
    <header className="mb-20">
      <div className="flex items-center gap-2 text-primary/70 text-sm font-semibold tracking-wider uppercase mb-4">
        <span className="w-8 h-[1px] bg-primary" /><span>{label} {number}</span>
      </div>
      <h2 className="font-serif text-6xl md:text-8xl font-medium text-primary leading-tight">{title}</h2>
      <p className="font-hand text-2xl md:text-3xl text-primary/80 mt-2 max-w-2xl">{subtitle}</p>
    </header>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <section className="lg:col-span-8">{children}</section>
      <aside className="lg:col-span-4 space-y-12">{aside}</aside>
    </div>
    {processSteps && (
      <section className="mt-32 relative py-16">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-primary/10 -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 mb-6 flex items-center justify-center bg-paper border-2 border-primary rounded-sm ${i % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[2deg]'} group-hover:rotate-0 transition-transform`}>
                {step.svg || <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>}
              </div>
              <h4 className="font-serif text-2xl text-primary font-bold">{step.title}</h4>
              <p className="font-hand text-primary/70 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )}
    <section className="mt-32">
      <div className="wobbly-box p-12 md:p-20 text-center bg-white/50 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full" />
        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">{ctaText.heading}</h2>
          <p className="max-w-xl mx-auto text-primary/70 mb-10 text-lg">{ctaText.desc}</p>
          <Link to="/contact" className="bg-primary text-white px-10 py-4 text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 inline-block">
            {ctaText.button}
          </Link>
        </div>
      </div>
    </section>
  </section>
);

const ToolBox = ({ label, tools, stack, stackLabel, refCode, refDate }) => (
  <>
    <div className="hand-drawn-border p-8 bg-white/30 relative">
      <div className="tape-strip absolute -top-3 left-10 px-4 py-1 font-hand text-sm text-primary">{label}</div>
      <ul className="space-y-6">
        {tools.map((t, i) => (
          <li key={i} className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-primary/20 rounded-full">
              <span className="material-symbols-outlined text-primary">{t.icon}</span>
            </div>
            <span className="font-hand text-xl">{t.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 pt-8 border-t border-dashed border-primary/20">
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">{stackLabel}</h4>
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-display text-sm font-medium">
          {stack.map((s, i) => (
            <span key={i}><span className="hover:text-primary transition-colors">{s}</span>{i < stack.length - 1 && <span className="text-primary/20 ml-4">•</span>}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-6 border-l-2 border-primary/10">
      <p className="font-hand text-primary/50 text-sm">{refCode}</p>
      <p className="font-hand text-primary/50 text-sm">{refDate}</p>
    </div>
  </>
);

export default function Services() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      {/* Service 1: UI/UX Design */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-2 text-primary/70 text-sm font-semibold tracking-wider uppercase mb-4">
            <span className="w-8 h-[1px] bg-primary" /><span>Service Blueprint 01</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-medium text-primary leading-tight">UI/UX Design</h1>
          <p className="font-hand text-2xl md:text-3xl text-primary/80 mt-2 max-w-2xl">Building digital experiences with human intent.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-8">
            <div className="relative w-full aspect-[4/5] md:aspect-video bg-white/40 hand-drawn-border p-8 md:p-12 overflow-visible">
              <div className="absolute top-4 left-6 font-hand text-primary/40 text-sm uppercase">Draft: Mobile Interface_v2</div>
              <div className="absolute top-4 right-6 font-hand text-primary/40 text-sm">Scale: NTS</div>
              <div className="w-64 h-[450px] mx-auto border-2 border-primary rounded-3xl relative p-4 sketch-ui bg-white/80 rotate-1">
                <div className="w-full h-8 flex justify-between items-center mb-6 px-2">
                  <div className="w-4 h-4 rounded-full border border-primary" />
                  <div className="flex gap-1"><div className="w-3 h-1 bg-primary/30 rounded-full" /><div className="w-3 h-1 bg-primary/30 rounded-full" /></div>
                </div>
                <div className="w-full h-40 border border-dashed border-primary mb-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/40 text-4xl">image</span>
                </div>
                <div className="space-y-3 px-2 mb-8">
                  <div className="w-3/4 h-2 bg-primary/20 rounded-full" />
                  <div className="w-full h-2 bg-primary/20 rounded-full" />
                  <div className="w-1/2 h-2 bg-primary/20 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-4 px-2">
                  <div className="h-16 border border-primary/20 rounded-lg" />
                  <div className="h-16 border border-primary/20 rounded-lg" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-primary/40 rounded-full" />
              </div>
            </div>
            <div className="mt-12 space-y-6">
              <h3 className="font-serif text-3xl text-primary italic">The philosophy of the interface.</h3>
              <p className="text-lg text-primary/80 leading-relaxed font-light max-w-2xl">Our approach to UI/UX isn't about following the latest trends. It's about architectural integrity. We treat every pixel like a structural element, ensuring that the visual aesthetic serves the functional intent of the human user.</p>
            </div>
          </section>
          <aside className="lg:col-span-4 space-y-12">
            <ToolBox label="TOOLS OF THE CRAFT" tools={[{ icon: 'edit', label: 'Fountain Pen (Ideation)' }, { icon: 'architecture', label: 'Compass (Precision)' }, { icon: 'straighten', label: 'Ruler (Structure)' }]}
              stack={['Figma', 'React', 'Tailwind', 'Webflow', 'Framermotion']} stackLabel="Tech Stack" refCode="Ref. UI-449-B" refDate="Revised: Oct 2024" />
          </aside>
        </div>
        {/* Process steps */}
        <section className="mt-32 relative py-16">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-primary/10 -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Discovery', desc: 'Magnifying the intent', svg: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="1.5" /><line strokeWidth="1.5" x1="21" x2="16.65" y1="21" y2="16.65" /></svg> },
              { title: 'Schematics', desc: 'Blueprint wireframing', svg: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z" strokeDasharray="2 2" strokeWidth="1.5" /><path d="M3 12h18M12 3v18" opacity="0.3" /><rect height="6" rx="1" strokeWidth="1.5" width="10" x="7" y="9" /></svg> },
              { title: 'Refinement', desc: 'Ink and final polish', svg: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18" strokeWidth="1.5" /></svg> },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 mb-6 flex items-center justify-center bg-paper border-2 border-primary rounded-sm ${i % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[2deg]'} group-hover:rotate-0 transition-transform`}>{s.svg}</div>
                <h4 className="font-serif text-2xl text-primary font-bold">{s.title}</h4>
                <p className="font-hand text-primary/70 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-32">
          <div className="wobbly-box p-12 md:p-20 text-center bg-white/50 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full" />
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Start your blueprint.</h2>
              <p className="max-w-xl mx-auto text-primary/70 mb-10 text-lg">Ready to build a digital experience with intentionality? Let's draft the future of your product together.</p>
              <Link to="/contact" className="bg-primary text-white px-10 py-4 text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 inline-block">Let's Build</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Service 2: Product Strategy */}
      <ServiceBlueprint number="02" label="Strategic Navigation" title="Product Strategy" subtitle="Charting the course from vision to market reality."
        aside={<ToolBox label="STRATEGIC TOOLS" tools={[{ icon: 'flare', label: 'Telescope (Vision)' }, { icon: 'explore', label: 'Compass (Orientation)' }, { icon: 'change_history', label: 'Drafting Triangle (Precision)' }]}
          stack={['Research', 'Analysis', 'Vision', 'Roadmap']} stackLabel="Strategy Stack" refCode="Doc. STR-882-MAP" refDate="Last Survey: Nov 2024" />}
        processSteps={[{ icon: 'search', title: 'Survey', desc: 'Magnifying the market' }, { icon: 'architecture', title: 'Plotting', desc: 'Pencil and ruler roadmap' }, { icon: 'flag', title: 'Execution', desc: 'Planting the flag' }]}
        ctaText={{ heading: 'Chart your course.', desc: "Don't set sail without a map. Let our team of master strategists help you navigate the complex waters of product development.", button: 'Consult Our Strategists' }}>
        <div className="relative w-full aspect-[4/5] md:aspect-video bg-white/40 hand-drawn-border p-4 md:p-8 overflow-hidden">
          <div className="absolute top-4 left-6 font-hand text-primary/40 text-sm uppercase">Survey: Regional Market Map_v4</div>
          <div className="absolute top-4 right-6 font-hand text-primary/40 text-sm">Coordinates: 42.3° N, 71.0° W</div>
          <div className="relative z-10 w-full h-full">
            <svg className="w-full h-full" fill="none" viewBox="0 0 800 450">
              <path d="M100,350 C150,300 250,400 350,250 C450,100 550,200 650,100" stroke="#1241a1" strokeDasharray="8 6" strokeWidth="2.5" />
              <g transform="translate(60, 340)"><text className="font-hand text-lg" fill="#1241a1" x="10" y="55">Idea Island</text></g>
              <g transform="translate(320, 240)"><text className="font-hand text-lg" fill="#1241a1" x="-10" y="50">Valley of Validation</text></g>
              <g transform="translate(630, 60)"><path d="M0,40 L30,0 L60,40 Z" fill="none" stroke="#1241a1" strokeWidth="2" /><text className="font-hand text-lg" fill="#1241a1" x="10" y="60">Market Peak</text></g>
            </svg>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h3 className="font-serif text-3xl text-primary italic">The cartography of success.</h3>
          <p className="text-lg text-primary/80 leading-relaxed font-light max-w-2xl">We don't just guess where your product should go. We survey the terrain, analyze the currents, and plot a course that avoids the reefs of market apathy.</p>
        </div>
      </ServiceBlueprint>

      {/* Service 3: Full-Stack Development */}
      <ServiceBlueprint number="03" label="System Blueprint" title="Full-Stack Development" subtitle="Building scalable digital foundations with surgical precision."
        aside={<ToolBox label="ENGINEERING TOOLS" tools={[{ icon: 'terminal', label: 'Terminal (Execution)' }, { icon: 'data_object', label: 'Data Object (Structure)' }, { icon: 'speed', label: 'Speedometer (Performance)' }]}
          stack={['Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker']} stackLabel="Engineering Stack" refCode="Doc. DEV-321-SYS" refDate="Deployed: Dec 2024" />}
        processSteps={[{ icon: 'foundation', title: 'Foundation', desc: 'Setting the core structure' }, { icon: 'layers', title: 'Layering', desc: 'Building each stratum' }, { icon: 'rocket_launch', title: 'Launch', desc: 'Deploying to production' }]}
        ctaText={{ heading: 'Engineer your future.', desc: 'A digital product is only as strong as its deepest layer. Let us build the architecture that powers your vision.', button: 'Start Engineering' }}>
        <div className="relative w-full aspect-[4/5] md:aspect-video bg-white/40 hand-drawn-border p-8 md:p-12 overflow-visible flex items-center justify-center">
          <div className="absolute top-4 left-6 font-hand text-primary/40 text-sm uppercase">Draft: System_Arch_v4.0</div>
          <div className="absolute top-4 right-6 font-hand text-primary/40 text-sm">Scale: Logarithmic</div>
          <div className="relative w-full max-w-md h-[400px] flex flex-col-reverse gap-2 items-center">
            {['Infrastructure', 'Database', 'API Layers', 'Frontend UI'].map((layer, i) => (
              <div key={layer} className={`${['w-full', 'w-5/6', 'w-4/6', 'w-3/6'][i]} h-20 border-2 border-primary bg-white/${[60, 70, 80, 90][i]} relative isometric-structure flex items-center justify-center`}>
                <span className="font-serif text-primary font-bold">{layer}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h3 className="font-serif text-3xl text-primary italic">The engineering of elegance.</h3>
          <p className="text-lg text-primary/80 leading-relaxed font-light max-w-2xl">We engineer full-stack solutions where the backend architecture breathes in sync with the frontend interface. Every line of code is a structural beam.</p>
        </div>
      </ServiceBlueprint>

      <Footer />
    </div>
  );
}
