import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:h-screen lg:max-h-[900px] gradient-hero overflow-hidden flex items-center">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(30deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 62px)',
      }} />

      {/* Water splash shape - desktop */}
      <div className="hidden lg:block absolute right-[-100px] top-0 w-[55%] h-full pointer-events-none" style={{
        background: 'rgba(56,189,248,0.06)',
        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 10% 100%, 25% 50%)',
      }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-[560px] mx-auto lg:mx-0 pt-24 lg:pt-0">
            <h1 className="scroll-animate visible font-heading font-black text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight">
              <span className="text-primary-foreground block">Pressure Washing</span>
              <span className="text-primary-foreground block">in Wellington &</span>
              <span className="text-gradient block">Hutt Valley</span>
            </h1>

            <p className="scroll-animate visible text-primary-foreground/50 text-sm sm:text-base tracking-widest mt-3 font-medium">
              Driveways · Houses · Gutters · Sidewalks
            </p>

            <p className="scroll-animate visible text-primary-foreground/40 text-xs sm:text-sm mt-2 max-w-[400px] mx-auto lg:mx-0 leading-relaxed">
              Fast quotes, careful cleaning, and a finish that makes your property look brand new.
            </p>

            <div className="scroll-animate visible flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={scrollToContact}
                className="gradient-cta text-primary-foreground font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(56,189,248,0.5)] transition-all shimmer w-full sm:w-auto min-h-[44px]"
              >
                Get Free Quote
              </button>
              <a
                href="https://wa.me/64XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-whatsapp/60 text-whatsapp font-semibold text-[15px] px-7 py-3 rounded-xl hover:bg-whatsapp/10 hover:border-whatsapp transition-all text-center w-full sm:w-auto flex items-center justify-center gap-2 min-h-[44px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.234 0-4.308-.724-5.994-1.952l-.418-.312-2.646.887.887-2.646-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp Us
              </a>
            </div>

            <div className="scroll-animate visible flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-5">
              {['Free Quotes', '100% Satisfaction', 'Same Week Service'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-primary-foreground/60 text-xs sm:text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(142,71%,45%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content — visible on all screens */}
          <div className="flex items-center justify-center relative mt-2 lg:mt-0">
            <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border-[3px] border-sky/25 shadow-[0_0_60px_rgba(56,189,248,0.15)] overflow-hidden animate-float">
              <img
                src={heroImage}
                alt="Professional pressure washing in Wellington"
                className="w-full h-full object-cover"
                width={440}
                height={440}
                loading="eager"
              />
            </div>

            {/* Review Card — desktop only */}
            <div className="hidden lg:block absolute -bottom-5 -left-10 bg-card rounded-2xl p-3.5 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="text-amber text-base">⭐⭐⭐⭐⭐</div>
              <p className="font-heading font-bold text-sm text-navy mt-1">50+ Happy Customers</p>
              <p className="text-subtle text-xs">Wellington & Hutt Valley</p>
            </div>

            {/* Badge — desktop only */}
            <div className="hidden lg:block absolute top-5 -right-5 gradient-cta rounded-2xl p-4 px-5 shadow-[0_8px_32px_rgba(26,111,212,0.4)] text-center whitespace-nowrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 1012 0V2z"/></svg>
              <p className="text-primary-foreground font-heading font-black text-[22px]">100%</p>
              <p className="text-primary-foreground/90 text-xs">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/30 animate-bounce-down hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
};

export default HeroSection;
