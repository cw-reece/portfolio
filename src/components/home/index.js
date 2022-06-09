import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../Assets/images/logopreload.png'
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['.', 'W', '.', ' ', 'R', 'e', 'e', 'c', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  const greetArray = ['H', 'e', 'l', 'l', 'o']
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetArray}
              idx={12}
            />
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
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
