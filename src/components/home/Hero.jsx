import Container from "../common/container";
import Button from "../common/button";

const Hero = () => {
  return (
    <>
      <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-[142px] ">
        <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-end items-center gap-5 md:gap-0">
          {/* left side */}

          <div className="space-y-5 md:space-y-[29px]">
            <h1 className="font-bold font-primary text-2xl md:text-4xl lg:text-6xl md:leading-[60px] lg:leading-[76px] max-w-[593px] ">
              Simplify your real estate document analysis
            </h1>
            <p className="font-semibold text-base md:text-lg lg:text-xl max-w-[450px] lg:max-w-[519px]">
              Streamline, Automate, and Secure Your Business Documents with Ai
              GoverningDocs
            </p>
            <Button className="gradient-primary">Get Started Today</Button>
          </div>

          {/* right side */}
          <div>
            <img
              className="w-[80%] md:w-[550px] lg:w-[740px] mx-auto"
              src="/hero-side-img.svg"
              alt="hero image"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
