import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | BGC Group',
  description: 'BGC Group web sitesi gizlilik politikası.',
};

export default function GizlilikPolitikasiPage() {
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
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Gizlilik Politikası</h1>
        <div style={{ color: 'var(--light-gray)', fontSize: 15, lineHeight: 1.8 }}>
          <p>
            Bu gizlilik politikası, bgcgroup.com.tr web sitesini (&quot;Site&quot;)
            ziyaret ettiğinizde veya iletişim/teklif formunu kullandığınızda hangi
            bilgilerin toplandığını ve nasıl kullanıldığını açıklar. Kişisel
            verilerin işlenmesine ilişkin detaylı bilgi için{' '}
            <a href="/kvkk" style={{ color: 'var(--brand)' }}>
              KVKK Aydınlatma Metni
            </a>
            &apos;ni inceleyebilirsiniz.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            Çerezler
          </h2>
          <p>
            Site, ziyaretçi davranışını ölçmek amacıyla çerez kullanabilir. Detaylar
            için{' '}
            <a href="/cerez-politikasi" style={{ color: 'var(--brand)' }}>
              Çerez Politikası
            </a>
            &apos;na bakabilirsiniz.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            Toplanan Bilgiler
          </h2>
          <ul style={{ paddingLeft: 20 }}>
            <li>İletişim/teklif formu: ad, telefon, e-posta, talep içeriği</li>
            <li>Site kullanım verileri (sayfa görüntüleme, cihaz/tarayıcı bilgisi)</li>
          </ul>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            İletişim
          </h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için 0850 888 0 155 numaralı
            telefondan bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
