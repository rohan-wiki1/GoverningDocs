import Hero from "./components/home/Hero";
import ProblemSolution from "./components/home/ProblemSolution";
import Footer from "./components/share/Footer";

import Navbar from "./components/share/Navbar";

const App = () => {
  return (
    <>
      <main className="font-secondary bg-[url('/hero-bg.svg')] min-h-svh bg-no-repeat bg-top ">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Footer />
      </main>
    </>
  );
};

export default App;
