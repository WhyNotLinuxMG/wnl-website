import 'bootstrap/dist/css/bootstrap.min.css'
import Comptetion from './page/Comptetion'
import Conferences from './page/Conferences'
import Stande from './page/Stande'
import Statistiques from './page/Statistiques'
import About from './scenes/About'
import Challenges from './scenes/Challenges'
import CountDownDay from './scenes/CountDownDay'
import Footer from './scenes/Footer'
import GetTicket from './scenes/GetTicket'
import Home from './scenes/Home'
import OrganizersPartners from './scenes/OrganizersPartners'
import Photos from './scenes/Photos'
import Questions from './scenes/Questions'
import Stat from './scenes/Stat'
import './styles/App.css'


const App = () => {
  const WNL = new Date("June 22, 2024").getTime();
  return (
    <>
      <Home />
      <div className="bg-background">
        <div className="mx-auto max-w-[1600px]  ">
          <CountDownDay WNL={WNL}/>
          <OrganizersPartners/>
          <About/>
          <Conferences/>
          <Stande/>
          <Statistiques/>
          <Comptetion/>
          <Stat/>
          <Challenges/>
          <Photos/>
          <Questions/>
          <GetTicket/>
          <Footer/>
        </div>     

      </div>
    </>
  )
}

export default App