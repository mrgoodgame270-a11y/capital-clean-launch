const features = [
  { icon: '🏆', title: '100% Satisfaction Guarantee', desc: "Not happy? We'll return and re-clean free." },
  { icon: '⚡', title: 'Fast & Reliable Service', desc: 'On-time arrivals and efficient work every visit.' },
  { icon: '💧', title: 'Professional Equipment', desc: 'Commercial-grade pressure washers for best results.' },
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Safe for your family, pets, and garden.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Honest quotes with no hidden fees. Ever.' },
  { icon: '📍', title: 'Local Wellington Business', desc: 'We know Wellington weather and surfaces.' },
];

const WhyChooseUs = () => (
  <section className="gradient-dark py-12 md:py-16 lg:py-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3 scroll-animate">WHY CAPITAL CLEAN</p>
          <h2 className="scroll-animate font-heading font-extrabold text-[28px] md:text-[40px] text-primary-foreground leading-tight">
            Wellington's Most Trusted Pressure Washing
          </h2>
          <div className="mt-10 space-y-6">
            {features.map((f, i) => (
              <div key={i} className="scroll-animate flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-sky/15 border border-sky/30 flex items-center justify-center text-2xl">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[17px] text-primary-foreground">{f.title}</h3>
                  <p className="text-primary-foreground/65 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center scroll-animate">
          <div className="w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full bg-primary-foreground/5 border-2 border-sky/30 shadow-[0_0_80px_rgba(56,189,248,0.15)] flex flex-col items-center justify-center relative">
            <div className="absolute inset-5 rounded-full border-2 border-dashed border-primary-foreground/15" />
            <div className="text-6xl mb-2">🏆</div>
            <p className="font-heading font-black text-[72px] text-gradient leading-none">100%</p>
            <p className="text-primary-foreground text-xl">Satisfaction</p>
            <p className="text-primary-foreground text-xl">Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
