import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Happy Customers' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  { value: 5, suffix: '★', label: 'Google Rating' },
  { value: 200, suffix: '+', label: 'Jobs Completed' },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading font-black text-[40px] md:text-[52px] text-navy">
      {count}{suffix}
    </div>
  );
};

const StatsBar = () => (
  <section className="bg-card border-t-4 border-sky shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-10 md:py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center relative">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-subtle text-[15px] font-medium uppercase tracking-wider mt-1">{stat.label}</p>
            {i < stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
