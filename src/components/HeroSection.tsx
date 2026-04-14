import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] h-screen max-h-[900px] gradient-hero overflow-hidden flex items-center">
      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary-foreground"
          style={{
            width: `${8 + i * 2}px`,
            height: `${8 + i * 2}px`,
            left: `${10 + i * 15}%`,
            bottom: `-20px`,
            opacity: 0.08 + i * 0.015,
            animation: `particle-rise ${8 + i * 3}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* Diagonal lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(30deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 42px)',
        }}
      />

      {/* Water splash shape - desktop */}
      <div
        className="hidden lg:block absolute right-[-100px] top-0 w-[60%] h-full pointer-events-none"
        style={{
          background: 'rgba(56,189,248,0.08)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 10% 100%, 25% 50%)',
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
            <div className="scroll-animate visible inline-block mb-6">
              <span className="inline-block bg-sky/15 border border-sky/40 rounded-full px-4 py-1.5 text-sky-accent text-[13px] font-semibold">
                ⭐ Wellington & Hutt Valley's #1 Choice
              </span>
            </div>

            <h1 className="scroll-animate visible font-heading font-black text-[38px] md:text-[50px] lg:text-[68px] leading-[1.05] tracking-tight">
              <span className="text-primary-foreground block">Wellington's</span>
              <span className="text-primary-foreground block">PRESSURE</span>
              <span className="text-gradient block">WASHING</span>
              <span className="text-primary-foreground block">EXPERTS</span>
            </h1>

            <p className="scroll-animate visible font-display text-sky-accent text-[22px] md:text-[28px] tracking-[4px] mt-4">
              "DRIVEWAY LICKIN GOOD"
            </p>

            <p className="scroll-animate visible text-primary-foreground/75 text-base md:text-lg leading-relaxed mt-5 max-w-[480px] mx-auto lg:mx-0">
              Professional exterior cleaning for driveways, houses, gutters & sidewalks. Serving Wellington & Hutt Valley — book your free quote today.
            </p>

            <div className="scroll-animate visible flex flex-col sm:flex-row gap-4 mt-9">
              <button
                onClick={scrollToContact}
                className="gradient-cta text-primary-foreground font-bold text-[17px] px-9 py-4 rounded-xl shadow-[0_8px_32px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(56,189,248,0.5)] transition-all shimmer w-full sm:w-auto"
              >
                Get Free Quote →
              </button>
              <a
                href="https://wa.me/64XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-[17px] px-8 py-3.5 rounded-xl hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all text-center w-full sm:w-auto"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="scroll-animate visible flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mt-8">
              {['Free Quotes', 'Satisfaction Guaranteed', 'Locally Owned & Operated'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <span className="text-success text-lg">✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Desktop only */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-[480px] h-[480px] rounded-full border-[3px] border-sky/30 shadow-[0_0_80px_rgba(56,189,248,0.2)] overflow-hidden animate-float">
              <img
                src={heroImage}
                alt="Pressure washing service Wellington"
                className="w-full h-full object-cover"
                width={480}
                height={480}
              />
            </div>

            {/* Review Card */}
            <div className="absolute -bottom-5 -left-10 bg-card rounded-2xl p-3.5 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] scroll-animate visible">
              <div className="text-amber text-base">⭐⭐⭐⭐⭐</div>
              <p className="font-heading font-bold text-sm text-navy mt-1">50+ Happy Customers</p>
              <p className="text-subtle text-xs">Wellington & Hutt Valley</p>
            </div>

            {/* Badge */}
            <div className="absolute top-5 -right-5 gradient-cta rounded-2xl p-4 px-5 shadow-[0_8px_32px_rgba(26,111,212,0.4)] text-center">
              <div className="text-2xl">🏆</div>
              <p className="text-primary-foreground font-heading font-black text-[22px]">100%</p>
              <p className="text-primary-foreground text-xs">Satisfaction</p>
              <p className="text-primary-foreground text-xs">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 text-2xl animate-bounce-down hidden md:block">
        ↓
      </div>
    </section>
  );
};

export default HeroSection;
