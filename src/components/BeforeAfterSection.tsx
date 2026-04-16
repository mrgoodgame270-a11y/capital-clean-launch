import { useState, useRef, useCallback } from 'react';
import baDriveway from '@/assets/ba-driveway.jpg';
import baHouse from '@/assets/ba-house.jpg';
import baTransform from '@/assets/ba-transform.jpg';
import baSidewalk from '@/assets/ba-sidewalk.jpg';
import baExtra from '@/assets/ba-extra.jpg';

const comparisons = [
  { image: baDriveway, label: 'Driveway Cleaning — Petone, Lower Hutt' },
  { image: baHouse, label: 'House Washing — Karori, Wellington' },
  { image: baSidewalk, label: 'Sidewalk Cleaning — Johnsonville, Wellington' },
  { image: baTransform, label: 'Property Transformation — Wellington' },
  { image: baExtra, label: 'Exterior Cleaning — Hutt Valley' },
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
        className="relative h-[260px] sm:h-[300px] md:h-[360px] overflow-hidden cursor-col-resize select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={image} alt={label} className="w-full h-full object-cover grayscale brightness-50" loading="lazy" width={800} height={600} />
        </div>

        <span className="absolute top-3 left-3 bg-dark/70 backdrop-blur-sm text-primary-foreground text-[10px] font-bold tracking-[2px] px-3 py-1 rounded-full">
          BEFORE
        </span>
        <span className="absolute top-3 right-3 bg-primary/70 backdrop-blur-sm text-primary-foreground text-[10px] font-bold tracking-[2px] px-3 py-1 rounded-full">
          AFTER
        </span>

        {/* Divider line + handle (min 44px touch target) */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-primary-foreground/80 pointer-events-none" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(222,74%,21%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8l4 4-4 4"/><path d="M6 8l-4 4 4 4"/></svg>
          </div>
        </div>
      </div>
      <div className="bg-primary-foreground/5 px-4 py-2.5">
        <p className="text-primary-foreground/70 text-xs sm:text-sm font-medium">{label}</p>
      </div>
    </div>
  );
};

const VideoCard = ({ src, title }: { src: string; title: string }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="scroll-animate rounded-2xl overflow-hidden group cursor-pointer relative" onClick={togglePlay}>
      <div className="relative h-[260px] sm:h-[300px] md:h-[360px] bg-darkest">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          preload="none"
          playsInline
          muted
          loop
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark/40">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(222,74%,21%)" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        )}
      </div>
      <div className="bg-primary-foreground/5 px-4 py-2.5">
        <p className="text-primary-foreground/70 text-xs sm:text-sm font-medium">{title}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="bg-dark-navy py-14 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">SEE THE DIFFERENCE</p>
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[30px] md:text-[44px] text-primary-foreground">Before & After</h2>
          <p className="text-primary-foreground/40 text-xs sm:text-sm mt-2">Drag the slider to reveal the transformation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {comparisons.map((item, i) => (
            <BeforeAfterSlider key={i} image={item.image} label={item.label} />
          ))}
        </div>

        {/* Videos subsection */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 scroll-animate">
            <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">WATCH IT HAPPEN</p>
            <h3 className="font-heading font-bold text-[22px] sm:text-[28px] text-primary-foreground">Videos</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <VideoCard src="/videos/video1.mp4" title="House Wash — Satisfying Clean" />
            <VideoCard src="/videos/video2.mp4" title="Driveway Pressure Wash" />
          </div>
        </div>

        <div className="text-center mt-10 md:mt-14">
          <button
            onClick={scrollToContact}
            className="gradient-cta text-primary-foreground font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 transition-all shimmer min-h-[44px] w-full sm:w-auto"
          >
            Get These Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
