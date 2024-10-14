import Carousel from './Carousel'

import '../styles/Body.css'
import fillphoto from '../img/gdscinfo1.png'
import GDSCcar1 from '../img/GDSCcar1.png'
import GDSCcar2 from '../img/GDSCcar2.png'
import car1 from '../img/GDSCcar1.png'
import car2 from '../img/GDSCcar2.png'
import car3 from '../img/gdschero2.png'

// Contains images for carousel 1
// Json file can be edited later for more or less items in carousel
const items = [
  {
    image: GDSCcar1
  },
  {
    image: GDSCcar2
  },
]
// Contains images for carousel 2
const items2 = [
  {
    image: car1
  },
  {
    image: car2
  },
  {
    image: car3
  },
]
function Body() {

  return (
    <>
    <div className="horizontalcontain">
      <div className="whysection">
        <div className="text">
            <h1 className="heading2">Why join the Product Cohort?</h1>
            <h3 className="sub-heading2">Because we turn your skills into tangible results!</h3>
            <p className="sub-text2">
              Do you want to take your development/design skills to the next level? Are you ready
              to collaborate with a startup and create a product that makes an impact? The UC Davis
              Google Developer Student Club'ss Procut Cohort is the oppurtunity you've been waiting for.

            </p>
            <p className="sub-text2">
              In this hands-on cohort, you won't just learn--you'll  do. You will join a small, dynamic 
              team tasked with building a functional website for an innovativeb startup. Together, you'll
              experience the thrill and challenges of working in a fast-paced real-world environment.
            </p>
            <div className = "buttons">
              <button className="contactb">View our Projects</button>
            </div>
        </div>
      </div>

      <img className="fillphoto" src={fillphoto}/>
    </div>

    <div className="horizontalcontain">
      <div className="imagecar">
        <Carousel items={items}/>
        <Carousel items={items2}/>
        <div className = "buttons">
          <button className="joinb">Join Our Cohort</button>
          <button className="contactb">Contact Us</button>
        </div>
      </div>
      <div className="about">
        <h2 classname="heading2">Benefits of the Product Cohort</h2>
        <h2 className="sub-heading2">Hands-on Experience</h2>
        <p className="sub-text2">
          This cohort gives you the chance to work in a real-world scenario with real dealines, clients, deliverables.
          By the end of the project, you'll have a fully developed website to showcase in your portfolio.
        </p>
        <h2 className="sub-heading2">Mentorship That Matters</h2>
        <p className="sub-text2">
          With guidance from experienced product managers who know the ins and outs of launching professional websites,
          you'll navigate through the complexities of client communication and team dynamics.
        </p>
        <h2 className="sub-heading2">A professional Network</h2>
        <p className="sub-text2">
          Working with a startup means you're not just gaining experience--
          you're building relationships. The connections you make in our cohort could open doors to internships or environmentstartup ventures
          of your own.
        </p>
        
      </div>


    </div>


    </>
  )
}

export default Body
