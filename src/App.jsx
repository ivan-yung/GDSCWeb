
import './styles/App.css'
import Hero from './components/Hero'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  //  NavBar contains the dynamic re-sizing navbar
  //  Hero contains section 1, the grabbing section with gridded pictures
  //  Body contains the bottom 2 sections with more info 
  //  Footer contains the foot note with information
  return (
    <>
      <div className="navbarcontain">
        <NavBar/>
      </div>
      <div className="global">
        <div className="hero">
          <Hero/>
        </div>
        <div className="body">
          <Body/>
        </div>
      </div>
      <div className = "footer">
          <Footer/>
      </div>
    </>
  )
}

export default App
