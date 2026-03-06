import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const projects = [
  {
    name: "Rajasa",
    description: "Brand Identity & Interface Design",
    color: "#fbf8f3",
    image: "/Rajasa.png",
    link: "https://rajasa-v4o2.vercel.app",
    specs: [
      "Primary Font: Playfair Display",
      "Grid System: 12-col fluid",
      "Palette: Deep Navy & Paper",
    ],
    status: "Production Ready",
  },
  {
    name: "LuxeStay",
    description: "Premium Residences Booking Platform",
    color: "#f5f1ed",
    image: "/LuxeStay.png",
    link: "https://lukestayairbnb.vercel.app",
    specs: ["React + Vite", "Tailwind CSS", "Full Responsive Design"],
    status: "Live",
  },
  {
    name: "Prism",
    description: "Modern Landing Page Experience",
    color: "#f8f4f0",
    image: "/Prism.png",
    link: "https://prismlandingpage.vercel.app",
    specs: ["Custom Animations", "Performance Optimized", "SEO Ready"],
    status: "Live",
  },
  {
    name: "Velvet",
    description: "Modern Lipstick E-commerce Landing Page",
    color: "#fdf8f5",
    image: "/Velvet.png",
    link: "https://lipstick-landing-page.vercel.app/",
    specs: ["Elegant Typography", "Smooth Interactions", "Mobile First"],
    status: "Live",
  },
  {
    name: "Vortex",
    description: "A modern landing page for the kitchen appliance brand Vortex, showcasing their latest line of sleek and innovative products. ",
    color: "#f9f5f0",
    image: "/Vortex.png",
    link: "https://homelandingpage.vercel.app",
    specs: ["Clean Layout", "Interactive Product Showcase", "Responsive Design"],
    status: "Live",
  },
  {
    name: "Furnish-Hub",
    description: "A modern animated landing page for the furniture e-commerce brand Furnish-Hub, designed to captivate visitors with its sleek design and seamless user experience.",
    color: "#fdf9f6",
    image: "/Furnishhub.png",
    link: "https://furnish-hub-coral.vercel.app/",
    specs: ["Dynamic Animations", "Intuitive Navigation", "Mobile Optimized"],
    status: "Live",
  }
];

export default function Work() {
  return (
    <div className="font-display text-ink overflow-x-hidden selection:bg-primary/20 min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-primary mb-4 relative inline-block">
            Project Archives
            <svg
              className="absolute -bottom-2 w-full left-0 h-3 text-primary/30"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </h1>
          <p className="font-hand text-2xl text-primary/70 mt-2">
            Curated Design Portfolio
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative mb-4">
                <div className="folder-tab bg-primary/5 h-11 w-120 border-t border-l border-r border-primary/20 rounded-t-sm flex items-end justify-start pl-6 pb-2 shadow-sm">
                  <span
                    className="font-hand text-2xl font-bold text-primary transform"
                    style={{
                      transform:
                        index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                    }}
                  >
                    {project.name}
                  </span>
                </div>
              </div>

              <div
                className="folder-body rounded-r-sm rounded-bl-sm border border-primary/20 relative p-6 md:p-10 shadow-lg transition-transform group-hover:shadow-xl"
                style={{ backgroundColor: project.color }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Image Section */}
                  <div className="relative order-2 md:order-1">
                    {project.image ? (
                      <div className="relative">
                        <div className="absolute -top-3 -left-3 z-20">
                          <div className="w-6 h-6 bg-primary/30 rounded-full" />
                        </div>
                        <div className="bg-white border-2 border-primary/20 p-3 shadow-md overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-auto object-cover rounded-sm"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white border-2 border-primary/20 p-6 shadow-sm h-full blueprint-grid relative">
                        <div className="absolute top-2 right-2 font-mono text-[10px] text-primary/50 border border-primary/20 px-1">
                          FIG 1.0
                        </div>
                        <h3 className="font-serif text-xl text-primary font-bold mb-4 border-b border-primary/10 pb-2">
                          Interface Blueprint
                        </h3>
                        <svg
                          className="w-full h-auto text-primary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 300 400"
                        >
                          <rect
                            height="40"
                            opacity="0.6"
                            rx="2"
                            strokeDasharray="5 5"
                            width="280"
                            x="10"
                            y="10"
                          />
                          <circle cx="30" cy="30" r="10" />
                          <line x1="250" x2="280" y1="25" y2="25" />
                          <line x1="250" x2="280" y1="35" y2="35" />
                          <rect height="120" rx="2" width="280" x="10" y="60" />
                          <path
                            d="M10 140 Q 50 120 100 140 T 200 140 T 290 140"
                            strokeOpacity="0.3"
                          />
                          <rect
                            fill="currentColor"
                            fillOpacity="0.1"
                            height="10"
                            rx="1"
                            width="100"
                            x="30"
                            y="80"
                          />
                          <rect
                            height="8"
                            rx="1"
                            strokeOpacity="0.3"
                            width="80"
                            x="30"
                            y="100"
                          />
                          <rect
                            height="80"
                            rx="2"
                            strokeDasharray="2 3"
                            width="86"
                            x="10"
                            y="200"
                          />
                          <rect
                            height="80"
                            rx="2"
                            strokeDasharray="2 3"
                            width="86"
                            x="106"
                            y="200"
                          />
                          <rect
                            height="80"
                            rx="2"
                            strokeDasharray="2 3"
                            width="86"
                            x="202"
                            y="200"
                          />
                          <path
                            d="M220 120 Q 250 100 270 80"
                            stroke="#d63031"
                            strokeWidth="1"
                          />
                          <text
                            fill="#d63031"
                            fontFamily="Caveat"
                            fontSize="14"
                            stroke="none"
                            x="230"
                            y="70"
                          >
                            Hero visual
                          </text>
                        </svg>
                        <div className="absolute bottom-4 left-4 font-hand text-primary/60 text-sm">
                          Scale 1:1
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="flex flex-col gap-6 order-1 md:order-2">
                    <div className="bg-white/60 border border-primary/10 p-5 shadow-sm rounded-sm">
                      <h3 className="font-serif text-xl text-primary font-bold mb-2">
                        {project.name}
                      </h3>
                      <p className="font-hand text-primary text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="bg-white/70 border border-primary/10 p-6 shadow-sm rounded-sm">
                      <h4 className="font-serif text-lg text-primary border-b-2 border-primary/10 pb-2 mb-3">
                        Specifications
                      </h4>
                      <ul className="font-hand text-primary space-y-2">
                        {project.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-sm mt-1 flex-shrink-0">
                              check_circle
                            </span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-dashed border-primary/20">
                        <p className="font-mono text-xs text-primary/60 uppercase tracking-widest">
                          Status: {project.status}
                        </p>
                      </div>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-auto font-bold text-primary border-b-2 border-primary hover:text-primary/70 transition-colors pb-1 font-serif text-lg group/link"
                      >
                        Visit Project
                        <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                          open_in_new
                        </span>
                      </a>
                    )}
                    {index === 0 && (
                      <Link
                        to="/case-study"
                        className="inline-flex items-center gap-2 mt-auto font-bold text-primary border-b-2 border-primary hover:text-primary/70 transition-colors pb-1 font-serif text-lg group/link"
                      >
                        View Full Case Study
                        <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer variant="project" />
    </div>
  );
}
