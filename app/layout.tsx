import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartGPT Internship Program',
  description: 'Join our innovative internship program in AI Engineering, Machine Learning, and Full-Stack Development.',
  metadataBase: new URL('https://smartgptautomations.com'),
  openGraph: {
    title: 'SmartGPT Internship Program',
    description: 'Join our innovative internship program in AI Engineering, Machine Learning, and Full-Stack Development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartGPT Internship Program',
    description: 'Join our innovative internship program in AI Engineering, Machine Learning, and Full-Stack Development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="//embed.typeform.com/next/embed.js" async></script>
      </head>
      <body className={`${inter.className} bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}