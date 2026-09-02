import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'HealIndia AI | Smart Healthcare Medical Travel',
  description: 'AI-powered Medical Value Travel and International Patient Care system in India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-[#f8fafc]`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <span className="text-2xl">✚</span> HealIndia <span className="font-light">AI</span>
            </Link>
            <nav className="ml-auto hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/hospitals" className="text-muted-foreground hover:text-primary transition-colors">
                Hospitals
              </Link>
              <Link href="/onboarding" className="text-muted-foreground hover:text-primary transition-colors">
                Start Journey
              </Link>
              <Link href="/dashboard/patient" className="text-muted-foreground hover:text-primary transition-colors">
                My Records
              </Link>
              <div className="flex gap-2 items-center ml-4">
                <Link href="/dashboard/hospital" className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
                  Provider Portal
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="border-t bg-white py-12 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                ✚ HealIndia AI
              </div>
              <p className="text-sm text-muted-foreground">
                Right Treatment. Right Hospital. Right Price. One Journey.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Patients</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/onboarding">Start Journey</Link></li>
                <li><Link href="/hospitals">Find Hospitals</Link></li>
                <li><Link href="/dashboard/patient">Patient Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/dashboard/hospital">Hospital Dashboard</Link></li>
                <li><Link href="/dashboard/admin">Government Intel</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal (Prototype)</h4>
              <p className="text-xs text-muted-foreground">
                This is an SIH Prototype. AI-assisted information only. Final clinical decisions must be made by a qualified professional.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
