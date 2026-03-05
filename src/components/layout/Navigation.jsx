import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LogoSvg = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-300 group-hover:-rotate-12" viewBox="-10 -30 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,40 C20,70 40,85 75,80 C100,75 110,50 105,30" stroke="currentColor" strokeLinecap="round" strokeWidth="8" />
    <path d="M20,40 L30,10 L105,30" stroke="currentColor" strokeLinecap="round" strokeWidth="8" />
    <path d="M105,35 C115,35 125,45 120,60 C115,75 100,75 90,70" stroke="currentColor" strokeLinecap="round" strokeWidth="6" />
    <path d="M45,0 Q50,-10 45,-20" opacity="0.7" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
    <path d="M65,5 Q70,-5 65,-15" opacity="0.7" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
    <path d="M85,10 Q90,0 85,-10" opacity="0.7" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
  </svg>
);

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
];

const overlayLinks = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/studio', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const location = useLocation();

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return (
    <>
      {/* Overlay Navigation */}
      <div className={`overlay-nav ${isOverlayOpen ? 'active' : ''}`} id="navOverlay">
        <div className="sketchbook-spread">
          <div className="sketchbook-spine"></div>
          <div className="sketchbook-page items-start pl-12 md:pl-20 justify-center w-full">
            <div className="coffee-stain"></div>
            <button className="sketchbook-close" onClick={closeOverlay}>
              <span className="material-symbols-outlined text-4xl font-bold">close</span>
            </button>
            <nav className="flex flex-col gap-2 relative z-10">
              {overlayLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`sketchbook-nav-link group ${location.pathname === link.to ? 'active' : ''}`}
                  onClick={closeOverlay}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm bg-paper/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <LogoSvg />
            <span className="font-serif font-bold text-xl tracking-tight text-primary">256mg.studio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium relative group transition-colors ${isActive ? 'text-primary font-bold' : 'hover:text-primary'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex hand-drawn-border-sm px-5 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-0.5 sketch-shadow"
            >
              Let's Talk
            </Link>
            <button
              className="text-primary hover:rotate-90 transition-transform duration-300"
              onClick={openOverlay}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
