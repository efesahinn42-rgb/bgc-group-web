import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | BGC Group',
  description: 'BGC Group kişisel verilerin korunması aydınlatma metni.',
};

export default function KVKKPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--Background)',
        color: 'var(--white)',
        padding: '160px 24px 80px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>KVKK Aydınlatma Metni</h1>
        <div style={{ color: 'var(--light-gray)', fontSize: 15, lineHeight: 1.8 }}>
          <p>
            {/* TODO: Tam ticari unvan, MERSİS no ve vergi dairesi/no bilgisiyle
                tamamlanmalı — bu alanlar uydurulmadı, gerçek bilgiyle doldurulmalı. */}
            İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla{' '}
            <strong style={{ color: 'var(--white)' }}>BGC Group</strong> (Akabe, Şht.
            Furkan Doğan Cd. Bey Plaza Kat:1 No:3/122, Karatay/Konya) [TODO: tam ticari
            unvan] tarafından işlenen kişisel verileriniz hakkında sizi bilgilendirmek
            amacıyla hazırlanmıştır.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            Hangi Kişisel Veriler İşlenir?
          </h2>
          <p>
            Teklif/iletişim formu üzerinden ad-soyad, telefon numarası, e-posta
            adresi ve talebinizle ilgili paylaştığınız diğer bilgiler işlenmektedir.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            İşleme Amacı
          </h2>
          <p>
            Kişisel verileriniz; filo kiralama, sigorta ve asistans hizmetleri
            kapsamındaki talebinizin değerlendirilmesi, size dönüş yapılabilmesi
            amacıyla işlenmektedir.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            Haklarınız
          </h2>
          <p>
            KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinizin işlenip
            işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme
            haklarına sahipsiniz. Bu taleplerinizi 0850 888 0 155 numaralı telefona
            ulaşarak iletebilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
