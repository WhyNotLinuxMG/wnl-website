import Nav from "../components/nav";

const Home = () => {
  return (
    <div className="top-section">
      <div className="mx-6">
        <div className='max-w-[1700px] mx-auto pt-5'>
          <div className="flex flex-col justify-between">
            <Nav />
            <div className="text-center my-4">
              <h1 className="text-white">HOME</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
