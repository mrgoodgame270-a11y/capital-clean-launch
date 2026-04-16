const CTABanner = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-banner py-14 md:py-20 relative overflow-hidden">
      <div className="absolute -right-[100px] -bottom-[100px] w-[300px] h-[300px] rounded-full bg-primary-foreground/[0.06]" />
      <div className="absolute -left-[150px] -top-[150px] w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.06]" />

      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="scroll-animate font-heading font-black text-[26px] sm:text-[30px] md:text-[46px] text-primary-foreground leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}>
          Ready to Transform<br className="hidden sm:block" /> Your Property?
        </h2>
        <p className="scroll-animate text-primary-foreground/75 text-xs sm:text-sm md:text-base mt-3 max-w-md mx-auto">
          Join 50+ happy Wellington homeowners. Free quote in 60 seconds.
        </p>
        <div className="scroll-animate flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8">
          <button onClick={scrollToContact} className="bg-card text-primary font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all min-h-[44px] w-full sm:w-auto">
            Get Free Quote
          </button>
          <a href="https://wa.me/64XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-primary-foreground font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            WhatsApp Us
          </a>
        </div>
        <p className="text-primary-foreground/60 text-xs mt-5">
          ⭐⭐⭐⭐⭐ 5-Star Rated · Free Quotes · Satisfaction Guaranteed
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
