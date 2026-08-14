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

## Bilinen Sorunlar / Teknik Borç (2026-08-14 analizi)
- **Header nav linkleri işlevsiz:** `Header/constants.ts`'teki tüm `links` girdilerinin
  `url: '/'` değeri var VE `AnimatedLink` bileşeni `url` prop'unu hiç kullanmıyor,
  sadece `title` alıyor — yani üst menüdeki "Filo Kiralama", "Sigorta", "Asistans
  Hizmetleri", "İletişim" linkleri tıklanınca hiçbir yere gitmiyor/scroll etmiyor.
  Düzeltme: ya ilgili section'lara `id` verip `AnimatedLink`'i `<a href="#...">`
  yapacak şekilde güncelle, ya da linkleri gerçek route'lara bağla.
- **Font, resmi olmayan bir CDN'den çekiliyor:** `globals.css` içinde
  `@import url('https://fonts.cdnfonts.com/css/sf-pro-display')` — SF Pro Apple'ın
  fontu, bu üçüncü parti CDN üzerinden servis edilmesi hem performans (render-blocking
  @import, önbellek yönetimi Next.js dışında) hem lisans açısından riskli. `next/font`
  ile self-host edilen bir alternatif (ör. Inter, Geist) veya lisanslı bir font'a
  geçilmeli.
- **Yanıltıcı CSS değişken adları:** `GlobalStyles.tsx` içinde `--green` ve
  `--emerald` değişkenleri aslında kırmızı (`#E30613`) tutuyor — kod okunabilirliğini
  bozuyor, `--brand` / `--primary` gibi anlamlı isimlere çevrilmeli.
- **`package.json` `name: "chatbot"`** — kopyalanan boilerplate'ten kalma, `bgc-group-web`
  olarak düzeltilmeli.
- **`FinancilaFreedom` yazım hatası** (`components/index.ts` ve `page.tsx`) — klasör adı
  `FinancialFreedom` doğru ama export/import adı yanlış yazılmış. Kod çalışıyor ama
  gelecekte refactor sırasında kafa karıştırabilir.
- **Tüm layout `'use client'`:** `Layout/index.tsx` (dolayısıyla Header/Footer/Splash
  dahil neredeyse tüm ağaç) client component. Tek sayfalık, ağır animasyonlu bir site
  için makul bir tercih ama ileride yeni statik sayfalar (portal, bayi vb.) eklenirse
  server component'lerden yararlanmak için ayrım gözden geçirilmeli.
- **Next.js 13.5.4 eski** — güncel Next.js 15.x'e göre ciddi gecikmiş; App Router
  temel API'leri stabil olduğu için kritik değil ama güvenlik/performans
  iyileştirmeleri için güncelleme planlanmalı.
- **Test yok, sitemap.xml/robots.txt yok, ortam değişkeni (.env) kullanılmıyor** — bu
  boyutta bir statik tanıtım sitesi için sitemap/robots eksikliği SEO açısından
  iyileştirilebilir bir nokta (yeni sayfalar/subdomain eklendikçe daha önemli hale gelir).

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
