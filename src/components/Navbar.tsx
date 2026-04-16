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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
          scrolled ? 'bg-dark/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
        style={{ height: '64px' }}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="Capital Clean Logo" className="h-9 sm:h-11 w-auto" loading="lazy" />
            <div>
              <span className="text-primary-foreground font-heading font-extrabold text-sm sm:text-base block leading-tight">
                Capital Clean
              </span>
              <span className="text-sky-accent text-[9px] sm:text-[10px] tracking-[2px] font-medium block">
                PRESSURE WASHING
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href ? (
                <Link key={link.label} to={link.href} className="text-primary-foreground/80 hover:text-sky-accent transition-colors text-[14px] font-medium">
                  {link.label}
                </Link>
              ) : (
                <button key={link.label} onClick={link.action} className="text-primary-foreground/80 hover:text-sky-accent transition-colors text-[14px] font-medium">
                  {link.label}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block gradient-cta text-primary-foreground font-bold text-sm px-5 py-2 rounded-lg hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all min-h-[40px]"
            >
              Get Free Quote
            </button>
            <button onClick={() => setMenuOpen(true)} className="lg:hidden text-primary-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Open menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[1100] bg-dark transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-5 relative px-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-primary-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Close menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <img src="/logo.png" alt="Capital Clean Logo" className="h-14 mb-3" loading="lazy" />
          {navLinks.map((link) =>
            link.href ? (
              <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className="text-primary-foreground text-xl font-heading font-bold min-h-[44px] flex items-center">{link.label}</Link>
            ) : (
              <button key={link.label} onClick={link.action} className="text-primary-foreground text-xl font-heading font-bold min-h-[44px] flex items-center">{link.label}</button>
            )
          )}
          <button onClick={() => scrollToSection('contact')} className="gradient-cta text-primary-foreground font-bold text-lg px-10 py-3.5 rounded-xl mt-3 w-full max-w-[300px] min-h-[44px]">
            Get Free Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
