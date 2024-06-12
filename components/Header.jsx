import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-6 sm:px-18 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-start py-4 sm:py-8">
          {/* logo */}
          <Link href="/" className="flex items-center">
              <Image
                src="/2.png"
                alt="logo"
                width={155}
                height={16}
                priority
              />
          </Link>

          {/* socials */}
          <div className="flex items-center">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;