import { useState } from 'react';

const faqs = [
  { q: 'How much does pressure washing cost?', a: 'A standard driveway starts from $80–150. House washing from $150–300. We always provide a free, no-obligation quote first.' },
  { q: 'How long does it take?', a: "Most jobs take 1–3 hours. A standard driveway is usually done in under an hour. We'll estimate with your quote." },
  { q: 'Is it safe for my surfaces?', a: 'Yes — we adjust pressure for each surface type (concrete, wood, brick, render). Your property is always protected.' },
  { q: 'Do you work in bad weather?', a: "Light rain is fine. Heavy rain or wind — we'll reschedule and communicate in advance." },
  { q: 'How do I pay?', a: 'Bank transfer or cash. Payment on completion — no upfront deposits.' },
  { q: 'Do you offer recurring service?', a: 'Yes — many clients book every 6–12 months. Ask about our repeat customer discount.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-icy py-14 md:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 scroll-animate visible">
            <p className="text-sky-accent text-[12px] font-bold tracking-[4px] mb-3">FAQ</p>
            <h2 className="font-heading font-extrabold text-[26px] sm:text-[28px] md:text-[36px] text-navy leading-tight">Common Questions</h2>
            <p className="text-subtle text-xs sm:text-sm mt-3">Can't find your answer?</p>
            <a
              href="https://wa.me/64XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-whatsapp text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all min-h-[44px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Ask on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className={`scroll-animate visible bg-card rounded-xl border overflow-hidden transition-all ${openIndex === i ? 'border-l-[3px] border-l-sky border-sky/30' : 'border-border'}`}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors min-h-[44px]">
                  <span className={`font-heading font-semibold text-[13px] sm:text-[14px] pr-4 ${openIndex === i ? 'text-primary' : 'text-navy'}`}>{faq.q}</span>
                  <span className="text-primary text-lg shrink-0">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === i ? '300px' : '0', padding: openIndex === i ? '0 16px 14px' : '0 16px' }}>
                  <p className="text-subtle text-xs sm:text-[13px] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
