import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muneer Iqbal - AI/ML & Full-Stack Developer',
  description: 'Full-Stack AI Developer specializing in Generative AI, Agentic AI Systems, Machine Learning, and Web Development. 89+ projects showcasing expertise in LLMs, RAG, and enterprise solutions.',
  keywords: 'AI Developer, Machine Learning, Generative AI, Agentic AI, Full-Stack Developer, Python, TypeScript, Next.js, LangChain, CrewAI',
  authors: [{ name: 'Muneer Iqbal' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muneer-iqbal.vercel.app',
    title: 'Muneer Iqbal - AI/ML & Full-Stack Developer',
    description: 'Full-Stack AI Developer - 89+ Projects in AI, ML, and Web Development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muneer Iqbal - AI Developer',
    description: 'Full-Stack AI Developer specializing in Generative AI and Machine Learning',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
