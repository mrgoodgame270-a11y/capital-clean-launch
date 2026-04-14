import beforeAfterDriveway from '@/assets/before-after-driveway.jpg';
import beforeAfterHouse from '@/assets/before-after-house.jpg';
import beforeAfterSidewalk from '@/assets/before-after-sidewalk.jpg';

const comparisons = [
  { image: beforeAfterDriveway, label: 'Driveway Cleaning — Petone, Lower Hutt' },
  { image: beforeAfterHouse, label: 'House Washing — Karori, Wellington' },
  { image: beforeAfterSidewalk, label: 'Sidewalk Cleaning — Johnsonville, Wellington' },
];

const BeforeAfterSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="bg-dark-navy py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">SEE THE DIFFERENCE</p>
          <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-primary-foreground">Before & After Results</h2>
          <p className="text-primary-foreground/60 text-lg mt-3">Real results from real Wellington properties</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((item, i) => (
            <div key={i} className="scroll-animate rounded-[20px] overflow-hidden group">
              <div className="relative h-[260px] md:h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                {/* Before label */}
                <span className="absolute top-0 left-0 bg-destructive/90 text-primary-foreground text-[11px] font-bold tracking-[2px] px-3 py-1 rounded-br-lg">
                  BEFORE
                </span>
                {/* After label */}
                <span className="absolute top-0 right-0 bg-success/90 text-primary-foreground text-[11px] font-bold tracking-[2px] px-3 py-1 rounded-bl-lg">
                  AFTER
                </span>
                {/* Center divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-primary-foreground shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center text-navy font-bold text-lg">
                    ⟺
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/5 px-5 py-4">
                <p className="text-primary-foreground/80 text-sm font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="gradient-cta text-primary-foreground font-bold text-[17px] px-10 py-4 rounded-xl shadow-[0_8px_32px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 transition-all shimmer"
          >
            Get These Results →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
