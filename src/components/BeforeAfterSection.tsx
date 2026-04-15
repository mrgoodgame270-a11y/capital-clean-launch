import { useState, useRef, useCallback } from 'react';
import beforeAfterDriveway from '@/assets/before-after-driveway.jpg';
import beforeAfterHouse from '@/assets/before-after-house.jpg';
import beforeAfterSidewalk from '@/assets/before-after-sidewalk.jpg';

const comparisons = [
  { image: beforeAfterDriveway, label: 'Driveway Cleaning — Petone, Lower Hutt' },
  { image: beforeAfterHouse, label: 'House Washing — Karori, Wellington' },
  { image: beforeAfterSidewalk, label: 'Sidewalk Cleaning — Johnsonville, Wellington' },
];

const BeforeAfterSlider = ({ image, label }: { image: string; label: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const handlePointerMove = (e: React.PointerEvent) => { if (dragging.current) updatePosition(e.clientX); };
  const handlePointerUp = () => { dragging.current = false; };

  return (
    <div className="scroll-animate rounded-2xl overflow-hidden group">
      <div
        ref={containerRef}
        className="relative h-[280px] md:h-[360px] overflow-hidden cursor-col-resize select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Full "after" image behind */}
        <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={600} />
        {/* "before" overlay with grayscale + dark tint */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={image} alt={label} className="w-full h-full object-cover grayscale brightness-50" loading="lazy" width={800} height={600} />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-dark/70 backdrop-blur-sm text-primary-foreground text-[10px] font-bold tracking-[2px] px-3 py-1 rounded-full">
          BEFORE
        </span>
        <span className="absolute top-3 right-3 bg-primary/70 backdrop-blur-sm text-primary-foreground text-[10px] font-bold tracking-[2px] px-3 py-1 rounded-full">
          AFTER
        </span>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-primary-foreground/80 pointer-events-none" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(222,74%,21%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8l4 4-4 4"/><path d="M6 8l-4 4 4 4"/></svg>
          </div>
        </div>
      </div>
      <div className="bg-primary-foreground/5 px-5 py-3">
        <p className="text-primary-foreground/70 text-sm font-medium">{label}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="bg-dark-navy py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">SEE THE DIFFERENCE</p>
          <h2 className="font-heading font-extrabold text-[30px] md:text-[44px] text-primary-foreground">Before & After</h2>
          <p className="text-primary-foreground/40 text-sm mt-2">Drag the slider to reveal the transformation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((item, i) => (
            <BeforeAfterSlider key={i} image={item.image} label={item.label} />
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={scrollToContact}
            className="gradient-cta text-primary-foreground font-bold text-[16px] px-10 py-4 rounded-xl shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 transition-all shimmer"
          >
            Get These Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
