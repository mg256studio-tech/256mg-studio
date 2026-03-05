import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const StampSvg = () => (
  <div className="stamp-container relative opacity-50 transform rotate-12 scale-75 xl:scale-100 mix-blend-multiply flex items-center justify-center">
    <svg
      className="w-[180px] h-[180px] md:w-[240px] md:h-[240px]"
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        fill="none"
        opacity="0.9"
        r="96"
        stroke="#0f2c63"
        strokeDasharray="1.5 1.5"
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="100"
        fill="none"
        r="91"
        stroke="#0f2c63"
        strokeWidth="1.5"
      />
      <g transform="translate(62, 65) scale(0.75)">
        <path
          d="M20,40 C20,70 40,85 75,80 C100,75 110,50 105,30"
          fill="none"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="5.5"
        />
        <path
          d="M20,40 L30,10 L105,30"
          fill="none"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="5.5"
        />
        <path
          d="M105,35 C115,35 125,45 120,60 C115,75 100,75 90,70"
          fill="none"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="4.5"
        />
        <path
          d="M45,0 Q50,-10 45,-20"
          opacity="0.7"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M65,5 Q70,-5 65,-15"
          opacity="0.7"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M85,10 Q90,0 85,-10"
          opacity="0.7"
          stroke="#0f2c63"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </g>
      <defs>
        <path
          d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          id="circlePath2"
        />
      </defs>
      <text
        fill="#0f2c63"
        fontFamily="Playfair Display"
        fontSize="13.5"
        fontWeight="900"
        letterSpacing="4.8"
      >
        <textPath startOffset="0%" href="#circlePath2">
          256MG.STUDIO • 256MG.STUDIO • 256MG.STUDIO •{" "}
        </textPath>
      </text>
    </svg>
  </div>
);

const ServiceItem = ({ title, subtitle }) => (
  <li className="flex items-start gap-3 group cursor-pointer">
    <div className="mt-1.5 w-4 h-4 rounded-full border border-primary flex items-center justify-center shrink-0">
      <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="flex flex-col">
      <span className="font-serif text-lg font-medium group-hover:underline decoration-wavy decoration-primary/50 underline-offset-4">
        {title}
      </span>
      <span className="font-hand text-sm text-primary/60">{subtitle}</span>
    </div>
  </li>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show loading animation when component mounts
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Show loading animation
  if (isLoading) {
    return (
      <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center font-display text-ink selection:bg-primary/20 relative">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <svg className="w-full h-full">
            <line
              stroke="#1241a1"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="20%"
              x2="20%"
              y1="0"
              y2="100%"
            />
            <line
              stroke="#1241a1"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="80%"
              x2="80%"
              y1="0"
              y2="100%"
            />
            <line
              stroke="#1241a1"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="0"
              x2="100%"
              y1="30%"
              y2="30%"
            />
            <line
              stroke="#1241a1"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="0"
              x2="100%"
              y1="70%"
              y2="70%"
            />
            <path
              d="M 100,100 Q 200,50 300,100"
              fill="none"
              stroke="#1241a1"
              strokeWidth="0.5"
            />
            <circle
              cx="50%"
              cy="50%"
              fill="none"
              r="300"
              stroke="#1241a1"
              strokeDasharray="2 10"
              strokeWidth="0.5"
            />
            <text className="font-mono text-xs" fill="#1241a1" x="21%" y="50">
              y-axis: 02
            </text>
            <text className="font-mono text-xs" fill="#1241a1" x="75%" y="90%">
              scale: 1:1
            </text>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-xl w-full p-8">
          <div className="text-center mb-12 relative">
            <h2 className="font-serif text-5xl md:text-6xl text-ink font-bold tracking-[0.15em] uppercase opacity-90 relative inline-block">
              256MG.STUDIO
              <span className="absolute -top-4 -right-12 font-hand text-xl text-ink/80 rotate-12 select-none">
                EST. 2024
                <svg
                  className="absolute -bottom-1 -left-1 w-full h-2"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    opacity="0.3"
                    stroke="#0f2c63"
                    strokeWidth="1"
                  />
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
              <svg
                className="w-full h-full drop-shadow-sm"
                fill="none"
                viewBox="0 0 100 200"
              >
                <path
                  className="hand-drawn-path"
                  d="M30,180 L70,180 L80,100 L50,10 L20,100 Z"
                  fill="#fff"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
                <path
                  d="M50,10 L50,80"
                  stroke="#1241a1"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <circle
                  cx="50"
                  cy="85"
                  fill="#f7f5f0"
                  r="4"
                  stroke="#1241a1"
                  strokeWidth="1.5"
                />
                <path
                  d="M30,100 Q50,120 70,100"
                  fill="none"
                  stroke="#1241a1"
                  strokeWidth="1"
                />
                <path
                  d="M30,180 L30,200 M70,180 L70,200"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="relative w-40 h-56 z-20">
              <svg
                className="absolute inset-0 w-full h-full z-30 pointer-events-none drop-shadow-lg"
                fill="none"
                viewBox="0 0 160 220"
              >
                <rect
                  fill="#fff"
                  height="20"
                  rx="2"
                  stroke="#1241a1"
                  strokeWidth="3"
                  width="50"
                  x="55"
                  y="10"
                />
                <line
                  stroke="#1241a1"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="60"
                  x2="100"
                  y1="15"
                  y2="15"
                />
                <line
                  stroke="#1241a1"
                  strokeLinecap="round"
                  strokeWidth="2"
                  x1="60"
                  x2="100"
                  y1="20"
                  y2="20"
                />
                <path
                  d="M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30"
                  fill="none"
                  stroke="#1241a1"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  d="M50,80 Q45,100 45,150"
                  fill="none"
                  stroke="#1241a1"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                />
                <rect
                  height="60"
                  rx="2"
                  stroke="#1241a1"
                  strokeDasharray="2 2"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  transform="rotate(-2 80 130)"
                  width="60"
                  x="50"
                  y="100"
                />
                <text
                  fill="#1241a1"
                  fontFamily="Caveat"
                  fontSize="12"
                  opacity="0.6"
                  transform="rotate(-2 80 130)"
                  x="60"
                  y="135"
                >
                  No. 5
                </text>
              </svg>
              <div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  clipPath:
                    "path('M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30 Z')",
                }}
              >
                <div className="ink-wave w-full animate-fill-ink relative">
                  <div className="ink-surface" />
                  <div
                    className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-white/30 animate-bubble-rise"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="absolute bottom-8 right-6 w-3 h-3 rounded-full border border-white/20 animate-bubble-rise"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute bottom-2 left-1/2 w-1.5 h-1.5 rounded-full border border-white/30 animate-bubble-rise"
                    style={{ animationDelay: "2.8s" }}
                  />
                  <div className="absolute inset-0 ink-texture-overlay bg-black/20 mix-blend-overlay" />
                </div>
              </div>
              <div
                className="absolute inset-0 z-40 bottle-glass-highlight opacity-30 rounded-b-[30px]"
                style={{
                  clipPath:
                    "path('M65,30 L65,50 Q65,60 40,70 L40,200 Q40,215 80,215 Q120,215 120,200 L120,70 Q95,60 95,50 L95,30 Z')",
                }}
              />
            </div>
            <div
              className="absolute top-[40%] right-[25%] w-3 h-3 bg-ink rounded-full animate-splash"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-[45%] left-[30%] w-2 h-2 bg-ink rounded-full animate-splash"
              style={{ animationDelay: "3.5s" }}
            />
          </div>
          <div className="text-center relative z-20">
            <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-3 tracking-tight animate-pulse">
              Brewing your experience...
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-primary/60 text-lg animate-spin"
                style={{ animationDuration: "3s" }}
              >
                autorenew
              </span>
              <p className="font-hand text-xl text-primary/70">
                Collecting the ink.
              </p>
            </div>
            <div className="mt-8 relative w-64 h-3 mx-auto">
              <div className="absolute inset-0 border-b-2 border-primary/20 border-dashed transform rotate-1" />
              <div
                className="absolute left-0 bottom-0 h-[2px] bg-primary"
                style={{ animation: "widthAnim 4s ease-in-out infinite" }}
              />
              <div className="absolute right-0 -bottom-1 w-[2px] h-2 bg-primary/20" />
              <div className="absolute left-0 -bottom-1 w-[2px] h-2 bg-primary/20" />
              <span className="absolute -right-4 -top-4 font-mono text-[10px] text-primary/40">
                100%
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
          <p className="font-mono text-xs text-primary/30 uppercase tracking-[0.3em]">
            256mg.studio // loading sequence
          </p>
        </div>
        <div className="absolute top-20 right-20 w-32 h-32 pointer-events-none opacity-20 animate-scribble hidden md:block">
          <svg
            className="w-full h-full"
            fill="none"
            stroke="#1241a1"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,50 Q30,40 50,50 T90,50 M20,60 Q40,40 60,60 T80,40"
              strokeWidth="0.5"
            />
            <circle
              cx="80"
              cy="20"
              r="5"
              strokeDasharray="2 2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    );
  }

  // Show home page content
  return (
    <>
      <Navigation />
      <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20">
        {/* Hero */}
        <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-2 text-primary/70 text-sm font-semibold tracking-wider uppercase">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span>Digital Artisans</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] text-primary">
                Designing digital products with{" "}
                <span className="italic relative inline-block">
                  intention.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-primary/20"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed font-light">
                We craft digital experiences that feel human, tangible, and
                built to last. Welcome to our sketchbook of ideas.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="hand-drawn-border bg-primary text-white px-8 py-3.5 text-base font-bold transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  View our Sketchbook
                </Link>
                <Link
                  to="/philosophy"
                  className="px-8 py-3.5 text-base font-bold text-primary hover:underline decoration-wavy underline-offset-4"
                >
                  Meet the team
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-75 animate-pulse" />
              <div className="absolute inset-0 border border-primary/5 rotate-45 scale-50" />
              <div
                className="relative w-full h-full bg-contain bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-FWnHit8lZMx_RoVdSPhdGhdMU9J3md_ULpbZkmxYe4e8HP4EQ9jCUNezW6AwFDqfZg1y1Q8y37CHvsK1KGEpxNgNiidf1TfcXECH8o-C59ANNQgsyV8EcVAO1fRES-fsup38q28H2GjMKe6q_ILKghSA8SxB5WTlMUoR0wJCZD6mnMGHgGk4M3zf2pHKjYxuDvHMqX2y-RZnnToZZP3wHHk3yRer61UqR2IwpyWhOCs4IUboY12AUPHCHnv13hKd1gip_2z94QXS')",
                }}
              >
                <div className="absolute bottom-10 -left-4 bg-paper p-4 wobbly-box max-w-xs shadow-xl rotate-2">
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      lightbulb
                    </span>
                    <div>
                      <h4 className="font-bold text-primary text-sm">
                        Concept #42
                      </h4>
                      <p className="text-xs text-primary/70">
                        Focus on negative space and typography.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Assembly Process */}
        <section className="py-20 px-6 bg-white/50 relative overflow-visible mt-12">
          <div className="notebook-spiral-top" />
          <div
            className="ripped-shadow"
            style={{ top: "-10px", height: "30px", opacity: 0.5 }}
          />
          <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
            <div className="hidden lg:block absolute top-[55%] left-0 w-full h-20 -z-0 pointer-events-none opacity-40">
              <svg
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 1200 100"
                width="100%"
              >
                <path
                  d="M50,50 C150,60 250,40 350,50 C450,60 550,40 650,50 C750,60 850,40 950,50 C1050,60 1150,40 1200,50"
                  fill="none"
                  stroke="#1241a1"
                  strokeDasharray="12 4"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  fill="#f7f5f0"
                  r="4"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
                <circle
                  cx="350"
                  cy="50"
                  fill="#f7f5f0"
                  r="4"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
                <circle
                  cx="650"
                  cy="50"
                  fill="#f7f5f0"
                  r="4"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
                <circle
                  cx="950"
                  cy="50"
                  fill="#f7f5f0"
                  r="4"
                  stroke="#1241a1"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-center max-w-2xl mx-auto relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
                Our Assembly Process
              </h2>
              <p className="text-primary/70 text-lg">
                A technical blueprint for success, constructed in four stages.
              </p>
              <div className="absolute -right-20 top-0 rotate-12 font-hand text-primary/40 hidden md:block">
                Rev. A
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  part: "01",
                  title: "Launch Assembly",
                  desc: "Bolting down the foundation. We draft the initial schematics and assemble the core components.",
                  note: "torque: 45nm",
                  svg: (
                    <svg
                      className="text-primary w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M40,30 L60,30 L60,70 L40,70 Z"
                        strokeDasharray="2 2"
                      />
                      <path d="M50,10 L65,30 L35,30 Z" strokeWidth="2" />
                      <path d="M50,15 L50,25" strokeDasharray="2 2" />
                      <path d="M45,25 L50,30 L55,25" />
                      <path
                        d="M30,70 L40,60 L40,70 Z"
                        transform="translate(-5, 5)"
                      />
                      <path
                        d="M60,60 L70,70 L60,70 Z"
                        transform="translate(5, 5)"
                      />
                      <path d="M25,75 L35,75" strokeDasharray="2 2" />
                      <path d="M75,75 L65,75" strokeDasharray="2 2" />
                      <rect height="5" width="40" x="30" y="85" />
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        x="70"
                        y="20"
                      >
                        Fig. 1.1
                      </text>
                    </svg>
                  ),
                },
                {
                  part: "02",
                  title: "Structural Growth",
                  desc: "Expanding the framework. Adding modules and nurturing the user base structure.",
                  note: "+150% exp.",
                  svg: (
                    <svg
                      className="text-primary w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <path d="M50,80 Q50,50 50,40" />
                      <path d="M40,85 Q50,85 60,85" />
                      <ellipse
                        cx="40"
                        cy="50"
                        rx="10"
                        ry="5"
                        transform="rotate(-30 40 50)"
                      />
                      <ellipse
                        cx="60"
                        cy="45"
                        rx="8"
                        ry="4"
                        transform="rotate(30 60 45)"
                      />
                      <path d="M50,40 L30,20" strokeDasharray="3 3" />
                      <path d="M50,40 L70,20" strokeDasharray="3 3" />
                      <path d="M50,40 L50,15" strokeDasharray="3 3" />
                      <path d="M28,22 L32,18" />
                      <path d="M72,22 L68,18" />
                      <path d="M48,17 L52,13" />
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        transform="rotate(90 85 50)"
                        x="85"
                        y="50"
                      >
                        Scale 2:1
                      </text>
                    </svg>
                  ),
                },
                {
                  part: "03",
                  title: "Metamorphosis",
                  desc: "Evolving the geometry. Reshaping legacy systems into modern digital architecture.",
                  note: "Ref. shape",
                  svg: (
                    <svg
                      className="text-primary w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <rect
                        height="30"
                        strokeDasharray="2 2"
                        width="30"
                        x="20"
                        y="50"
                      />
                      <path d="M35,50 Q40,30 50,20" strokeDasharray="3 3" />
                      <path d="M65,50 Q60,30 50,20" strokeDasharray="3 3" />
                      <path
                        d="M50,15 L60,35 L80,35 L65,50 L70,70 L50,60 L30,70 L35,50 L20,35 L40,35 Z"
                        strokeWidth="2"
                      />
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        x="10"
                        y="90"
                      >
                        State B
                      </text>
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        x="70"
                        y="90"
                      >
                        State A
                      </text>
                    </svg>
                  ),
                },
                {
                  part: "04",
                  title: "Calibration",
                  desc: "Fine-tuning the mechanism. Micro-adjustments for peak performance metrics.",
                  note: "tolerance: 0.01",
                  svg: (
                    <svg
                      className="text-primary w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M20,20 L80,20 M20,40 L80,40 M20,60 L80,60 M20,80 L80,80"
                        strokeOpacity="0.2"
                      />
                      <path
                        d="M20,20 L20,80 M40,20 L40,80 M60,20 L60,80 M80,20 L80,80"
                        strokeOpacity="0.2"
                      />
                      <circle cx="45" cy="45" r="20" strokeWidth="2" />
                      <path d="M60,60 L80,80" strokeWidth="3" />
                      <path d="M35,45 L45,55 L55,35" strokeWidth="2" />
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        x="70"
                        y="40"
                      >
                        Fine tune
                      </text>
                      <text
                        className="font-hand"
                        fill="currentColor"
                        fontSize="8"
                        stroke="none"
                        x="70"
                        y="65"
                      >
                        ok!
                      </text>
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.part}
                  className="group relative p-6 flex flex-col gap-4 bg-paper/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/40 transition-all duration-300 rounded-sm"
                >
                  <div className="absolute -top-3 left-4 bg-paper px-2 font-mono text-xs text-primary/60 border border-primary/20">
                    PART {item.part}
                  </div>
                  <div className="w-full aspect-square mb-2 relative assembly-diagram flex items-center justify-center p-4">
                    {item.svg}
                  </div>
                  <h3 className="text-xl font-bold text-primary font-serif">
                    {item.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed text-sm font-light">
                    {item.desc}
                  </p>
                  <div className="font-hand text-xs text-primary/40 text-right mt-2">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Menu Blueprint */}
        <section
          className="py-24 px-6 relative mt-12 overflow-visible"
          id="services"
        >
          <div className="notebook-spiral-top" />
          <div className="ripped-shadow" />
          <div className="clutter-item hidden xl:block top-10 right-[10%] rotate-[15deg] w-64 opacity-90">
            <svg fill="none" viewBox="0 0 200 40">
              <path
                d="M0,0 L200,0 L200,40 L0,40 Z"
                fill="#e0dac9"
                stroke="#1241a1"
                strokeWidth="1"
              />
              <path
                d="M10,0 L10,20 M20,0 L20,15 M30,0 L30,20 M40,0 L40,15 M50,0 L50,25 M60,0 L60,15 M70,0 L70,20 M80,0 L80,15 M90,0 L90,20 M100,0 L100,25"
                stroke="#1241a1"
                strokeWidth="1"
              />
              <text
                className="text-xs"
                fill="#1241a1"
                fontFamily="monospace"
                x="160"
                y="25"
              >
                RULER 20cm
              </text>
            </svg>
          </div>
          <div className="max-w-6xl mx-auto blueprint-board p-8 md:p-16 relative">
            <div className="absolute -top-4 left-10 bg-paper px-2 font-hand text-primary font-bold text-lg rotate-[-2deg]">
              Blueprint No. 5
            </div>
            <div className="absolute top-4 right-4 font-hand text-xs text-primary/50 rotate-90 origin-right">
              Scale: 1:100
            </div>
            <div className="absolute bottom-4 left-4 font-hand text-xs text-primary/50">
              stroke: 2.5px irregular
            </div>
            <div className="absolute -bottom-3 right-10 bg-paper px-2 font-hand text-primary font-bold text-lg rotate-[1deg]">
              Est. 2024
            </div>
            <div className="text-center mb-16 relative">
              <h2 className="font-serif text-5xl text-primary inline-block relative z-10">
                Services Menu
              </h2>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[110%] h-[140%] border border-dashed border-primary/30 rounded-[50%] rotate-[-1deg] -z-0" />
              <p className="font-hand text-xl text-primary/70 mt-4 rotate-[-1deg]">
                Detailed specs for digital construction
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-primary relative z-10">
              <div className="blueprint-column flex flex-col gap-8">
                <div className="flex flex-col items-center border-b-2 border-primary/20 pb-6 border-dashed">
                  <div className="w-16 h-16 mb-4 relative">
                    <svg
                      className="w-full h-full text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                      <circle cx="12" cy="12" fill="currentColor" r="1" />
                    </svg>
                    <div className="absolute -right-2 -top-2 font-hand text-xs text-primary/60">
                      fig. A
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl uppercase tracking-widest font-serif">
                    Visual
                  </h3>
                </div>
                <ul className="flex flex-col gap-5 pl-2">
                  <ServiceItem
                    title="Art Direction"
                    subtitle="Conceptual framework"
                  />
                  <ServiceItem title="UI Kits" subtitle="Atomic components" />
                  <ServiceItem
                    title="Illustration"
                    subtitle="Hand-inked assets"
                  />
                  <ServiceItem
                    title="Brand Identity"
                    subtitle="Visual language"
                  />
                </ul>
              </div>
              <div className="blueprint-column flex flex-col gap-8">
                <div className="flex flex-col items-center border-b-2 border-primary/20 pb-6 border-dashed">
                  <div className="w-16 h-16 mb-4 relative">
                    <svg
                      className="w-full h-full text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <rect height="16" rx="2" width="18" x="3" y="4" />
                      <path d="M7 8h10" />
                      <path d="M7 12h10" />
                      <path d="M7 16h4" />
                      <circle cx="18" cy="6" fill="currentColor" r="1" />
                    </svg>
                    <div className="absolute -right-2 -top-2 font-hand text-xs text-primary/60">
                      fig. B
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl uppercase tracking-widest font-serif">
                    Digital
                  </h3>
                </div>
                <ul className="flex flex-col gap-5 pl-2">
                  <ServiceItem
                    title="Web Apps"
                    subtitle="Responsive architecture"
                  />
                  <ServiceItem
                    title="Mobile Interfaces"
                    subtitle="Touch interactions"
                  />
                  <ServiceItem title="eCommerce" subtitle="Conversion flows" />
                  <ServiceItem
                    title="Design Systems"
                    subtitle="Scalable libraries"
                  />
                </ul>
              </div>
              <div className="blueprint-column flex flex-col gap-8">
                <div className="flex flex-col items-center border-b-2 border-primary/20 pb-6 border-dashed">
                  <div className="w-16 h-16 mb-4 relative">
                    <svg
                      className="w-full h-full text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3 6 6 1-4 5 1 7-6-3-6 3 1-7-4-5 6-1 3-6z" />
                      <circle cx="12" cy="12" fill="currentColor" r="1" />
                      <path d="M12 2v20" strokeDasharray="2 2" />
                      <path d="M2 12h20" strokeDasharray="2 2" />
                    </svg>
                    <div className="absolute -right-2 -top-2 font-hand text-xs text-primary/60">
                      fig. C
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl uppercase tracking-widest font-serif">
                    Campaign
                  </h3>
                </div>
                <ul className="flex flex-col gap-5 pl-2">
                  <ServiceItem
                    title="Social Strategy"
                    subtitle="Audience growth"
                  />
                  <ServiceItem title="SEO & Content" subtitle="Organic reach" />
                  <ServiceItem title="Analytics" subtitle="Data insights" />
                  <ServiceItem title="Copywriting" subtitle="Voice & Tone" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section
          className="py-24 px-6 relative mt-12 overflow-visible"
          id="work"
        >
          <div className="notebook-spiral-top" />
          <div className="ripped-shadow" />
          <div className="max-w-6xl mx-auto blueprint-board p-8 md:p-16 relative">
            <div className="clutter-item hidden lg:block -top-10 -right-4 rotate-[15deg] z-50">
              <StampSvg />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-primary/20 border-dashed pb-8 mb-12 relative z-10">
              <div className="relative">
                <h2 className="font-serif text-5xl text-primary relative z-10">
                  Selected Work
                </h2>
                <span className="absolute -top-6 -left-6 font-hand text-xl text-primary/40 rotate-[-15deg]">
                  Proj. Archive
                </span>
              </div>
              <Link
                className="text-primary font-bold hover:underline decoration-wavy mb-2 flex items-center gap-2 group"
                to="/work"
              >
                View full archive
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <Link
                to="/case-study"
                className="group cursor-pointer relative pt-4"
              >
                <div className="tape tape-top" />
                <div className="wobbly-box aspect-video overflow-hidden bg-white mb-6 relative shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-all duration-500 hand-drawn-border">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    alt="Minimalist abstract architectural photo with blue tones"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJUse_Qxxm0AF4nGlrInnRg5Pi6CQs5pZH1gIBiYYWfgFGelzwe43x5IPfTbdlC5bs90Qd27n3p8ltsg0k9R8fMPS-lVfj67tJ5EckY1HVWwZ1p63lPXnftwsziTs4h_F2iuQH7XTqH59mIawzWKrQ90687TOvYz0eifh2vmXrvRUvel9jUlqPHVtSYinmXL8lFtYvYZ8s-OyPdAFS8t3J9I0rQ1Rcz7Q93GawO5SvEqNBqySNNACPMFJbG6W3XkIi2YUMwIOVwet"
                  />
                  <div className="absolute bottom-2 right-2 font-hand text-[12px] text-primary bg-paper/90 px-1 border border-primary/20 rotate-1 shadow-sm">
                    width: 1440px
                  </div>
                  <div className="absolute top-2 left-2 font-hand text-[12px] text-primary bg-paper/90 px-1 border border-primary/20 -rotate-1 shadow-sm">
                    f/2.8 ISO 100
                  </div>
                </div>
                <div className="flex flex-col relative pl-2">
                  <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-primary/30" />
                  <h3 className="font-serif text-2xl font-bold text-primary tracking-tight border-b border-primary/10 inline-block pb-1 mb-2">
                    Lumina Architect
                  </h3>
                  <div className="flex justify-between items-center mt-0">
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/70">
                      Brand Identity &amp; Website
                    </p>
                    <span className="font-hand text-sm text-primary/50">
                      ref. 084
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                to="/work"
                className="group cursor-pointer relative pt-4 md:mt-24"
              >
                <div className="tape tape-corner" />
                <div className="wobbly-box aspect-video overflow-hidden bg-white mb-6 relative shadow-lg transform rotate-[1deg] hover:rotate-0 transition-all duration-500 hand-drawn-border">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    alt="Abstract fluid blue ink pattern"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSsfnqb8Vs_yfNK2jHqbYGWuCaL0kDgfIKV369SUiy7iazy_wzqcTWpGprxHTIlL4x8SFuQwipk_PgzExulcmna4USWP_GTXGEZJQ9m8OllUEhicP9VkOeqXZxsx05RmW31MdGot5z1eM6r2AuQ26NTp_2nmklhDmWTiZHEKt8gWDek7RpE9faC4Xgj4mlMscpocC5lIzxKlTMvkISaRpxOpBwwFeP3kbgh5DhhpmCN8rJ8Hpz-3fJURcykWDnfOAyXgogO0DWbQh"
                  />
                  <div className="absolute bottom-2 left-2 font-hand text-[12px] text-primary bg-paper/90 px-1 border border-primary/20 -rotate-1 shadow-sm">
                    Mobile First
                  </div>
                  <div className="absolute top-2 right-2 font-hand text-[12px] text-primary bg-paper/90 px-1 border border-primary/20 rotate-1 shadow-sm">
                    v.2.0.4
                  </div>
                </div>
                <div className="flex flex-col relative pl-2">
                  <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-primary/30" />
                  <h3 className="font-serif text-2xl font-bold text-primary tracking-tight border-b border-primary/10 inline-block pb-1 mb-2">
                    Velvet Coffee
                  </h3>
                  <div className="flex justify-between items-center mt-0">
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/70">
                      eCommerce Platform
                    </p>
                    <span className="font-hand text-sm text-primary/50">
                      ref. 102
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/30 tracking-[0.2em] uppercase">
              Draft No. 44-B / Approved for Web
            </div>
          </div>
        </section>

        {/* Diary Section */}
        <section
          className="min-h-screen py-32 px-4 relative overflow-hidden flex items-center justify-center"
          id="journal"
          style={{
            backgroundColor: "#f0ebe4",
            backgroundImage: "radial-gradient(#d6d0c4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <div className="ripped-divider" />
          <div className="diary-container w-full relative">
            <div className="diary-book">
              <div className="diary-ribbon" />
              <div className="diary-spread">
                <div className="diary-binding-stitch" />
                <div
                  className="diary-page diary-page-left"
                  style={{
                    backgroundImage:
                      "linear-gradient(#1241a1 1px, transparent 1px)",
                    backgroundSize: "100% 2rem",
                    backgroundPosition: "0 1.5rem",
                  }}
                >
                  <div className="absolute top-8 left-8 transform -rotate-2 font-serif text-primary/80 border-2 border-primary/20 p-2 rounded">
                    <span className="block text-2xl font-bold leading-none">
                      12
                    </span>
                    <span className="block text-xs uppercase tracking-widest text-center">
                      OCT
                    </span>
                  </div>
                  <div className="mt-12 mb-8 relative mx-auto w-4/5 aspect-square">
                    <svg
                      className="w-full h-full text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 200 200"
                    >
                      <path
                        d="M70 180 L70 160 Q60 160 60 150 L65 40 Q80 30 100 30 Q120 30 135 40 L140 150 Q140 160 130 160 L130 180"
                        strokeDasharray="2 4"
                      />
                      <path d="M80 180 L120 180 M75 160 L125 160 M85 40 L115 40" />
                      <rect height="15" width="20" x="90" y="20" />
                      <path d="M90 20 L100 10 L110 20" />
                      <circle cx="100" cy="27" r="3" />
                      <path d="M40 100 L30 110 L40 120" strokeWidth="2" />
                      <path d="M160 100 L170 110 L160 120" strokeWidth="2" />
                      <text
                        fill="currentColor"
                        fontFamily="monospace"
                        fontSize="10"
                        stroke="none"
                        x="55"
                        y="100"
                      >
                        &lt;div&gt;
                      </text>
                      <text
                        fill="currentColor"
                        fontFamily="monospace"
                        fontSize="10"
                        stroke="none"
                        x="115"
                        y="100"
                      >
                        &lt;/div&gt;
                      </text>
                      <path d="M20 180 Q40 160 60 180 T100 180 T140 180 T180 180" />
                      <path
                        d="M30 190 Q50 170 70 190 T110 190 T150 190"
                        opacity="0.6"
                      />
                    </svg>
                    <div className="absolute -bottom-6 text-center w-full font-hand text-primary/60 text-sm">
                      Fig 2.1: The Beacon Concept
                    </div>
                  </div>
                  <div className="absolute bottom-20 left-10 rotate-6 w-32 bg-white p-2 pb-8 shadow-polaroid transform hover:scale-105 transition-transform duration-300 z-10 cursor-pointer">
                    <div className="polaroid-tape" />
                    <div className="w-full h-24 bg-gray-100 overflow-hidden relative">
                      <div
                        className="absolute inset-0 opacity-50 bg-cover grayscale contrast-125"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop')",
                        }}
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
                    <div className="font-hand text-xs text-center mt-2 text-gray-600">
                      Team Sprint
                    </div>
                  </div>
                  <div
                    className="ink-splat w-16 h-16 top-20 left-10"
                    style={{
                      maskImage:
                        "radial-gradient(circle, black 40%, transparent 70%)",
                    }}
                  />
                </div>
                <div className="diary-page diary-page-right relative overflow-visible">
                  <div
                    className="absolute top-10 right-10 w-32 h-32 border-4 border-[#8B4513] rounded-full opacity-10 pointer-events-none"
                    style={{
                      filter: "blur(1px)",
                      transform: "scale(1.2, 1.1) rotate(45deg)",
                    }}
                  />
                  <div className="h-full flex flex-col justify-between relative z-10 overflow-visible">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary text-xl">
                          edit_note
                        </span>
                        <span className="font-hand text-primary/60 text-sm">
                          Entry #042
                        </span>
                      </div>
                      <article className="mb-10 relative overflow-visible">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight relative">
                          The Art of Intentional Design
                        </h2>
                        <div className="script-text relative">
                          <p className="mb-4">
                            Today we explored the concept of{" "}
                            <span className="font-bold text-primary/80">
                              digital permanence
                            </span>
                            . In a world where feeds refresh every second, how
                            do we create something that feels like it has
                            weight? Like it belongs?
                          </p>
                          <p className="mb-4">
                            We started by stripping away the non-essentials. The
                            heavy gradients, the unnecessary shadows. We asked
                            ourselves:{" "}
                            <span className="italic text-primary">
                              "If this website was printed on paper, would it
                              still be beautiful?"
                            </span>
                          </p>
                          <p>
                            The answer lies in the typography. The negative
                            space. The rhythm of the grid. It's not just about
                            looking good; it's about feeling right.
                          </p>
                        </div>
                      </article>
                      <article className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-serif text-2xl text-primary/80 font-bold mb-2">
                          Notes on Texture
                        </h3>
                        <p className="script-text line-clamp-3">
                          Adding grain isn't enough. The texture needs to react
                          to the light. It needs to feel organic, not just a
                          repeating pattern overlay. We're experimenting with...
                        </p>
                      </article>
                    </div>
                    <div className="flex justify-between items-center mt-8 border-t border-primary/10 pt-4 diary-nav">
                      <button className="hand-drawn-arrow text-primary group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                          arrow_back
                        </span>
                      </button>
                      <span className="font-hand text-primary/40 text-sm">
                        Page 12 of 48
                      </span>
                      <button className="hand-drawn-arrow text-primary group">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creativity Statement */}
        <section className="py-24 px-6 md:py-32 bg-paper text-ink relative overflow-visible">
          <div className="notebook-spiral-top" />
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight md:leading-snug text-primary tracking-tight">
              We believe creativity
              <span className="inline-block relative top-3 mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light rotate-[-10deg]">
                  edit
                </span>
              </span>
              should solve problems, not just sit
              <span className="inline-block relative mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light rotate-[12deg]">
                  pets
                </span>
              </span>
              pretty. That's why every pixel
              <span className="inline-block relative top-2 mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light">
                  tab
                </span>
              </span>
              , strategy
              <span className="inline-block relative top-2 mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light rotate-6">
                  grid_3x3
                </span>
              </span>
              and campaign
              <span className="inline-block relative top-2 mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light rotate-[-5deg]">
                  campaign
                </span>
              </span>
              we create is
              <span className="inline-block relative top-2 mx-1">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-5xl md:text-7xl font-light">
                    coffee
                  </span>
                  <span className="material-symbols-outlined text-4xl md:text-6xl font-light text-primary/60">
                    arrow_right_alt
                  </span>
                  <span className="material-symbols-outlined text-5xl md:text-7xl font-light">
                    coffee_maker
                  </span>
                </span>
              </span>
              brewed with design thinking
              <span className="inline-block relative top-2 mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light">
                  signpost
                </span>
              </span>
              and intent
              <span className="inline-block relative mx-1">
                <span className="material-symbols-outlined text-5xl md:text-7xl font-light rotate-[15deg]">
                  help_center
                </span>
              </span>
              .
            </h2>
          </div>
        </section>

        {/* Philosophy */}
        <section
          className="py-32 px-6 bg-primary text-paper relative overflow-visible mt-12"
          id="philosophy"
        >
          <div className="notebook-spiral-top" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="material-symbols-outlined text-6xl mb-6 opacity-80">
              history_edu
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-medium">
              We believe in craft above all else.
              <span className="block text-2xl md:text-3xl mt-6 font-display font-light opacity-80 max-w-3xl mx-auto">
                In a world of templates, we choose to draw every line by hand.
              </span>
            </h2>
          </div>
        </section>

        {/* Contact Form */}
        <section
          className="py-24 px-6 relative mt-12 overflow-visible"
          id="contact"
        >
          <div className="notebook-spiral-top" />
          <div className="ripped-shadow" />
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/60 backdrop-blur-sm p-8 md:p-12 hand-drawn-border">
              <div className="absolute -top-6 -left-6 text-primary rotate-[-15deg]">
                <span className="material-symbols-outlined text-5xl">mail</span>
              </div>
              <div className="text-center mb-10">
                <h2 className="font-serif text-4xl text-primary mb-3">
                  Let's build something meaningful.
                </h2>
                <p className="text-primary/70">
                  Fill out the form below, or just say hello.
                </p>
              </div>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      className="bg-transparent border-0 border-b-2 border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 placeholder-primary/30 text-primary transition-colors"
                      placeholder="Jane Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      className="bg-transparent border-0 border-b-2 border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 placeholder-primary/30 text-primary transition-colors"
                      placeholder="jane@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    className="bg-transparent border-0 border-b-2 border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 placeholder-primary/30 text-primary resize-none transition-colors"
                    placeholder="Tell us about your vision..."
                    rows="3"
                  />
                </div>
                <div className="pt-4 flex justify-center">
                  <Link
                    to="/message"
                    className="group relative px-8 py-3 bg-primary text-white font-bold overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        send
                      </span>
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Home Footer */}
        <footer className="relative pb-24 pt-24 px-4 overflow-visible bg-paper mt-16">
          <div className="notebook-spiral-top" />
          <div className="ripped-shadow" />
          <div className="max-w-5xl mx-auto w-full border-2 border-primary relative px-6 md:px-12 py-12 rounded-sm shadow-[8px_8px_0_rgba(18,65,161,0.1)]">
            <div className="relative z-10 flex flex-col items-center">
              <p className="font-serif italic text-2xl text-primary mb-8">
                visit us again
              </p>
              <div className="w-full flex flex-col items-center gap-4 mb-10">
                <div className="dashed-line-x w-full opacity-40" />
                <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary py-2">
                  256mg
                  <span className="font-serif italic font-normal text-4xl">
                    .studio
                  </span>
                </h2>
                <div className="dashed-line-x w-full opacity-40" />
              </div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 w-full">
                <Link
                  className="text-lg font-bold uppercase tracking-wide text-primary hover:underline decoration-wavy underline-offset-4"
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className="text-lg font-bold uppercase tracking-wide text-primary hover:underline decoration-wavy underline-offset-4"
                  to="/work"
                >
                  Works
                </Link>
                <Link
                  className="text-lg font-bold uppercase tracking-wide text-primary hover:underline decoration-wavy underline-offset-4"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex gap-6 justify-center items-center mb-8">
                <a
                  className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded hover:scale-110 transition-transform"
                  href="#"
                >
                  <span className="text-lg font-bold">Be</span>
                </a>
                <a
                  className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded hover:scale-110 transition-transform"
                  href="#"
                >
                  <span className="text-lg font-bold">in</span>
                </a>
                <a
                  className="text-primary hover:scale-110 transition-transform"
                  href="#"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div className="footer-mascot">
                <svg
                  className="w-full h-full text-primary"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M20,60 C20,80 35,90 60,85 C80,80 85,60 80,45"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M20,60 L25,40 L80,45"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <ellipse
                    cx="50"
                    cy="42"
                    fill="none"
                    rx="28"
                    ry="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M80,50 C90,50 95,60 90,70 C85,80 75,75 70,75"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="40" cy="65" fill="currentColor" r="2.5" />
                  <circle cx="60" cy="62" fill="currentColor" r="2.5" />
                  <path
                    d="M48,70 Q50,73 52,70"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <circle cx="30" cy="90" fill="currentColor" r="3" />
                  <circle cx="65" cy="88" fill="currentColor" r="3" />
                  <path
                    d="M45,25 Q50,20 45,15"
                    opacity="0.6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M55,28 Q60,23 55,18"
                    opacity="0.6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M65,30 Q70,25 65,20"
                    opacity="0.6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
