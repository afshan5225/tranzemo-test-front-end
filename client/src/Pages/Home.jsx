
import {Routes,Route} from 'react-router-dom'
import NavBar from '../componets/NavBar'

import Intro from '../componets/Intro'




function Home() {
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-500 to-blue-500 text-white"
      >
  <NavBar />
  <Intro />
  
</div>

      
    </>
  )
}

export default Home