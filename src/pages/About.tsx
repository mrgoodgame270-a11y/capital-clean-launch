import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import aboutTeam from '@/assets/about-team.jpg';
import serviceGutter from '@/assets/service-gutter.jpg';

const AboutPage = () => {
  useScrollAnimation();

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pb-20">
        <div className="container mx-auto text-center">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">ABOUT US</p>
          <h1 className="font-heading font-black text-[36px] md:text-[56px] text-primary-foreground leading-tight">
            Wellington's Local<br />Pressure Washing Experts
          </h1>
          <p className="text-primary-foreground/70 text-lg mt-4 max-w-xl mx-auto">
            Proudly serving Wellington & Hutt Valley homes and businesses with professional exterior cleaning services.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <img src={aboutTeam} alt="Capital Clean team" className="rounded-2xl shadow-lg w-full h-auto object-cover" loading="lazy" width={1200} height={700} />
            </div>
            <div className="scroll-animate">
              <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">OUR STORY</p>
              <h2 className="font-heading font-extrabold text-[28px] md:text-[40px] text-navy leading-tight">
                Born & Raised in Wellington
              </h2>
              <p className="text-subtle text-base leading-relaxed mt-5">
                Capital Clean Pressure Washing was founded with a simple mission — to help Wellington homeowners and businesses keep their properties looking their best. We know how quickly New Zealand weather can turn driveways, walls, and gutters into a mess.
              </p>
              <p className="text-subtle text-base leading-relaxed mt-4">
                That's why we invested in professional, commercial-grade equipment and eco-friendly cleaning products. Our team takes pride in every single job, treating your property like it's our own. From Lower Hutt to Karori, Petone to Johnsonville — we've helped 50+ properties across the region shine.
              </p>
              <p className="text-subtle text-base leading-relaxed mt-4">
                We're not just cleaners — we're your neighbours. Locally owned, operated, and committed to making Wellington homes look their absolute best.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { val: '50+', label: 'Properties Cleaned' },
                  { val: '100%', label: 'Satisfaction Rate' },
                  { val: '5★', label: 'Average Rating' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-heading font-black text-3xl text-navy">{s.val}</p>
                    <p className="text-subtle text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-icy py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">OUR VALUES</p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-navy">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💎', title: 'Quality First', desc: 'We never cut corners. Every job gets 100% effort and attention to detail.' },
              { icon: '🤝', title: 'Honest & Transparent', desc: 'No hidden fees, no bait-and-switch. The quote we give is the price you pay.' },
              { icon: '🌱', title: 'Eco-Responsible', desc: 'We use eco-friendly, biodegradable cleaning agents that are safe for your garden and pets.' },
              { icon: '⏰', title: 'Reliable & Punctual', desc: 'We show up on time, every time. Your time is valuable and we respect it.' },
              { icon: '🛡️', title: 'Fully Insured', desc: 'Work with confidence — we carry full public liability insurance for your peace of mind.' },
              { icon: '💬', title: 'Great Communication', desc: 'We keep you informed every step of the way. No surprises, just results.' },
            ].map((v, i) => (
              <div key={i} className="scroll-animate bg-card rounded-[20px] p-7 shadow-[0_4px_24px_rgba(13,31,92,0.08)] border border-sky/15 hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-xl text-navy">{v.title}</h3>
                <p className="text-subtle text-[15px] leading-relaxed mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="gradient-dark py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">OUR EQUIPMENT</p>
              <h2 className="font-heading font-extrabold text-[28px] md:text-[40px] text-primary-foreground leading-tight">
                Professional Grade Tools for Professional Results
              </h2>
              <p className="text-primary-foreground/65 text-base leading-relaxed mt-5">
                We don't use household pressure washers. Our commercial-grade machines deliver up to 4,000 PSI of cleaning power, adjustable for every surface type — from delicate weatherboard to tough concrete.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Commercial-grade 4,000 PSI pressure washers',
                  'Surface cleaners for streak-free flat surfaces',
                  'Extension poles for 2-storey houses',
                  'Eco-friendly, biodegradable detergents',
                  'Hot water capability for oil & grease removal',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                    <span className="text-success">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="gradient-cta text-primary-foreground font-bold text-base px-8 py-3.5 rounded-xl mt-8 hover:scale-[1.04] transition-all shimmer"
              >
                Get a Free Quote →
              </button>
            </div>
            <div className="scroll-animate">
              <img src={serviceGutter} alt="Professional gutter cleaning service" className="rounded-2xl shadow-lg w-full h-auto object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </div>
  );
};

export default AboutPage;
