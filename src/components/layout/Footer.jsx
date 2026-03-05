import { Link } from "react-router-dom";

export default function Footer({ variant = "default" }) {
  if (variant === "project") {
    return (
      <footer className="relative pb-16 pt-24 px-4 overflow-visible bg-paper border-t-2 border-primary/10">
        <div
          className="absolute top-[-25px] left-0 w-full h-[25px] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'%3E%3Cpath d='M0,25 L0,20 C5,22 10,10 15,20 C20,10 25,22 30,12 C35,22 40,10 45,20 C50,10 55,22 60,12 C65,22 70,10 75,20 C80,10 85,22 90,12 C95,22 100,10 100,20 L100,25 Z' fill='%23f7f5f0' stroke='%231241a1' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            transform: "rotate(180deg)",
          }}
        />
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-4 mb-10">
            <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary py-2">
              256mg
              <span className="font-serif italic font-normal text-4xl">
                .studio
              </span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8 w-full">
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
          <p className="font-hand text-primary/60 text-lg">
            © 2024 Handcrafted Digital Experiences
          </p>
        </div>
      </footer>
    );
  }

  if (variant === "journal") {
    return (
      <footer className="mt-24 relative">
        <div className="ripped-edge bg-primary p-12 md:p-20 text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl">ink_pen</span>
            <div>
              <h3 className="font-serif text-3xl font-bold">256mg.studio</h3>
              <p className="font-hand text-lg text-white/70">Ink meets code.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 font-hand text-xl">
              <a className="hover:underline decoration-wavy" href="#">
                Instagram
              </a>
              <a className="hover:underline decoration-wavy" href="#">
                Studio Diary
              </a>
              <a className="hover:underline decoration-wavy" href="#">
                Archives
              </a>
            </div>
            <p className="font-hand text-sm opacity-50">
              © 2024. Hand-bound digital experiences.
            </p>
          </div>
        </div>
        <div
          className="coffee-ring absolute -top-8 right-1/4 opacity-10 pointer-events-none"
          style={{
            width: 120,
            height: 120,
            border: "3px solid rgba(111, 78, 55, 0.15)",
            top: "-2rem",
          }}
        ></div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="border-t border-primary/10 pt-16 pb-8 px-6 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
              ink_pen
            </span>
            <h3 className="font-serif text-2xl font-bold text-primary">
              256mg.studio
            </h3>
          </div>
          <div className="flex flex-col gap-2 text-primary/70 text-sm">
            <p>123 Creative Avenue, Suite 400</p>
            <p>New York, NY 10012</p>
            <a
              className="hover:text-primary hover:underline decoration-wavy mt-2 inline-block"
              href="mailto:mg256studio@gmail.com"
            >
              mg256studio@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-6 flex-1">
          <div className="flex flex-wrap gap-8">
            <a
              className="text-primary font-bold hover:underline decoration-wavy"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-primary font-bold hover:underline decoration-wavy"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-primary font-bold hover:underline decoration-wavy"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-primary font-bold hover:underline decoration-wavy"
              href="#"
            >
              Behance
            </a>
          </div>
          <p className="text-xs text-primary/40 text-right max-w-xs">
            © 2024 256mg.studio. Hand-coded with love &amp; plenty of coffee.
            All rights reserved.
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-4 right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 opacity-10 hover:opacity-100 transition-opacity duration-500 cursor-help"
        title="Meet Inky!"
      >
        <span className="material-symbols-outlined text-8xl text-primary rotate-12">
          cruelty_free
        </span>
      </div>
    </footer>
  );
}
