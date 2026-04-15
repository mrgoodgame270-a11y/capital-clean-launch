const steps = [
  {
    num: 1,
    title: 'Get Your Free Quote',
    desc: "Contact us via WhatsApp, call, or our form. Tell us what needs cleaning — we'll give you a fast, free, no-obligation quote.",
  },
  {
    num: 2,
    title: 'Schedule Your Clean',
    desc: "Pick a time that works for you. We'll arrive on time, fully equipped and ready to transform your property.",
  },
  {
    num: 3,
    title: 'Enjoy the Results',
    desc: 'We leave your property spotless. Simple as that. 100% satisfaction guaranteed or we come back.',
  },
];

const HowItWorks = () => (
  <section className="bg-card py-12 md:py-16 lg:py-20">
    <div className="container mx-auto">
      <div className="text-center mb-12 scroll-animate">
        <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">SIMPLE PROCESS</p>
        <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-navy">How It Works</h2>
        <p className="text-subtle text-lg mt-3">Getting your property cleaned is easier than you think</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] border-t-2 border-dashed border-border" />

        {steps.map((step) => (
          <div key={step.num} className="scroll-animate text-center relative">
            <div className="w-20 h-20 rounded-full gradient-cta text-primary-foreground font-heading font-black text-[32px] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(26,111,212,0.3)] relative z-10">
              {step.num}
            </div>
            <h3 className="font-heading font-bold text-xl text-navy mb-3">{step.title}</h3>
            <p className="text-subtle text-[15px] leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
