import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import { useState } from 'react';
import ContactModal from './ContactModal';

const iconSize = {
  height: '40px',
  width: '40px',
};

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="flex w-full mx-auto justify-center items-center sticky top-0 z-30 bg-white text-slate-400 shadow-md md: tracking-wide">
      <div className="flex w-full justify-between md:px-12">
        {/* Flex row */}
        <div className="flex items-center pr-6 text-2xl font-bold">
          {/* Logo - Left */}
          <Link href="#hero">
            <Image
              className="bg-fixed rounded-2xl w-auto h-auto hover:animate-pulse"
              src="/tj.png"
              width={30}
              height={30}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center md:tracking-widest">
          {/* Navigation - Center */}
          <Link className="px-3 hover:text-slate-500" href="#about">
            About
          </Link>
          <Link className="px-3 hover:text-slate-500" href="#projects">
            Projects
          </Link>
          <Link
            className="px-3 hover:text-slate-500"
            href="#"
            onClick={toggleModal}
          >
            Contact
          </Link>
          <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
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
