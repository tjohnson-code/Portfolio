import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const iconSize = {
  height: '40px',
  width: '40px',
};

function Header() {
  return (
    <header className="flex w-full mx-auto items-center justify-center sticky top-14 z-30 bg-white text-slate-400 shadow-md md: tracking-wide">
      <div className="flex justify-between space-x-3 lg:max-w-7xl">
        {/* Flex row */}
        <div className="flex items-center pr-6 text-2xl font-bold">
          {/* Logo - Left */}
          <h2>Logo Here</h2>
        </div>
        <div className="flex space-x-3 items-center">
          {/* Navigation - Center */}
          <Link className="hover:text-slate-500" href="#about">
            About
          </Link>
          <Link className="hover:text-slate-500" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-slate-500" href="#home">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          {/* Profile Links - Right */}
          <SocialIcon
            className="nav-hover"
            url="https://github.com/tjohnson-code"
            target="_blank"
            bgColor="transparent"
            fgColor="gray"
            style={iconSize}
          />
          <SocialIcon
            className="nav-hover"
            url="https://www.linkedin.com/in/timothy-johnson-7a1a43178/"
            target="_blank"
            bgColor="transparent"
            fgColor="gray"
            style={iconSize}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
