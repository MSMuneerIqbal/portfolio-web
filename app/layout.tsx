import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muneer Iqbal - AI-Driven Agentic AI Engineer',
  description: 'Agentic AI Engineer specializing in autonomous multi-agent systems, Generative AI, RAG pipelines, and Full-Stack Development. 89+ projects showcasing LLMs, CrewAI, and enterprise AI solutions.',
  keywords: 'Agentic AI Engineer, AI Developer, Generative AI, Multi-Agent Systems, LLMs, RAG, Full-Stack Developer, Python, TypeScript, Next.js, LangChain, CrewAI',
  authors: [{ name: 'Muneer Iqbal' }],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muneer-iqbal.vercel.app',
    title: 'Muneer Iqbal - AI-Driven Agentic AI Engineer',
    description: 'Agentic AI Engineer — 89+ Projects in Autonomous AI, GenAI, and Full-Stack Development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muneer Iqbal - Agentic AI Engineer',
    description: 'AI-driven Agentic AI Engineer building autonomous systems with Generative AI and LLMs',
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
