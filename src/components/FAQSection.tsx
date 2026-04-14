import { useState } from 'react';

const faqs = [
  { q: 'How much does pressure washing cost in Wellington?', a: 'Prices vary by job size and service type. A standard driveway starts from around $80-150. House washing typically starts from $150-300. We always provide a free, no-obligation quote first.' },
  { q: 'How long does a pressure wash take?', a: "Most jobs take 1-3 hours depending on size. A standard driveway is usually done in under an hour. We'll give you a time estimate with your quote." },
  { q: 'Is pressure washing safe for my surfaces?', a: 'Yes! We use the right pressure settings for each surface type — concrete, wood, brick, render, etc. Our team is trained to protect your property while getting the best results.' },
  { q: 'Do you work in all weather?', a: "We can work in light rain but may reschedule in heavy rain or wind for safety and quality reasons. We'll always communicate any changes in advance." },
  { q: 'How do I pay?', a: 'We accept bank transfer and cash. Payment is due on completion of the job. No upfront deposits needed.' },
  { q: 'Do you offer recurring cleaning services?', a: 'Yes! Many homeowners book us every 6-12 months to keep their property maintained. Ask about our repeat customer discount.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-icy py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 scroll-animate">
            <p className="text-sky-accent text-[13px] font-bold tracking-[3px] mb-3">FAQ</p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-navy leading-tight">Common Questions</h2>
            <p className="text-subtle mt-4">Can't find your answer? Just WhatsApp us!</p>
            <a
              href="https://wa.me/64XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-whatsapp text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all"
            >
              💬 Ask on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`scroll-animate bg-card rounded-xl border overflow-hidden transition-all ${
                  openIndex === i ? 'border-l-[3px] border-l-sky border-sky/30' : 'border-border'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className={`font-heading font-semibold text-base pr-4 ${openIndex === i ? 'text-primary' : 'text-navy'}`}>
                    {faq.q}
                  </span>
                  <span className="text-primary text-xl shrink-0">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? '300px' : '0', padding: openIndex === i ? '0 24px 20px' : '0 24px' }}
                >
                  <p className="text-subtle text-[15px] leading-[1.7]">{faq.a}</p>
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
