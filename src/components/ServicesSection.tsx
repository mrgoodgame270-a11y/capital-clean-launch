const services = [
  {
    name: 'Driveway Cleaning',
    description: 'Blast away oil stains, dirt, and grime — restored to like-new condition.',
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16M6 20V8l6-4 6 4v12" /><path d="M9 20v-4h6v4" /><path d="M10 12h4" />
      </svg>
    ),
  },
  {
    name: 'House & Building Wash',
    description: 'Full exterior wash removing mould, mildew, and years of buildup.',
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Gutter Cleaning',
    description: 'Clear blocked gutters to prevent water damage and costly flooding.',
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4v16M17 4v16M3 8h4M17 8h4M3 16h4M17 16h4M7 8h10M7 16h10" />
      </svg>
    ),
  },
  {
    name: 'Sidewalk Cleaning',
    description: 'Keep paths clean and slip-free with high-pressure treatment.',
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19h16" /><path d="M4 15h16" /><path d="M8 11h8" /><path d="M10 7h4" /><path d="M12 3v4" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-icy py-14 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">WHAT WE DO</p>
          <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] text-navy">Our Services</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={scrollToContact}
              className="scroll-animate bg-card rounded-2xl p-6 md:p-7 shadow-[0_2px_16px_rgba(13,31,92,0.06)] border border-transparent hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(56,189,248,0.15)] hover:border-sky/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-sky/15 flex items-center justify-center mb-5 text-primary group-hover:from-primary/20 group-hover:to-sky/25 transition-all">
                {service.iconSvg}
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-navy">{service.name}</h3>
              <p className="text-subtle text-sm leading-relaxed mt-2">{service.description}</p>
              <span className="text-primary font-semibold text-sm mt-4 block group-hover:text-sky transition-colors">
                Get Quote →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
