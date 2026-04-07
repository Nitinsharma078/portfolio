import { Inter, JetBrains_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ReduxProvider from './ReduxProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Nitin Sharma | Frontend Engineer',
  description:
    'Frontend Engineer with 2+ years of experience building modern web applications with React.js, Next.js, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark" data-theme="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
