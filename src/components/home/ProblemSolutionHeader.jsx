import SectionTtile from "../common/sectionTtile";
import ProblemArowBtn from "../common/problemArowBtn";
import { Arrow } from "../Icon";
const ProblemSolutionHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2.5 sm:gap-5">
        <SectionTtile gradient="Solution">Problem & </SectionTtile>
        <div className="flex justify-center items-center gap-3.5">
            <ProblemArowBtn className='' >
              <Arrow className="text-primary" />
            </ProblemArowBtn>
            <ProblemArowBtn className="gradient-primary">
              <Arrow className="text-white rotate-180" />
            </ProblemArowBtn>
          </div>
      </div>
    </>
  );
};

export default ProblemSolutionHeader;
