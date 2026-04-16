const wellingtonSuburbs = ['Karori', 'Kelburn', 'Thorndon', 'Newtown', 'Island Bay', 'Johnsonville', 'Churton Park', 'Tawa', 'Porirua', 'Miramar', 'Hataitai', 'Mt Victoria'];
const huttSuburbs = ['Lower Hutt', 'Petone', 'Naenae', 'Taita', 'Upper Hutt', 'Eastbourne', 'Wainuiomata', 'Stokes Valley', 'Avalon', 'Woburn'];

const ServiceAreas = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-card py-14 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">WHERE WE WORK</p>
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[30px] md:text-[42px] text-navy">Service Areas</h2>
        </div>

        {/* Google Map Embed */}
        <div className="scroll-animate rounded-2xl overflow-hidden mb-8 md:mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50357053.243514046!2d-151.60405470000003!3d39.61480459999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9f25bc860b393%3A0x7a18c18a75fd22e6!2sClean%20It%20Better!5e0!3m2!1sen!2s!4v1776271029845!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map"
            className="w-full h-[250px] sm:h-[300px] md:h-[360px]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {/* Wellington */}
          <div className="scroll-animate bg-icy rounded-2xl p-5 md:p-6">
            <h3 className="font-heading font-bold text-base md:text-lg text-navy border-b-2 border-sky pb-3 mb-3 flex items-center gap-2">
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
          <div className="scroll-animate bg-icy rounded-2xl p-5 md:p-6">
            <h3 className="font-heading font-bold text-base md:text-lg text-navy border-b-2 border-sky pb-3 mb-3 flex items-center gap-2">
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

        <div className="text-center mt-6 md:mt-8 scroll-animate">
          <p className="text-subtle text-xs sm:text-sm mb-3">Not listed? We may still cover your area.</p>
          <button onClick={scrollToContact} className="border-2 border-primary text-primary font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all min-h-[44px]">
            Check My Area
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
