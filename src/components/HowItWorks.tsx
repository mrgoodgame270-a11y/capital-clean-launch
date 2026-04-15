const steps = [
  { num: 1, title: 'Get Your Quote', desc: 'Contact us via WhatsApp, call, or form for a fast, free quote.' },
  { num: 2, title: 'We Show Up', desc: 'Pick a time that works. We arrive fully equipped and on time.' },
  { num: 3, title: 'Spotless Results', desc: '100% satisfaction guaranteed — or we come back and redo it.' },
];

const HowItWorks = () => (
  <section className="bg-card py-14 md:py-20">
    <div className="container mx-auto">
      <div className="text-center mb-14 scroll-animate">
        <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">SIMPLE PROCESS</p>
        <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] text-navy">How It Works</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative max-w-3xl mx-auto">
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] border-t-2 border-dashed border-border" />
        {steps.map((step) => (
          <div key={step.num} className="scroll-animate text-center relative">
            <div className="w-20 h-20 rounded-full gradient-cta text-primary-foreground font-heading font-black text-[32px] flex items-center justify-center mx-auto mb-5 shadow-[0_8px_32px_rgba(26,111,212,0.3)] relative z-10">
              {step.num}
            </div>
            <h3 className="font-heading font-bold text-lg text-navy mb-2">{step.title}</h3>
            <p className="text-subtle text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
