import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function CaseStudy() {
    return (
        <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
            {/* Hero */}
            <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 items-center">
                    <div className="flex flex-col gap-6 relative z-10">
                        <div className="flex items-center gap-2 text-primary/70 text-sm font-semibold tracking-wider uppercase">
                            <span className="w-8 h-[1px] bg-primary" /><span>Case Study 01</span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl font-medium leading-[1] text-primary">Lumina<br />Architect</h1>
                        <p className="text-lg md:text-xl text-primary/80 max-w-xl leading-relaxed font-light">
                            A complete brand identity and website redesign for a premium architectural firm. From sketch to digital permanence.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <span className="hand-drawn-border-sm px-4 py-1 text-sm font-bold text-primary">Brand Identity</span>
                            <span className="hand-drawn-border-sm px-4 py-1 text-sm font-bold text-primary">Web Design</span>
                            <span className="hand-drawn-border-sm px-4 py-1 text-sm font-bold text-primary">Development</span>
                        </div>
                    </div>
                </div>
            </header>
            {/* Hero Image */}
            <section className="px-6 -mt-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="wobbly-box aspect-[16/9] overflow-hidden bg-white relative shadow-xl">
                        <img alt="Lumina Architect website hero" className="w-full h-full object-cover grayscale contrast-125 opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJUse_Qxxm0AF4nGlrInnRg5Pi6CQs5pZH1gIBiYYWfgFGelzwe43x5IPfTbdlC5bs90Qd27n3p8ltsg0k9R8fMPS-lVfj67tJ5EckY1HVWwZ1p63lPXnftwsziTs4h_F2iuQH7XTqH59mIawzWKrQ90687TOvYz0eifh2vmXrvRUvel9jUlqPHVtSYinmXL8lFtYvYZ8s-OyPdAFS8t3J9I0rQ1Rcz7Q93GawO5SvEqNBqySNNACPMFJbG6W3XkIi2YUMwIOVwet" />
                        <div className="absolute bottom-4 right-4 font-hand text-[12px] text-primary bg-paper/90 px-2 py-1 border border-primary/20 rotate-1 shadow-sm">Ref: LUM-001</div>
                    </div>
                </div>
            </section>
            {/* Challenge */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-2 text-primary/50 text-sm font-bold uppercase tracking-widest mb-4">
                            <span className="w-6 h-[1px] bg-primary/30" /><span>The Challenge</span>
                        </div>
                        <h2 className="font-serif text-4xl text-primary mb-6">A legacy firm in need of a digital voice.</h2>
                        <p className="text-primary/80 leading-relaxed font-light text-lg">
                            Lumina Architect had 30 years of exceptional work but their digital presence didn't reflect their craftsmanship. Their website was a relic — slow, cluttered, and invisible to search engines. They needed a complete digital transformation that honored their heritage while projecting them into the future.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="hand-drawn-border p-8 bg-white/40 sketch-shadow">
                            <h3 className="font-serif text-2xl text-primary mb-4 border-b border-primary/10 pb-2">Project Specs</h3>
                            <ul className="space-y-4 font-hand text-lg text-primary">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1.5">schedule</span><span><strong>Timeline:</strong> 12 Weeks</span></li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1.5">groups</span><span><strong>Team:</strong> 4 Architects</span></li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1.5">category</span><span><strong>Scope:</strong> Brand + Web + Motion</span></li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1.5">monitoring</span><span><strong>Result:</strong> +340% Organic Traffic</span></li>
                            </ul>
                        </div>
                        <div className="absolute -top-4 -right-4 font-hand text-primary/50 text-sm rotate-6">fig. 2.1</div>
                    </div>
                </div>
            </section>
            {/* Process */}
            <section className="py-24 px-6 bg-primary/5 border-y border-primary/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-5xl text-primary">The Process</h2>
                        <p className="font-hand text-xl text-primary/60 mt-2">From rough sketch to polished pixels</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { phase: '01', title: 'Discovery & Research', desc: 'Deep-dived into the architectural industry, studied competitors, interviewed stakeholders, and mapped the user journey.', icon: 'search' },
                            { phase: '02', title: 'Design & Prototyping', desc: 'Created mood boards, wireframes, and high-fidelity prototypes. Iterated through 3 major design revisions.', icon: 'edit' },
                            { phase: '03', title: 'Build & Launch', desc: 'Developed a blazing-fast JAMstack site with custom animations, CMS integration, and comprehensive SEO.', icon: 'rocket_launch' },
                        ].map(item => (
                            <div key={item.phase} className="relative">
                                <div className="absolute -top-3 left-4 bg-paper px-2 font-mono text-xs text-primary/60 border border-primary/20">PHASE {item.phase}</div>
                                <div className="hand-drawn-border p-8 bg-white/40 h-full flex flex-col gap-4">
                                    <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
                                    <h3 className="font-serif text-2xl text-primary font-bold">{item.title}</h3>
                                    <p className="text-primary/70 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Results */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-serif text-5xl text-primary mb-16">The Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { metric: '+340%', label: 'Organic Traffic' },
                            { metric: '2.1s', label: 'Load Time' },
                            { metric: '+180%', label: 'Lead Generation' },
                            { metric: '98', label: 'Lighthouse Score' },
                        ].map(r => (
                            <div key={r.label} className="hand-drawn-border p-6 bg-white/40">
                                <div className="font-serif text-4xl text-primary font-bold">{r.metric}</div>
                                <div className="font-hand text-primary/60 mt-2">{r.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="wobbly-box p-12 md:p-16 bg-white/50">
                        <h2 className="font-serif text-4xl text-primary mb-4">Ready to start your story?</h2>
                        <p className="text-primary/70 mb-8 text-lg">Every great project begins with a conversation. Let's sketch out your vision together.</p>
                        <Link to="/contact" className="bg-primary text-white px-10 py-4 text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 inline-block">Start Your Project</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
