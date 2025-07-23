import React from 'react'
import Banner from './components/Banner/Banner';
import Latest from './Components/Latest';
import Category from './Components/Sections/Categories/Category';
import content from './data/content.json';
import Footer from './Components/footer/footer';
import Copyright from './Components/footer/copyright';
import { Navigation } from './Components/Navigation/naviagtion';


function App() {
  return (
    <div>
      <Navigation/>
      <div className='px-10 py-5'><Banner/></div>
      <Latest/>
      {content?.categories && content?.categories?.map((item, index) => (
        <Category key={item?.title + index} {...item} />
      ))}
      <Footer/>
      <div className='bg-gray-900'>
        <Copyright/>
      </div>
    </div>
  )
}

export default App;