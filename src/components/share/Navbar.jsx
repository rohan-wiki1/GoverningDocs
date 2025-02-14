import { useState } from "react";
import Container from "../common/container";
import Logo from "./Logo";
import Button from "../common/button";
import { navItems } from "../liba/db";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <nav className="py-5 relative sm:py-8 xl:py-11">
        <Container>
          <div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 lg:py-5 bg-white rounded-full ">
            <Logo />

            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 font-secondary">
              {navItems.map(({ label, link }, i) => (
                <a href={link} key={i} >
                  <p className="text-tertiary text-sm xl:text-base hover:text-primary transition-colors duration-150">
                    {label}
                  </p>
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="lg:hidden block text-tertiary cursor-pointer "
                onClick={toggleMenu}
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                </div>
              </button>
              <Button className={"gradient-primary"}>Get Started Today</Button>
            </div>
          </div>
          {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
