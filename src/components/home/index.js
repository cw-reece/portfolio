import LogoTitle from '../../Assets/images/logopreload.png'
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hello
            <br />
            I'm
            <img src={LogoTitle} alt="developer" />
            .W. Reece
            <br />
            Web developer
          </h1>
          <h2>FrontEnd Developer / Javascript Enthuasaist </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
