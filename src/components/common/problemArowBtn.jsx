import { cn } from "../liba/utili/cn";

const ProblemArrowBtn = ({ children, className }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center bg-white size-9 sm:size-10 rounded-full cursor-pointer shadow-primary ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ProblemArrowBtn;
