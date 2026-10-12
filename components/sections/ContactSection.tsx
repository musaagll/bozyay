import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
export default function ContactSection() {
  return (
    <section className="bg-brand-dark border-t border-brand-border py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
            İletişim
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-white reveal reveal-delay-1">
            PROJENİZİ KONUŞALIM.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-brand-border mb-10">

          {/* Phone */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-brand-border reveal">
            <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-3">Telefon</p>
            <a
              href={PHONE_HREF}
              className="text-2xl font-black text-brand-white hover:text-brand-yellow transition-colors duration-200 block mb-5"
            >
              {PHONE_DISPLAY}
            </a>
            <a href={PHONE_HREF} className="btn-primary text-xs py-3 px-5">
              HEMEN ARA
            </a>
          </div>

          {/* WhatsApp */}
          <div className="p-8 reveal reveal-delay-1" style={{ background: "rgba(245,197,24,0.03)", borderLeft: "0" }}>
            <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-3">WhatsApp</p>
            <p className="text-brand-white font-medium leading-relaxed mb-5">
              Mesajınızı, teknik çiziminizi veya fotoğrafınızı WhatsApp üzerinden iletebilirsiniz.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-3 px-5 inline-flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.102 1.523 5.824L.057 23.887a.5.5 0 00.609.61l6.204-1.488A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.378l-.36-.214-3.733.896.944-3.63-.235-.374A9.86 9.86 0 012.1 12c0-5.468 4.432-9.9 9.9-9.9 5.467 0 9.9 4.432 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
              </svg>
              WhatsApp ile Yaz
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="border border-brand-border p-7 reveal reveal-delay-2 mb-10">
          <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-2">Adres</p>
          <address className="not-italic text-brand-white font-medium">
            BOZ YAY Çalı Mah. 2. (410) Sk. No:6, 16110 Nilüfer/Bursa
          </address>
        </div>

        {/* Map embed */}
        <div className="reveal reveal-delay-3 border border-brand-border overflow-hidden h-64 lg:h-80">
          <iframe
            title="BOZ YAY Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.4!2d28.98!3d40.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNilüfer%2C%20Bursa!5e0!3m2!1str!2str!4v1700000000001!5m2!1str!2str"
            width="100%" height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="BOZ YAY konum haritası"
          />
        </div>
      </div>
    </section>
  );
}
