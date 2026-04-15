const wellingtonSuburbs = ['Karori', 'Kelburn', 'Thorndon', 'Newtown', 'Island Bay', 'Johnsonville', 'Churton Park', 'Tawa', 'Porirua', 'Miramar', 'Hataitai', 'Mt Victoria'];
const huttSuburbs = ['Lower Hutt', 'Petone', 'Naenae', 'Taita', 'Upper Hutt', 'Eastbourne', 'Wainuiomata', 'Stokes Valley', 'Avalon', 'Woburn'];

const ServiceAreas = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-card py-14 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">WHERE WE WORK</p>
          <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] text-navy">Service Areas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Map visual */}
          <div className="scroll-animate flex items-center justify-center">
            <div className="relative w-[200px] h-[280px]">
              {/* Simplified NZ North Island outline */}
              <svg viewBox="0 0 200 280" fill="none" className="w-full h-full">
                <path d="M100 10 C60 30, 40 60, 50 100 C55 120, 45 140, 55 170 C60 190, 50 210, 60 240 C70 260, 90 270, 100 270 C110 270, 130 260, 140 240 C150 210, 140 190, 145 170 C155 140, 145 120, 150 100 C160 60, 140 30, 100 10Z" 
                  fill="hsl(222,74%,21%)" fillOpacity="0.08" stroke="hsl(199,92%,60%)" strokeWidth="1.5" strokeOpacity="0.4"/>
                {/* Wellington dot */}
                <circle cx="105" cy="235" r="6" fill="hsl(199,92%,60%)" className="animate-pulse" />
                <circle cx="105" cy="235" r="12" fill="none" stroke="hsl(199,92%,60%)" strokeWidth="1" strokeOpacity="0.4" />
                <text x="105" y="255" textAnchor="middle" fill="hsl(222,74%,21%)" fontSize="10" fontWeight="700">Wellington</text>
                {/* Hutt Valley dot */}
                <circle cx="120" cy="222" r="5" fill="hsl(211,78%,47%)" />
                <circle cx="120" cy="222" r="10" fill="none" stroke="hsl(211,78%,47%)" strokeWidth="1" strokeOpacity="0.4" />
                <text x="155" y="226" textAnchor="middle" fill="hsl(222,74%,21%)" fontSize="9" fontWeight="600">Hutt Valley</text>
              </svg>
            </div>
          </div>

          {/* Wellington */}
          <div className="scroll-animate bg-icy rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-navy border-b-2 border-sky pb-3 mb-3 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-accent"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Wellington City
            </h3>
            <div className="grid grid-cols-2 gap-y-1">
              {wellingtonSuburbs.map((s) => (
                <span key={s} className="text-foreground/70 text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Hutt Valley */}
          <div className="scroll-animate bg-icy rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-navy border-b-2 border-sky pb-3 mb-3 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-accent"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Hutt Valley
            </h3>
            <div className="grid grid-cols-2 gap-y-1">
              {huttSuburbs.map((s) => (
                <span key={s} className="text-foreground/70 text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 scroll-animate">
          <p className="text-subtle text-sm mb-3">Not listed? We may still cover your area.</p>
          <button onClick={scrollToContact} className="border-2 border-primary text-primary font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
            Check My Area
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
