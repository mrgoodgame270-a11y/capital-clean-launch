import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', suburb: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.service) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="gradient-dark py-14 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">FREE QUOTE</p>
          <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] text-primary-foreground">Get Your Free Quote</h2>
          <p className="text-primary-foreground/50 text-sm mt-2">No obligation · We respond within 1 hour</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="scroll-animate bg-card rounded-3xl p-7 md:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.3)] order-2 lg:order-1">
            {submitted ? (
              <div className="text-center py-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(142,71%,45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3 className="font-heading font-bold text-xl text-navy">We'll be in touch within 1 hour</h3>
                <p className="text-subtle mt-2 text-sm">Check your phone for our call or WhatsApp.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground text-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1">Phone *</label>
                    {/* TODO: Replace with actual business phone number */}
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+64 XX XXX XXXX" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground text-sm" />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1">Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Service *</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-all text-foreground bg-card text-sm">
                    <option value="">Select a service...</option>
                    <option>Driveway Cleaning</option>
                    <option>House Washing</option>
                    <option>Gutter Cleaning</option>
                    <option>Sidewalk Cleaning</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Suburb</label>
                  <input name="suburb" value={formData.suburb} onChange={handleChange} placeholder="e.g. Petone, Lower Hutt" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground text-sm" />
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Any details about the job..." className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-y text-foreground text-sm" />
                </div>
                <button onClick={handleSubmit} className="w-full gradient-cta text-primary-foreground font-bold text-base py-4 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all shimmer">
                  Send Quote Request
                </button>
                <p className="text-subtle text-xs text-center flex items-center justify-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  Your info is safe. No spam, ever.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-5 order-1 lg:order-2">
            {[
              {
                label: 'WHATSAPP / CALL',
                /* TODO: Replace with actual phone number */
                value: '+64 XX XXX XXXX',
                sub: 'Reply within 1 hour',
                href: 'https://wa.me/64XXXXXXXXX',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                ),
              },
              {
                label: 'EMAIL',
                value: 'hello@capitalclean.co.nz',
                sub: 'We reply within 1 hour',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ),
              },
              {
                label: 'SERVICE AREA',
                value: 'Wellington & Hutt Valley',
                sub: 'All suburbs covered',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ),
              },
            ].map((c, i) => (
              <div key={i} className="scroll-animate bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-2xl p-5 flex gap-4 items-center hover:border-sky/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-sky/15 flex items-center justify-center text-sky-accent shrink-0">{c.icon}</div>
                <div>
                  <p className="text-sky-accent text-[11px] font-semibold tracking-wider uppercase">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading font-bold text-base text-primary-foreground hover:text-sky transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-heading font-bold text-base text-primary-foreground">{c.value}</p>
                  )}
                  <p className="text-primary-foreground/45 text-xs">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/64XXXXXXXXX?text=Hi%20Capital%20Clean!%20I'd%20like%20a%20free%20quote%20for%20pressure%20washing."
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-animate flex items-center justify-center gap-3 bg-whatsapp rounded-2xl px-7 py-4 w-full hover:brightness-110 hover:scale-[1.02] transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.234 0-4.308-.724-5.994-1.952l-.418-.312-2.646.887.887-2.646-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              <div>
                <span className="text-primary-foreground font-bold text-base block">Chat on WhatsApp</span>
                <span className="text-primary-foreground/70 text-xs">Tap to message us directly</span>
              </div>
            </a>

            {/* Hours */}
            <div className="scroll-animate bg-primary-foreground/5 border border-primary-foreground/[0.08] rounded-2xl p-5">
              <p className="text-primary-foreground font-heading font-semibold text-sm mb-2 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Business Hours
              </p>
              <div className="text-primary-foreground/60 text-xs space-y-0.5">
                <p>Mon–Fri: 7:00am – 6:00pm</p>
                <p>Saturday: 8:00am – 4:00pm</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
