import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkest py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="Capital Clean Logo" className="h-20 mx-auto md:mx-0 mb-4" />
            <p className="text-sky-accent italic font-display text-lg">"Spotless. Every Time."</p>
            <p className="text-primary-foreground/65 text-sm leading-relaxed mt-3">
              Wellington & Hutt Valley's trusted pressure washing specialists. Driveways, houses, gutters & sidewalks.
            </p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/capital_clean_pressure_washing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:border-sky hover:text-sky text-primary-foreground/60 transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/capitalcleanpw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:border-sky hover:text-sky text-primary-foreground/60 transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold text-[15px] mb-4">Services</h4>
            <div className="space-y-2">
              {['Driveway Cleaning', 'House Washing', 'Gutter Cleaning', 'Sidewalk Cleaning', 'Free Quote'].map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s === 'Free Quote' ? 'contact' : 'services')}
                  className="block text-primary-foreground/60 text-sm hover:text-sky transition-colors"
                >
                  {s}
                </button>
              ))}
              <Link to="/about" className="block text-primary-foreground/60 text-sm hover:text-sky transition-colors">About Us</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold text-[15px] mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/64XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-whatsapp font-bold hover:brightness-110">
                📱 +64 XX XXX XXXX
              </a>
              <p className="flex items-center gap-2.5 text-primary-foreground/60">📧 hello@capitalclean.co.nz</p>
              <p className="flex items-center gap-2.5 text-primary-foreground/60">📍 Wellington & Hutt Valley, NZ</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.08] mt-10 pt-6 flex flex-wrap justify-between gap-4">
          <p className="text-primary-foreground/40 text-[13px]">© 2026 Capital Clean Pressure Washing. All rights reserved.</p>
          <p className="text-primary-foreground/40 text-[13px]">Wellington & Hutt Valley, New Zealand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
