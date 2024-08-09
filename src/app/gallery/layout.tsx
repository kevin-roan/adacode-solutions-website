import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Adacode Solutions",
  description: "No.1 Software Training Institute in Kozhikode",
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
