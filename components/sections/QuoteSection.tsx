export default function QuoteSection() {
  return (
    <section className="bg-brand-black border-t border-brand-border py-20 lg:py-28" id="iletisim">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
            Bize Ulaşın
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-white leading-tight mb-5 reveal reveal-delay-1">
            İhtiyacınızı Anlatın,<br />Birlikte Üretelim.
          </h2>
          <p className="text-base text-brand-light leading-relaxed mb-10 reveal reveal-delay-2">
            Teknik çiziminizi, numunenizi veya ihtiyacınızı telefon ya da WhatsApp üzerinden iletebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
            <a
              href="tel:+905315012584"
              className="btn-primary flex-1 justify-center text-center"
            >
              0531 501 25 84
            </a>
            <a
              href="https://wa.me/905315012584"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center text-center items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.102 1.523 5.824L.057 23.887a.5.5 0 00.609.61l6.204-1.488A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.378l-.36-.214-3.733.896.944-3.63-.235-.374A9.86 9.86 0 012.1 12c0-5.468 4.432-9.9 9.9-9.9 5.467 0 9.9 4.432 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
              </svg>
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
