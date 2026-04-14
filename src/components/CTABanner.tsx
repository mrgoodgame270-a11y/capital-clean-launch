const CTABanner = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-banner py-16 md:py-20 relative overflow-hidden">
      <div className="absolute -right-[100px] -bottom-[100px] w-[300px] h-[300px] rounded-full bg-primary-foreground/[0.08]" />
      <div className="absolute -left-[150px] -top-[150px] w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.08]" />

      <div className="container mx-auto text-center relative z-10">
        <div className="text-6xl mb-4">✨</div>
        <h2 className="scroll-animate font-heading font-black text-[32px] md:text-5xl text-primary-foreground" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
          Ready to Transform Your Property?
        </h2>
        <p className="scroll-animate text-primary-foreground/85 text-lg mt-4 max-w-lg mx-auto">
          Join 50+ happy Wellington homeowners. Get your free quote in under 60 seconds.
        </p>
        <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={scrollToContact}
            className="bg-card text-primary font-extrabold text-lg px-11 py-4.5 rounded-xl hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            Get Free Quote Now
          </button>
          <a
            href="https://wa.me/64XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground font-bold text-lg px-11 py-4.5 rounded-xl hover:brightness-110 transition-all text-center"
          >
            💬 WhatsApp Us
          </a>
        </div>
        <p className="text-primary-foreground/75 text-sm mt-8">
          ⭐⭐⭐⭐⭐  5-Star Rated · Free Quotes · Satisfaction Guaranteed
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
