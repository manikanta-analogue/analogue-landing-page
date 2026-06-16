import "./globals.css";

export const metadata = {
  title: "Analogue IT Solutions | App, Web & Digital Solutions",
  description:
    "Analogue IT Solutions landing page for mobile app development, website development, UI/UX design, digital marketing, and GPS tracking services.",
  keywords: [
    "Analogue IT Solutions",
    "mobile app development company in Hyderabad",
    "website development company",
    "UI UX design",
    "digital marketing agency",
    "GPS tracking services"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
