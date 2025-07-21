import React from 'react'
import Banner from './components/Banner/Banner';
import Latest from './Components/Latest';
import Category from './Components/Sections/Categories/Category';
import content from './data/content.json';
import Footer from './Components/footer/footer';
import Copyright from './Components/footer/copyright';


function App() {
  return (
    <div>

      <Banner/>
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