import React from 'react'
import Conferences from './page/Conferences'
import Stande from './page/Stande'
import Comptetion from './page/Comptetion'
import Statistiques from './page/Statistiques'
import Home from './scenes/Home'
import './styles/App.css'

import OrganizersPartners from './scenes/OrganizersPartners'
import Stat from './scenes/Stat'
import Challenges from './scenes/Challenges'
import Photos from './scenes/Photos'
import Questions from './scenes/Questions'
import GetTicket from './scenes/GetTicket'
import Footer from './scenes/Footer'
import About from './scenes/About'

const App = () => {
  return (
    <>
      <Home />
      <div className="bg-background">


        <div className="mx-auto max-w-[1600px]  ">
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