import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Results', action: () => scrollToSection('results') },
    { label: 'Reviews', action: () => scrollToSection('reviews') },
    { label: 'About', href: '/about' },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Capital Clean Pressure Washing Logo"
              className="h-14 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-primary-foreground font-heading font-extrabold text-lg block leading-tight">
                Capital Clean
              </span>
              <span className="text-sky-accent text-[11px] tracking-[2px] font-medium block">
                PRESSURE WASHING
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/85 hover:text-sky-accent transition-colors text-[15px] font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-primary-foreground/85 hover:text-sky-accent transition-colors text-[15px] font-medium"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block gradient-cta text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-lg hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all shimmer"
            >
              Get Free Quote
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-primary-foreground p-2"
              aria-label="Open menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[1100] bg-dark transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 relative">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-primary-foreground p-2"
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <img src="/logo.png" alt="Capital Clean Logo" className="h-16 mb-4" />

          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground text-2xl font-heading font-bold"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="text-primary-foreground text-2xl font-heading font-bold"
              >
                {link.label}
              </button>
            )
          )}

          <button
            onClick={() => scrollToSection('contact')}
            className="gradient-cta text-primary-foreground font-bold text-lg px-12 py-4 rounded-xl mt-4 w-[80%]"
          >
            Get Free Quote
          </button>

          <a
            href="https://wa.me/64XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 text-lg mt-2"
          >
            📞 Call/WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
