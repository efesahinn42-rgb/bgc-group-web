"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitalsClient() {
  useReportWebVitals((metric) => {
    // Burada isterseniz metrikleri kendi analytics servisinize gönderebilirsiniz.
    // Şimdilik sadece console'a logluyoruz.
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("[Web Vitals]", metric);
    }
  });

  return null;
}

