import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | BGC Group',
  description: 'BGC Group web sitesi çerez politikası.',
};

export default function CerezPolitikasiPage() {
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
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Çerez Politikası</h1>
        <div style={{ color: 'var(--light-gray)', fontSize: 15, lineHeight: 1.8 }}>
          <p>
            bgcgroup.com.tr sitesi şu an ziyaretçi takibi için üçüncü taraf
            analitik/reklam çerezi kullanmamaktadır. Sitenin temel işlevlerinin
            çalışması için gerekli olan zorunlu (teknik) çerezler dışında bir
            çerez yerleştirilmemektedir.
          </p>
          <p>
            İleride analitik veya pazarlama amaçlı çerez kullanımı başlarsa bu
            sayfa güncellenecek ve ziyaretçilerden onay alınacaktır.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: 20, marginTop: 32 }}>
            İletişim
          </h2>
          <p>
            Sorularınız için 0850 888 0 155 numaralı telefondan bize
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
