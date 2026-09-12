# BGC Group — Kurumsal Tanıtım Sitesi

**İşletme:** BGC Group — filo kiralama, sigorta ve asistans hizmetleri. Tek sayfalık
(single-page) kurumsal tanıtım/pazarlama sitesi. Canlı domain: `bgcgroup.com.tr`
(Vercel `bgc-group-web` projesi, hesap: sahin-efes-projects).

**Şirket sahibi ayrıca sigorta kontrol paneli + `portal`/`bayi` alt domainleri**
planlıyor (Emirhan Hasırcı ile görüşülüyor, 2026-08-14). Bu muhtemelen ayrı bir
proje/deploy olacak — bu repo şu an sadece tanıtım sitesi.

## Stack
- Next.js 13.5.4 App Router, React 18, TypeScript (strict)
- styled-components (SSR registry: `libs/registry.tsx`) + `GlobalStyles.tsx`
- framer-motion + GSAP (Splash/parçacık animasyonu) + `@studio-freight/react-lenis` (smooth scroll)
- sass (yalnızca `Splash/splash.module.scss` için)
- Package manager: npm (`package-lock.json` var)
- **Not:** `package.json` içindeki `name: "chatbot"` eski bir boilerplate kalıntısı, düzeltilmeli.

## Klasör Yapısı
```
src/app/(home)/page.tsx   → tek sayfa, section'ları sırayla render eder
src/app/layout.tsx        → metadata (SEO/OG/Twitter) + root layout
src/components/
  Layout/                 → StyledComponentsRegistry + Lenis + GlobalStyles + Header/Footer sarmalayıcı
  UI/                     → sayfa section'ları (Hero, Featured, Offers, FinancialFreedom/Future, Intro, Join, FAQ, Footer, Header, Splash)
  Common/                 → AnimatedLink, GetStartedButton, MaskText, ParallaxImages, RevealCover
libs/registry.tsx          → styled-components SSR registry
libs/useIsMobile.tsx       → mobil breakpoint hook'u
```

## Bilinen Sorunlar / Teknik Borç (2026-09-11 güncellendi)
> Not: Bu bölümdeki 2026-08-14 tarihli notların çoğu artık YANLIŞ/bayattı — proje
> o tarihten sonra epey güncellenmiş (Next 15.5.23, sitemap/robots eklenmiş, font/CSS
> değişken sorunları çözülmüş, package.json adı düzeltilmiş). Güncel liste:

- [x] ~~Header nav linkleri işlevsiz~~ — kontrol edildi, ÇALIŞIYOR: `AnimatedLink` href'i
  gerçekten kullanıyor, `#hizmetler` (OffersSection) ve `#iletisim` (Footer) gerçek
  section id'lerine bağlı. Tek kozmetik not: "Filo Kiralama/Sigorta/Asistans" 3 menü
  öğesi hepsi aynı `#hizmetler`'e gidiyor (ayrı hizmet sayfaları olsa daha iyi olurdu).
- [x] ~~Font CDN riski~~ — çözülmüş, `cdnfonts.com` import'u yok artık.
- [x] ~~Yanıltıcı --green/--emerald~~ — `--brand` olarak düzeltilmiş.
- [x] ~~package.json name "chatbot"~~ — `bgc-group-web` olarak düzeltilmiş.
- [x] **Hero'daki tek CTA ölüydü** (`GetStartedButton` varsayılan `href="/"`) — WhatsApp'a
  (`wa.me/908508880155`) bağlandı (2026-09-11).
- [x] **Kritik CVE** (next/sharp) — `next` 15.5.23→15.5.25, `sharp`→latest güncellendi.
  `postcss`'in kalan açığı BİLEREK atlandı: düzeltmesi `next@16.3.4`'e zorluyor, o sürüm
  Vercel'in git-build pipeline'ında bilinen bir hatayla (nft.json ENOENT) deploy'u
  kırıyor — detay için konya-kebap-evi projesinin CLAUDE.md'sine bakın. postcss açığı
  build-time bir araç sorunu, kullanıcı girdisiyle tetiklenmiyor, düşük gerçek risk.
- [ ] **`JoinSection`'daki referanslar sahte** — `JoinSection/constants.ts:10-45`:
  "Ahmet Yılmaz/Ayşe Kaya/Mehmet Demir", 2 kaydın metni birebir aynı, hepsi aynı
  `corporate.png` stok avatarı kullanıyor. Kaldırılıp gerçek müşteri referanslarıyla
  değiştirilmeli (henüz dokunulmadı — kullanıcı onayı gerekir).
- [x] **KVKK/Gizlilik/Çerez sayfaları eklendi** (`/kvkk`, `/gizlilik-politikasi`,
  `/cerez-politikasi`), footer "Kurumsal" linkleri bunlara bağlandı (önceden linksiz
  düz metindi), sitemap'e eklendi. KVKK'da ticari unvan/MERSİS `[TODO]` — uydurulmadı.
  Çerez politikası dürüst: şu an GTM/analitik hiç yok, bu belirtildi.
- [x] **JSON-LD eklendi** — `Organization` (sitewide, layout.tsx) + `FAQPage` (sadece
  ana sayfa, `src/components/UI/StructuredData/index.tsx`).
- [x] **Gerçek OG görseli** — `app/opengraph-image.tsx`, gerçek logodan 1200×630 üretiyor
  (önceden 512×512 favicon idi).
- [x] **Mobil sticky CTA çubuğu eklendi** (`UI/MobileStickyCTA`) — Ara / WhatsApp,
  `Layout`'a global olarak bağlandı.
- [x] **`scroll-snap-type: y mandatory` kaldırıldı** (`GlobalStyles.tsx`) — html/body
  üzerinde zorunlu snap mobilde kaydırmayı kilitliyordu (2026-08-14'ten beri flag'liydi,
  hiç düzeltilmemişti). Mobilde sticky CTA çubuğu için `padding-bottom` eklendi.
- [x] HSTS header eklendi (`next.config.js`).
- [ ] `public/images/`'de ~12MB sıkıştırılmamış PNG var — henüz dokunulmadı.
- Next.js 15.5.25 (App Router), test yok — bu boyuttaki statik tanıtım sitesi için
  kabul edilebilir, kritik değil.

## Domain / DNS
- METUnic panelinden yönetiliyor (nameserver METUnic'te değil, DNS kayıtları
  doğrudan A/CNAME olarak giriliyor).
- `bgcgroup.com.tr` → A → `216.198.79.1` (Vercel)
- `www.bgcgroup.com.tr` → CNAME → `f17ae1061ecabbe2.vercel-dns-017.com.` (2026-08-14 eklendi)
- `backend`, `portal`, `crm` alt domainleri hâlâ eski sunucuya (`92.63.232.205`)
  işaret ediyor — bu repoyla ilgisi yok, ayrı bir sistem/servis olabilir, silmeden
  önce şirket sahibiyle teyit edilmeli.

## Komutlar
- dev: `npm run dev`
- build: `npm run build`
- start: `npm run start`
- lint: `npm run lint`

## Model Stratejisi
- Küçük düzeltme (yazım hatası, link fix, font değişimi) → `/model haiku` yeterli
- Nav linkleri düzeltme, yeni section/route ekleme → Sonnet (varsayılan)
- Portal/bayi/sigorta paneli gibi yeni büyük modül planlanacaksa → önce plan
  (`/model opusplan` veya "önce planı göster")

## Aktif MCP'ler (global ~/.claude/settings.json)
- `vercel` → deploy, domain, env variable yönetimi (bu proje Vercel'de barınıyor)
- `playwright` → header nav / mobil menü / WhatsApp-tel linklerini tarayıcıda test etme
- `context7` → Next.js/styled-components/framer-motion güncel dokümantasyon
- `fetch`, `filesystem`, `headroom`, `sequential-thinking`
- `codebase-memory-mcp` → kod grafiği; ilk kullanımda `index_repository` çalıştır

## Aktif Skill'ler (global kurulu)
- `/ponytail full` → yeni section/route eklerken gereksiz abstraction'dan kaçınmak için
- `/impeccable` veya `/redesign-skill` → font/renk/UI polish işlerinde (yukarıdaki
  font ve nav sorunlarını çözerken tasarım kalitesini korumak için)
- `/security-review` → yeni sigorta paneli/portal eklenince (kimlik doğrulama, veri
  girişi olacağı için) mutlaka çalıştırılmalı
- `/diagnosing-bugs`, `/systematic-debugging` → nav link sorunu gibi davranışsal
  bug'larda
- `/verification-before-completion` → düzeltmelerden sonra gerçekten çalıştığını
  tarayıcıda doğrulamadan "tamamlandı" deme
- `/code-review` → PR/diff review
- `dataviz` → sigorta kontrol paneli için grafik/dashboard tasarlanınca

## Güvenlik Kontrol Listesi (yeni panel/portal eklenince kritik)
- [ ] Sigorta kontrol paneli auth ile korunmalı (session/JWT, httpOnly cookie)
- [ ] Portal/bayi girişleri ayrı yetkilendirme seviyeleri gerektirir (rol bazlı erişim)
- [ ] API anahtarları/sırlar sadece server-side, `.env` commit edilmemeli
- [ ] Kullanıcı girdileri (form, arama) sunucu tarafında doğrulanmalı
- [ ] HTTPS zorunlu, güvenlik header'ları (`next.config.js`'te zaten X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy var — yeni panelde de korunmalı)
