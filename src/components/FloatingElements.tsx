import { useState, useEffect } from 'react';

const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating — positioned higher on mobile to not overlap sticky CTA */}
      <div className="fixed bottom-[100px] md:bottom-7 right-4 md:right-6 z-[999]">
        <a
          href="https://wa.me/64XXXXXXXXX?text=Hi%20Capital%20Clean!%20I%20found%20your%20website%20and%20would%20like%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-whatsapp shadow-[0_8px_32px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-pulse-ring" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.234 0-4.308-.724-5.994-1.952l-.418-.312-2.646.887.887-2.646-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        </a>
        {showTooltip && (
          <div className="absolute right-[58px] md:right-[66px] top-1/2 -translate-y-1/2 bg-whatsapp text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap hidden md:block">
            Chat with us
            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-whatsapp" />
          </div>
        )}
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-[100px] md:bottom-7 left-4 md:left-6 z-[999] w-10 h-10 md:w-11 md:h-11 rounded-full bg-navy/85 backdrop-blur-sm border border-sky/20 text-primary-foreground hover:bg-primary transition-all flex items-center justify-center min-h-[44px] min-w-[44px] ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
      </button>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[998] bg-dark border-t border-sky/20 px-3 py-2 flex gap-2 md:hidden">
        <a href="tel:+64XXXXXXXXX" className="flex-1 bg-card text-navy font-bold text-sm text-center py-3 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Call Now
        </a>
        <a href="https://wa.me/64XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex-1 bg-whatsapp text-primary-foreground font-bold text-sm text-center py-3 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingElements;
