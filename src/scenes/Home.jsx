import Nav from "../components/nav";
import ButtonFill from "../components/ButtonFill";
import Hero from "../page/Hero";
const Home = () => {
  return (
    <main className="top-section dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <Nav />
      <Hero />
    </main>
  );
}

export default Home;
