import Contributor from "../components/Contributor";
import Nav from "../components/nav";
import Hero from "../page/Hero";
const Home = () => {
  return (
    <main className="top-section dark:bg-gray-800 bg-white relative overflow-hidden">
      <Nav />
      <Hero />
      <Contributor />
    </main>
  );
};

export default Home;
