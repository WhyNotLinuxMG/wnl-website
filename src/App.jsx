import React from 'react'
import Conferences from './page/Conferences'
import Stande from './page/Stande'
import Comptetion from './page/Comptetion'
import Statistiques from './page/Statistiques'
import Home from './scenes/Home'
import './styles/App.css'
import Stand from './scenes/Stand'
import Activity from './scenes/Activity'
import Conference from './scenes/Conference'
import OrganizersPartners from './scenes/OrganizersPartners'
import Stat from './scenes/Stat'
import Challenges from './scenes/Challenges'
import Photos from './scenes/Photos'
import Questions from './scenes/Questions'
import GetTicket from './scenes/GetTicket'
import Footer from './scenes/Footer'

const App = () => {
  return (
    <>
      <Home/>
      <div className="bg-background">
        <div className="mx-auto max-w-7xl ">
          <OrganizersPartners/>
          <Activity />
          <Conference/>
          <Stand/>
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