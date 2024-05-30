import Nav from "../components/nav";
import ButtonFill from "../components/ButtonFill";
const Home = () => {
  return (
    <div className="top-section">
      <div className="mx-6">
        <div className='max-w-[1700px] mx-auto '>
          <div className="flex flex-col justify-between">
            <Nav />
            <div className="mx-auto max-w-7xl ">
              <div className='pt-6 mt-6 '>
                <ButtonFill content="22 Juin 2024" />
                <div className="backtitle">
                  <h2 className='Kontes-Compressed-Bold text-[38px] md:text-[78px] text-white  pl-3 md:pl-0'>Empowering Communities</h2>
                  <h2 className='Kontes-Compressed-Bold text-[38px] md:text-[78px] text-white pl-3 md:pl-0'>Through <span className="color-raven">Open Source</span></h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
