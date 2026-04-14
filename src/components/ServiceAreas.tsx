const wellingtonSuburbs = ['Karori', 'Kelburn', 'Thorndon', 'Newtown', 'Island Bay', 'Johnsonville', 'Churton Park', 'Tawa', 'Porirua', 'Miramar', 'Hataitai', 'Mt Victoria'];
const huttSuburbs = ['Lower Hutt', 'Petone', 'Naenae', 'Taita', 'Upper Hutt', 'Eastbourne', 'Wainuiomata', 'Stokes Valley', 'Avalon', 'Woburn'];

const ServiceAreas = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-card py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">WHERE WE WORK</p>
          <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-navy">We Serve Wellington & Hutt Valley</h2>
          <p className="text-subtle text-lg mt-3">Not sure if we cover your area? Just ask — we travel across the Wellington region.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { emoji: '🏙️', title: 'Wellington City', suburbs: wellingtonSuburbs },
            { emoji: '🌿', title: 'Hutt Valley', suburbs: huttSuburbs },
          ].map((area) => (
            <div key={area.title} className="scroll-animate bg-icy rounded-2xl p-7">
              <h3 className="font-heading font-bold text-xl text-navy border-b-2 border-sky pb-3 mb-4">
                {area.emoji} {area.title}
              </h3>
              <div className="grid grid-cols-2 gap-y-1.5">
                {area.suburbs.map((s) => (
                  <span key={s} className="text-foreground/80 text-sm font-medium">📍 {s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 scroll-animate">
          <p className="text-subtle text-sm mb-4">📍 Don't see your suburb? Contact us — we may still cover your area!</p>
          <button
            onClick={scrollToContact}
            className="border-2 border-primary text-primary font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Check My Area
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
