import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkest border-t border-primary-foreground/[0.06] py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="Capital Clean Logo" className="h-14 mx-auto md:mx-0 mb-3" loading="lazy" />
            <p className="text-primary-foreground/50 text-xs sm:text-sm leading-relaxed mt-2">
              Wellington & Hutt Valley's trusted pressure washing specialists.
            </p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <a href="https://instagram.com/capital_clean_pressure_washing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary-foreground/15 hover:border-sky hover:text-sky text-primary-foreground/50 transition-colors min-h-[44px] min-w-[44px]" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold text-sm mb-4">Services</h4>
            <div className="space-y-1.5">
              {['Driveway Cleaning', 'House Washing', 'Gutter Cleaning', 'Sidewalk Cleaning', 'Free Quote'].map((s) => (
                <button key={s} onClick={() => scrollToSection(s === 'Free Quote' ? 'contact' : 'services')} className="block text-primary-foreground/45 text-xs sm:text-sm hover:text-sky transition-colors min-h-[36px] flex items-center">{s}</button>
              ))}
              <Link to="/about" className="block text-primary-foreground/45 text-xs sm:text-sm hover:text-sky transition-colors min-h-[36px] flex items-center">About Us</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              {/* TODO: Replace with actual phone number */}
              <a href="https://wa.me/64XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-whatsapp font-semibold hover:brightness-110 min-h-[36px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +64 XX XXX XXXX
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@capitalclean.co.nz
              </p>
              <p className="flex items-center gap-2 text-primary-foreground/45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Wellington & Hutt Valley, NZ
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.06] mt-8 pt-5 flex flex-wrap justify-between gap-4">
          <p className="text-primary-foreground/30 text-xs">© 2026 Capital Clean Pressure Washing. All rights reserved.</p>
          <p className="text-primary-foreground/30 text-xs">Wellington & Hutt Valley, New Zealand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
