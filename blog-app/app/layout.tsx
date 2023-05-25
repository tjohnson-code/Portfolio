import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';
import './globals.css';

export const metadata = {
  title: 'Blog App',
  description: 'Created by Tim Johnson',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
