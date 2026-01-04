export default function About() {
  return (
    <section
      id="hakkimizda"
      className="py-24 bg-bgc-dark relative overflow-hidden"
    >
      {/* Arkaplan Deseni (Hafif) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bgc-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-bgc-red text-sm tracking-[0.3em] font-bold mb-4 uppercase">
            Biz Kimiz?
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
            "Güven, Tecrübe ve Teknolojinin Kesişim Noktası"
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            BGC Group olarak, sigortacılık sektöründeki köklü tecrübemizi, filo
            yönetimi ve asistans hizmetleriyle birleştirerek entegre bir hizmet
            ekosistemi sunuyoruz. Amacımız, müşterilerimizin hem bireysel hem de
            kurumsal ihtiyaçlarına tek bir çatı altından, en yüksek kalite
            standartlarında yanıt vermektir.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Yenilikçi teknolojileri süreçlerimize entegre ederek, dijitalleşen
            dünyada hızlı, şeffaf ve erişilebilir çözümler üretiyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
