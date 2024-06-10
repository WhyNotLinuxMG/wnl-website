import Contributor from "../components/Contributor";
import Nav from "../components/nav";
import Hero from "../page/Hero";

const Home = ({ setIsPop, isPop }) => {
  return (
    <main className="top-section dark:bg-gray-800 relative overflow-hidden">
      <Nav setIsPop={setIsPop} isPop={isPop} />
      <Hero setIsPop={setIsPop} isPop={isPop} />
      <Contributor />
    </main>
  );
};

export default Home;
