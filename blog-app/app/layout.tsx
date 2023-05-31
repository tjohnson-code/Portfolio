import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';
import './globals.css';

export const metadata = {
  title: 'Blog App',
  description: 'Created by Tim Johnson',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-emerald-950 text-red-900 max-w-7xl mx-auto">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
