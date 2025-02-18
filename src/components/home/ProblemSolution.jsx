import Container from "../common/container";
import ProblemSolutionHeader from "./ProblemSolutionHeader";

const ProblemSolution = () => {
  return (
    <>
      <section className="pt-32">
        <Container>
          <ProblemSolutionHeader />

          <div className="">
            <div className="w-[275px] h-[349px] rounded-2xl p-5 space-y-5">
              <div>
                <img src="/problem.svg" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProblemSolution;
