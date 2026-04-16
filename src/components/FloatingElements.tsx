import { useState, useEffect } from 'react';

const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
        <a href="tel:+64XXXXXXXXX" className="w-full bg-card text-navy font-bold text-sm text-center py-3 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Call Now
        </a>
      </div>
    </>
  );
};

export default FloatingElements;
