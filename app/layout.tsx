import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script'

const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/MaldivesMatch' : '')
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://maldives.emojicon.site'
const siteUrl = `${siteOrigin}${basePath}`
const ogImageUrl = `${siteUrl}/og-image.svg`;

export const metadata: Metadata = {
  title: "몰디브 매치 - 나의 몰디브 성향 찾기",
  description:
    "12개의 전문 질문으로 나에게 맞는 몰디브 여행 스타일을 찾아보세요",
  icons: {
    icon: `${basePath}/icon.svg`,
    shortcut: `${basePath}/icon.svg`,
    apple: `${basePath}/icon.svg`,
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
      <div className="adsense-block" style={{ margin: '16px 0', textAlign: 'center' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
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