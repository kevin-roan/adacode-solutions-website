import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - Adacode Solutions",
  description: "The best software courses on the market",
};

export default function layout({
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
