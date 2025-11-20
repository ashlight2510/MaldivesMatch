import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "몰디브 매치 - 나의 몰디브 성향 찾기",
  description:
    "18개의 전문 질문으로 나에게 맞는 몰디브 여행 스타일을 찾아보세요",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
