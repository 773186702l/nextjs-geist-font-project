import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'محفظة الأعمال - مطور برمجيات',
  description: 'موقع شخصي لعرض الأعمال والمشاريع البرمجية',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
