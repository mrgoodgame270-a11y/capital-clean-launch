const services = [
  {
    icon: '🚗',
    name: 'Driveway Cleaning',
    description: 'Blast away oil stains, dirt, and grime from your driveway. We restore it to like-new condition.',
    features: ['Oil & stain removal', 'Concrete & asphalt safe', 'Same-day results'],
  },
  {
    icon: '🏠',
    name: 'House & Building Wash',
    description: 'Full exterior house washing removing mould, mildew, and dirt from your walls, siding, and surfaces.',
    features: ['Mould & mildew removal', 'Safe for all surfaces', 'Protects your paint'],
  },
  {
    icon: '🍃',
    name: 'Gutter Cleaning',
    description: 'Clear blocked gutters to prevent water damage and flooding. Fast, thorough, and fully safe.',
    features: ['Full debris removal', 'Downpipe flush', 'Damage prevention'],
  },
  {
    icon: '🛤️',
    name: 'Sidewalk Cleaning',
    description: 'Keep your paths, footpaths, and sidewalks clean and slip-free with our high-pressure wash service.',
    features: ['Algae & moss removal', 'Slip hazard elimination', 'Commercial & residential'],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="scroll-animate bg-card rounded-[20px] p-7 shadow-[0_4px_24px_rgba(13,31,92,0.08)] border border-sky/15 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,31,92,0.15)] hover:border-sky transition-all duration-300 group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary/10 to-sky/15 flex items-center justify-center text-[32px] mb-6">
                {service.icon}
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
