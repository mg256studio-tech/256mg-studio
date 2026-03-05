import Footer from '../components/layout/Footer';

export default function Journal() {
  return (
    <div className="bg-drafting-table font-display text-ink min-h-screen overflow-x-hidden">
      <main className="max-w-7xl mx-auto diary-container py-12 pt-28 px-4 md:px-12">
        <div className="diary-book bg-paper relative flex flex-col lg:flex-row min-h-[850px] overflow-hidden">
          {/* Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center diary-spine">
            <div className="stitch h-full opacity-20" />
            <div className="stitch h-full opacity-20" />
          </div>
          {/* Left page */}
          <div className="flex-1 p-8 md:p-16 border-r border-black/5 relative z-10 overflow-hidden">
            <div className="relative h-full flex flex-col">
              <div className="mb-4">
                <span className="font-hand text-lg opacity-60">Vol. 04 — Creative Concepts</span>
              </div>
              <div className="relative flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 rotate-3">
                    <span className="material-symbols-outlined text-[12rem] text-primary/80">architecture</span>
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <span className="material-symbols-outlined text-[15rem] text-primary/40 font-thin">grid_view</span>
                    </div>
                  </div>
                  {/* Polaroid */}
                  <div className="absolute top-8 -right-4 w-36 p-2 pb-6 bg-white shadow-md rotate-6 z-30 polaroid">
                    <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-primary/40">landscape</span>
                    </div>
                    <p className="font-hand text-sm text-center mt-2 text-primary/60">Studio Vibes</p>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape rotate-[-6deg]" />
                  </div>
                  {/* Coffee ring */}
                  <div className="absolute -bottom-8 -left-6 coffee-ring z-10" />
                  {/* Ink splat */}
                  <div className="absolute bottom-20 right-10 w-20 h-20 ink-splat" />
                </div>
              </div>
              <div className="mt-auto pt-8 flex flex-col gap-4">
                <div className="ripped-edge bg-[#fef9ef] p-4 pt-6 -rotate-1 shadow-sm">
                  <p className="font-sketch text-lg text-primary/80 italic leading-relaxed">
                    "The intersection of brutalist architecture and fluid ink strokes. Exploring how static grids can breathe."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right page */}
          <div className="flex-1 p-8 md:p-16 relative z-10">
            <div className="relative h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="font-hand text-lg opacity-60">Entry #042</span>
                <span className="font-hand text-sm opacity-40">Oct 24, 2024</span>
              </div>
              <article className="mb-10">
                <h2 className="font-serif text-3xl text-primary font-bold mb-4 leading-tight">On Midnight Ink</h2>
                <div className="space-y-4 font-hand text-lg text-primary/90 leading-relaxed">
                  <p>There is a specific weight to the pen after midnight. The lines become less calculated, more honest.</p>
                  <p>We're redesigning the core studio flow tonight. Stripping back the digital noise until only the structure remains. Elena insists the navigation should "breathe" — whatever that means. But she's usually right about these things.</p>
                  <p>The coffee pot is empty for the third time. David has filled the whiteboard with what he calls "intentional chaos". It looks like a map of a city that doesn't exist yet. Maybe it will.</p>
                </div>
              </article>
              <div className="w-1/3 h-[1px] bg-primary/10 self-center my-6" />
              <article className="opacity-80">
                <h3 className="font-serif text-2xl text-primary/80 font-bold mb-3">Notes on Texture</h3>
                <p className="font-hand text-lg text-primary/70 leading-relaxed">Adding grain isn't enough. The texture needs to react to the light. It needs to feel organic, not just a repeating pattern overlay...</p>
              </article>
              <div className="mt-auto pt-8 flex justify-between items-center border-t border-primary/10">
                <button className="font-hand text-primary/60 hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Previous
                </button>
                <span className="font-hand text-primary/40 text-sm">Page 42 of 128</span>
                <button className="font-hand text-primary/60 hover:text-primary transition-colors flex items-center gap-1 group">
                  Next
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="journal" />
    </div>
  );
}
