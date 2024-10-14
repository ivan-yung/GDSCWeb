import '../styles/Hero.css'
import hero1 from '../img/gdschero1.png'
import hero2 from '../img/gdschero2.png'
import hero3 from '../img/gdschero3.png'
import hero4 from '../img/gdschero4.png'

function Hero() {

  return (
    <>
    <div className="HeroContain">
      <div className="text">
        <h3 className="sub-heading">Build Real-World Products with the</h3>
        <h1 className="heading">UC Davis</h1>
        <h1 className="heading">Product Cohort</h1>
        <p className="sub-text">
          This cohort focuses on collaborating with real-world startups to deliver a 
          fully-functional product, simulating the experience of working in a professional
          environment.
        </p>
        <div className = "buttons">
          <button className="joinb">Join Our Cohort</button>
          <button className="contactb">Contact Us</button>
        </div>
      </div>
      <div className="images">
        <img src={hero1}/>
        <img src={hero2}/>
        <img src={hero3}/>
        <img src={hero4}/>
      </div>

    </div>
    </>
  )
}

export default Hero
