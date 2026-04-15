import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', suburb: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.service) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="gradient-dark py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">FREE QUOTE</p>
          <h2 className="font-heading font-extrabold text-[32px] md:text-[44px] text-primary-foreground">Get Your Free Quote Today</h2>
          <p className="text-primary-foreground/70 text-lg mt-3">No obligation. Fast response. We'll get back to you within 2 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="scroll-animate bg-card rounded-3xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.3)] order-2 lg:order-1">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-2xl text-navy">Thanks! We'll be in touch within 2 hours 🎉</h3>
                <p className="text-subtle mt-3">Check your phone for a WhatsApp or call from us.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-navy font-medium text-sm mb-1.5">Your Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Phone Number *</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+64 XX XXX XXXX" className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground" />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Email Address</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground" />
                  </div>
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1.5">Service Needed *</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary outline-none transition-all text-foreground bg-card">
                    <option value="">Select a service...</option>
                    <option>Driveway Cleaning</option>
                    <option>House Washing</option>
                    <option>Gutter Cleaning</option>
                    <option>Sidewalk Cleaning</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1.5">Your Suburb</label>
                  <input name="suburb" value={formData.suburb} onChange={handleChange} placeholder="e.g. Petone, Lower Hutt" className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-foreground" />
                </div>
                <div>
                  <label className="block text-navy font-medium text-sm mb-1.5">Tell Us More (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="e.g. Driveway about 60sqm, quite dirty..." className="w-full px-4 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-y text-foreground" />
                </div>
                <button onClick={handleSubmit} className="w-full gradient-cta text-primary-foreground font-bold text-[17px] py-4.5 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all shimmer">
                  Send My Free Quote Request →
                </button>
                <p className="text-subtle text-[13px] text-center">🔒 Your info is safe. No spam, ever.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 order-1 lg:order-2">
            {[
              { icon: '💬', label: 'WHATSAPP / CALL', value: '+64 XX XXX XXXX', sub: 'Fastest response — reply within 2 hours', href: 'https://wa.me/64XXXXXXXXX' },
              { icon: '📧', label: 'EMAIL', value: 'hello@capitalclean.co.nz', sub: 'We reply within 2-3 hours' },
              { icon: '📍', label: 'SERVICE AREA', value: 'Wellington & Hutt Valley', sub: 'All suburbs — ask if unsure' },
            ].map((c, i) => (
              <div key={i} className="scroll-animate bg-primary-foreground/[0.08] border border-primary-foreground/15 rounded-2xl p-6 flex gap-4 items-center hover:border-sky transition-colors">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center text-[22px] shrink-0">{c.icon}</div>
                <div>
                  <p className="text-sky-accent text-[14px] font-semibold tracking-wider uppercase">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading font-bold text-lg text-primary-foreground hover:text-sky transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-heading font-bold text-lg text-primary-foreground">{c.value}</p>
                  )}
                  <p className="text-primary-foreground/55 text-[13px]">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/64XXXXXXXXX?text=Hi%20Capital%20Clean!%20I'd%20like%20a%20free%20quote%20for%20pressure%20washing."
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-animate flex items-center justify-center gap-3 bg-whatsapp rounded-2xl px-7 py-4.5 w-full hover:brightness-110 hover:scale-[1.02] transition-all"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.234 0-4.308-.724-5.994-1.952l-.418-.312-2.646.887.887-2.646-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              <div>
                <span className="text-primary-foreground font-bold text-lg block">Chat on WhatsApp Now</span>
                <span className="text-primary-foreground/75 text-[13px]">Tap to message us directly</span>
              </div>
            </a>

            {/* Hours */}
            <div className="scroll-animate bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-5">
              <p className="text-primary-foreground font-heading font-semibold mb-3">🕐 Business Hours</p>
              <div className="text-primary-foreground/70 text-sm space-y-1">
                <p>Mon-Fri: 7:00am – 6:00pm</p>
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
