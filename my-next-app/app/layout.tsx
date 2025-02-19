// app/layout.tsx
import {Inter} from 'next/font/google';
import './global.css'

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>My Next.js App</h1>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Next.js App</footer>
      </body>
    </html>
  );
}
