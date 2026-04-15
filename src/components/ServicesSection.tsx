const services = [
  {
    name: 'Driveway Cleaning',
    description: 'Blast away oil stains, dirt, and grime from your driveway. We restore it to like-new condition.',
    features: ['Oil & stain removal', 'Concrete & asphalt safe', 'Same-day results'],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14" /><path d="M9 9h1M9 13h1M9 17h1" />
      </svg>
    ),
  },
  {
    name: 'House & Building Wash',
    description: 'Full exterior house washing removing mould, mildew, and dirt from your walls, siding, and surfaces.',
    features: ['Mould & mildew removal', 'Safe for all surfaces', 'Protects your paint'],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Gutter Cleaning',
    description: 'Clear blocked gutters to prevent water damage and flooding. Fast, thorough, and fully safe.',
    features: ['Full debris removal', 'Downpipe flush', 'Damage prevention'],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Sidewalk Cleaning',
    description: 'Keep your paths, footpaths, and sidewalks clean and slip-free with our high-pressure wash service.',
    features: ['Algae & moss removal', 'Slip hazard elimination', 'Commercial & residential'],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M4 19h16M4 15h16M7 11l5-7 5 7" /><path d="M12 4v7" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-icy py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">WHAT WE DO</p>
          <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-navy">Our Cleaning Services</h2>
          <p className="text-subtle text-lg mt-3 max-w-[500px] mx-auto">
            Professional exterior cleaning for every part of your property
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="scroll-animate bg-card rounded-[20px] p-7 shadow-[0_4px_24px_rgba(13,31,92,0.08)] border border-sky/15 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,31,92,0.15)] hover:border-sky transition-all duration-300 group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary/10 to-sky/15 flex items-center justify-center mb-6">
                {service.iconSvg}
              </div>
              <h3 className="font-heading font-bold text-[22px] text-navy">{service.name}</h3>
              <p className="text-subtle text-[15px] leading-relaxed mt-3">{service.description}</p>
              <ul className="mt-4 space-y-1">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-navy">
                    <span className="text-success mr-2">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="text-primary font-semibold text-sm mt-6 block group-hover:text-sky transition-colors"
              >
                Get Quote →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
