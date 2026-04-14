const reviews = [
  {
    text: "Absolutely incredible results on our driveway! It looks brand new. The team was professional, fast, and the price was spot on. Would 100% recommend to anyone in Wellington.",
    name: 'Sarah M.',
    location: 'Lower Hutt, Wellington',
    service: 'Driveway Cleaning',
    initial: 'S',
  },
  {
    text: "Got our house exterior washed before putting it on the market. The difference was night and day — the real estate agent said it looked like a completely different house!",
    name: 'James T.',
    location: 'Karori, Wellington',
    service: 'House Washing',
    initial: 'J',
  },
  {
    text: "Blocked gutters sorted same week I called. Friendly service, thorough job, and they even cleaned up after themselves. Very happy — will definitely use again.",
    name: 'Rachel K.',
    location: 'Petone, Hutt Valley',
    service: 'Gutter Cleaning',
    initial: 'R',
  },
];

const TestimonialsSection = () => (
  <section id="reviews" className="bg-icy py-12 md:py-16 lg:py-20">
    <div className="container mx-auto">
      <div className="text-center mb-12 scroll-animate">
        <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">REVIEWS</p>
        <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-navy">What Wellington Homeowners Say</h2>
        <div className="mt-4">
          <span className="text-amber text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="font-heading font-bold text-navy ml-2">5.0 Average Rating</span>
          <p className="text-subtle text-sm mt-1">(Based on customer feedback)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="scroll-animate bg-card rounded-[20px] p-8 shadow-[0_4px_24px_rgba(13,31,92,0.08)] border-l-4 border-l-sky"
          >
            <div className="text-amber text-xl mb-2">⭐⭐⭐⭐⭐</div>
            <div className="text-sky/30 text-5xl leading-none -mb-3">❝</div>
            <p className="text-foreground/80 text-base leading-[1.7] italic">{r.text}</p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                {r.initial}
              </div>
              <div>
                <p className="font-heading font-semibold text-[15px] text-navy">{r.name}</p>
                <p className="text-subtle text-[13px]">{r.location}</p>
              </div>
              <span className="ml-auto bg-sky/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">
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
