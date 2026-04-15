const reviews = [
  {
    text: 'Incredible results on our driveway — looks brand new. Professional, fast, and great price.',
    name: 'Sarah M.',
    location: 'Lower Hutt',
    service: 'Driveway Cleaning',
    initial: 'S',
  },
  {
    text: 'House exterior washed before selling. The agent said it looked like a completely different house.',
    name: 'James T.',
    location: 'Karori',
    service: 'House Washing',
    initial: 'J',
  },
  {
    text: 'Gutters sorted same week. Friendly service, thorough job. Will definitely use again.',
    name: 'Rachel K.',
    location: 'Petone',
    service: 'Gutter Cleaning',
    initial: 'R',
  },
];

const TestimonialsSection = () => (
  <section id="reviews" className="bg-icy py-14 md:py-20">
    <div className="container mx-auto">
      <div className="text-center mb-14 scroll-animate">
        <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">REVIEWS</p>
        <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] text-navy">What Customers Say</h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-amber text-xl">⭐⭐⭐⭐⭐</span>
          <span className="font-heading font-bold text-navy text-sm">5.0</span>
          <span className="text-subtle text-xs">(Based on 50+ Google Reviews)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="scroll-animate bg-card rounded-2xl p-7 shadow-[0_2px_16px_rgba(13,31,92,0.06)] border-l-4 border-l-sky">
            <div className="text-amber text-lg mb-3">⭐⭐⭐⭐⭐</div>
            <p className="text-foreground/75 text-[15px] leading-relaxed line-clamp-3">{r.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0">
                {r.initial}
              </div>
              <div className="min-w-0">
                <p className="font-heading font-semibold text-sm text-navy">{r.name}</p>
                <p className="text-subtle text-xs">{r.location}</p>
              </div>
              <span className="bg-sky/10 text-primary text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ml-auto">
                {r.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
