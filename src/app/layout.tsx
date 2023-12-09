import type { Metadata } from 'next';
import './globals.css';
import Guard from '@/components/Guard';

export const metadata: Metadata = {
  title: 'Penny Pinch',
  description: 'Control your life!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Guard>
        <body>{children}</body>
      </Guard>
    </html>
  );
}
