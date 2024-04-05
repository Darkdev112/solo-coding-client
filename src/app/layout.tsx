import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo Coding",
  description: "Solo Levelling based gamified coding platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
