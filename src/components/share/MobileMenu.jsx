import { navItems } from "../liba/db";
import Logo from "./Logo";

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ toggleMenu }) => {
  return (
    <>
      <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-hidden p-6">
        <div className="flex justify-between items-center pb-6">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-black text-2xl self-end cursor-pointer"
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>
        <div className="space-y-4">
          {navItems.map(({ label, link }, i) => (
            <a
              href={link}
              key={i}
              className="block text-lg text-tertiary hover:text-primary transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
