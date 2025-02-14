import Container from "../common/container";
import { navItems, socialIcons } from "../liba/db";

const Footer = () => {
  return (
    <>
      <footer className="pt-5 lg:pt-24">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5 ">
            <h1 className="font-primary text-xl sm:text-2xl lg:text-lg xl:text-4xl font-bold mb-2 sm:mb-0">
              Ai GoverningDocs
            </h1>
            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 font-secondary">
              {navItems.map(({ label, link }, i) => (
                <a href={link} key={i}>
                  <p className="text-tertiary text-sm xl:text-base hover:text-primary transition-colors duration-150">
                    {label}
                  </p>
                </a>
              ))}
            </div>
            {/* social icons */}
            <div className="flex items-center justify-center gap-2.5 ">
              {/* social icons */}
              {socialIcons.map(({ img, url }, i) => (
                <a href={url} key={i} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt="social icon" className="size[36px]" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-border-gradient border-t border-transparent mt-5 md:mt=[50px] lg:mt-[106px]">
            <p className="text-lg text-center leading-[18px]text-[#11111  py-5">
              Ai GoverningDocs 2024. All Rights Reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
