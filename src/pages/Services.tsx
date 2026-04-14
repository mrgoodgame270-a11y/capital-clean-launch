import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ContactSection from '@/components/ContactSection';
import beforeAfterDriveway from '@/assets/before-after-driveway.jpg';
import beforeAfterHouse from '@/assets/before-after-house.jpg';
import beforeAfterSidewalk from '@/assets/before-after-sidewalk.jpg';
import serviceGutter from '@/assets/service-gutter.jpg';

const services = [
  {
    icon: '🚗',
    title: 'Driveway Cleaning',
    image: beforeAfterDriveway,
    desc: "Your driveway is the first thing visitors see. Over time, oil stains, moss, algae, and built-up grime can make it look worn and neglected. Our professional driveway cleaning service uses commercial-grade pressure washers to blast away years of buildup, revealing the clean surface underneath.",
    features: ['Oil & grease stain removal', 'Concrete, asphalt & paver cleaning', 'Moss & algae treatment', 'Same-day visible results', 'Non-slip surface restoration'],
    price: 'From $80',
  },
  {
    icon: '🏠',
    title: 'House & Building Wash',
    image: beforeAfterHouse,
    desc: "Wellington's damp climate means mould, mildew, and algae love to grow on your exterior walls. Our soft-wash house cleaning is safe for all surfaces including weatherboard, brick, render, and plaster. We adjust pressure settings to protect your paint while removing every trace of grime.",
    features: ['Mould & mildew removal', 'Safe for weatherboard & render', 'Protects existing paintwork', 'Windows & frames included', '2-storey capability'],
    price: 'From $150',
  },
  {
    icon: '🍃',
    title: 'Gutter Cleaning',
    image: serviceGutter,
    desc: "Blocked gutters can cause serious water damage to your roof, walls, and foundations. Our gutter cleaning service removes all leaves, debris, and buildup, then flushes downpipes to ensure proper water flow. We inspect for damage and report any issues we find.",
    features: ['Full debris & leaf removal', 'Downpipe flush & check', 'Gutter inspection for damage', 'Before & after photos', 'Prevent costly water damage'],
    price: 'From $100',
  },
  {
    icon: '🛤️',
    title: 'Sidewalk & Path Cleaning',
    image: beforeAfterSidewalk,
    desc: "Slippery, moss-covered pathways are a safety hazard. Our sidewalk cleaning eliminates algae, moss, and grime from all types of paths and footpaths. Perfect for residential properties and commercial premises looking to keep entrances safe and inviting.",
    features: ['Algae & moss removal', 'Slip hazard elimination', 'All path materials welcome', 'Commercial & residential', 'Entrance areas & car parks'],
    price: 'From $60',
  },
];

const ServicesPage = () => {
  useScrollAnimation();

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pb-20">
        <div className="container mx-auto text-center">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">OUR SERVICES</p>
          <h1 className="font-heading font-black text-[36px] md:text-[56px] text-primary-foreground leading-tight">
            Professional Exterior<br />Cleaning Services
          </h1>
          <p className="text-primary-foreground/70 text-lg mt-4 max-w-xl mx-auto">
            From driveways to gutters — we have the right solution for every part of your property.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <section key={i} className={`${i % 2 === 0 ? 'bg-card' : 'bg-icy'} py-12 md:py-20`}>
          <div className="container mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''}`}>
              <div className="scroll-animate">
                <img src={service.image} alt={service.title} className="rounded-2xl shadow-lg w-full h-auto object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div className="scroll-animate">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="font-heading font-extrabold text-[28px] md:text-[40px] text-navy leading-tight">{service.title}</h2>
                <span className="inline-block gradient-cta text-primary-foreground font-bold text-sm px-4 py-1.5 rounded-full mt-3">{service.price}</span>
                <p className="text-subtle text-base leading-relaxed mt-5">{service.desc}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-navy text-sm font-medium">
                      <span className="text-success text-lg">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gradient-cta text-primary-foreground font-bold text-base px-8 py-3.5 rounded-xl mt-8 hover:scale-[1.04] transition-all shimmer"
                >
                  Get a Free Quote →
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default ServicesPage;
