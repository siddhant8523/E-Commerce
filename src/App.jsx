import React from 'react'
import Banner from './components/Banner/Banner';
import { Navigation } from './Components/Navigation/naviagtion';
import Latest from './Components/Latest';


function App() {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <Latest/>
    </div>
  )
}

export default App;