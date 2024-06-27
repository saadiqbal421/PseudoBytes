import { useState } from 'react';
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri"; // Import a menu icon
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinFill,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/pseudobytes/about/",
    Icon: RiLinkedinFill,
  },
];

const Socials = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div className="relative"> {/* Container with relative positioning */}
      <button 
        className="absolute top-0 right-0 z-50 md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RiMenu3Line aria-label="Toggle menu" />
      </button>
      <div className={`flex items-center gap-x-5 text-lg ${isMenuOpen ? 'pt-12' : ''} md:pt-0`}>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex gap-x-5 z-40`}>
          {socialData.map((social, i) => (
            <Link
              key={i}
              title={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`${
                social.name === "Github"
                  ? "bg-accent rounded-full p-[3px] hover:text-white"
                  : "hover:text-accent"
              } transition-all duration-300`}
            >
              <social.Icon aria-hidden />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;