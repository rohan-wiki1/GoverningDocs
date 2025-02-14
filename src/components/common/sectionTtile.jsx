import { cn } from "../liba/utili/cn";
import TextGradient from "./textGradient";

const SectionTtile = ({ children, className, gradient }) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-[35px] lg:text-[46px]   font-primary font-bold md:leading-[45px] lg:leading-[58.7px]",
        className
      )}
    >
      {children}
      <TextGradient>{gradient}</TextGradient>
    </h1>
  );
};

export default SectionTtile;
