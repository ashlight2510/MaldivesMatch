import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script'

const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/MaldivesMatch' : '')
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://maldives.funnyfunny.cloud'
const siteUrl = `${siteOrigin}${basePath}`
const ogImageUrl = `${siteUrl}/og-image.svg`;
// Inline SVG favicon to avoid path/basePath issues.
const inlineFaviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='sea' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%2337c6f5'/%3E%3Cstop offset='1' stop-color='%230aa0d6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='url(%23sea)'/%3E%3Ccircle cx='46' cy='18' r='8' fill='%23ffd36a'/%3E%3Cpath d='M10 42c6 4 12 4 18 0 6 4 12 4 18 0 6 4 12 4 18 0' fill='none' stroke='%23e8fbff' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M20 44c2-10 8-18 12-18 4 0 6 6 4 10' fill='none' stroke='%230b5b4d' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M32 26c4-4 8-5 12-3' fill='none' stroke='%230b5b4d' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "몰디브 매치 - 나의 몰디브 성향 찾기",
  description:
    "12개의 전문 질문으로 나에게 맞는 몰디브 여행 스타일을 찾아보세요",
  icons: {
    icon: inlineFaviconSvg,
    shortcut: inlineFaviconSvg,
    apple: inlineFaviconSvg,
  },
  openGraph: {
    title: "몰디브 매치 - 나의 몰디브 성향 찾기",
    description: "나에게 딱 맞는 몰디브 여행 스타일을 찾아보세요! 8가지 성향 타입 중 당신의 스타일을 알아보고 맞춤 리조트를 추천받으세요.",
    url: siteUrl,
    siteName: "몰디브 매치",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "몰디브 매치 - 나의 몰디브 성향 찾기",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "몰디브 매치 - 나의 몰디브 성향 찾기",
    description: "나에게 딱 맞는 몰디브 여행 스타일을 찾아보세요!",
    images: [ogImageUrl],
  },
  other: {
    "og:image:type": "image/svg+xml",
    "og:image:secure_url": ogImageUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossOrigin="anonymous"></script>
      </head>
      <body>{children}
      <div
        className="adsense-block"
        style={{ margin: '16px 0', display: 'flex', justifyContent: 'center' , textAlign: 'center'}}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', margin: '0 auto' , textAlign: 'center'}}
          data-ad-format="fluid"
          data-ad-layout-key="-6t+ed+2i-1n-4w"
          data-ad-client="ca-pub-1204894220949193"
          data-ad-slot="7300458753"
        ></ins>
      </div>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
</body>
    </html>
  );
}
