const features = [
  {
    title: '100% Satisfaction Guarantee',
    desc: "Not happy? We re-clean for free.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 1012 0V2z"/>
      </svg>
    ),
  },
  {
    title: 'Professional Equipment',
    desc: 'Commercial-grade washers for best results.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly & Safe',
    desc: 'Safe for your family, pets, and garden.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"/>
      </svg>
    ),
  },
  {
    title: 'Local Wellington Business',
    desc: 'We know the weather and surfaces here.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const WhyChooseUs = () => (
  <section className="gradient-dark py-14 md:py-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3 scroll-animate">WHY CAPITAL CLEAN</p>
          <h2 className="scroll-animate font-heading font-extrabold text-[26px] sm:text-[28px] md:text-[38px] text-primary-foreground leading-tight">
            Wellington's Trusted Clean
          </h2>
          <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
            {features.map((f, i) => (
              <div key={i} className="scroll-animate flex gap-3 sm:gap-4 items-start">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-sky/15 border border-sky/30 flex items-center justify-center text-sky-accent">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-primary-foreground">{f.title}</h3>
                  <p className="text-primary-foreground/55 text-xs sm:text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center scroll-animate">
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-primary-foreground/5 border-2 border-sky/25 shadow-[0_0_60px_rgba(56,189,248,0.12)] flex flex-col items-center justify-center relative">
            <div className="absolute inset-4 sm:inset-5 rounded-full border-2 border-dashed border-primary-foreground/10" />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(199,92%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1 sm:mb-2 md:w-10 md:h-10">
              <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 1012 0V2z"/>
            </svg>
            <p className="font-heading font-black text-[48px] sm:text-[56px] md:text-[72px] text-gradient leading-none">100%</p>
            <p className="text-primary-foreground text-sm sm:text-base md:text-lg">Satisfaction</p>
            <p className="text-primary-foreground/70 text-xs sm:text-sm">Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
