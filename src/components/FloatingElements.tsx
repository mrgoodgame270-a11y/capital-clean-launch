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
      {/* WhatsApp Floating */}
      <div className="fixed bottom-28 md:bottom-7 right-6 z-[999]">
        <a
          href="https://wa.me/64XXXXXXXXX?text=Hi%20Capital%20Clean!%20I%20found%20your%20website%20and%20would%20like%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-[60px] h-[60px] rounded-full bg-whatsapp shadow-[0_8px_32px_rgba(37,211,102,0.45)] flex items-center justify-center hover:scale-110 transition-transform"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-pulse-ring" />
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white" className="relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.234 0-4.308-.724-5.994-1.952l-.418-.312-2.646.887.887-2.646-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        </a>
        {showTooltip && (
          <div className="absolute right-[70px] top-1/2 -translate-y-1/2 bg-whatsapp text-primary-foreground text-[13px] font-semibold px-3.5 py-2 rounded-lg whitespace-nowrap">
            Chat with us!
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-whatsapp" />
          </div>
        )}
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-28 md:bottom-7 left-6 z-[999] w-12 h-12 rounded-full bg-navy/85 backdrop-blur-sm border border-sky/30 text-primary-foreground text-lg hover:bg-primary transition-all ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[998] bg-dark border-t-2 border-sky/30 px-4 py-3 flex gap-2.5 md:hidden">
        <a href="tel:+64XXXXXXXXX" className="flex-1 bg-card text-navy font-bold text-center py-3.5 rounded-xl">
          📞 Call Now
        </a>
        <a href="https://wa.me/64XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex-1 bg-whatsapp text-primary-foreground font-bold text-center py-3.5 rounded-xl">
          💬 WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingElements;
