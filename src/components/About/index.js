import { useEffect, useState } from 'react'

import {
  faSass,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faGitSquare,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(
      () => {
        setLetterClass('text-animate-hover')
      },

      3000
    )
  }, [])

  return (
    <>
      {' '}
      <div className="container about-page">
        {' '}
        <div className="text-zone">
          {' '}
          <h1>
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />{' '}
          </h1>{' '}
          <p>
            {' '}
            I'm a front-end developer who codes for the challenge and
            opportunity. I am searching for new and unique problems to help
            solve. As technology becomes more assessable, code creates
            opportunities to streamline the mundane so people can focus on the
            challenges that ignite their passion.{' '}
          </p>{' '}
          <p align="LEFT">
            {' '}
            I'm quietly confident, voraciously curious, and perpetually working
            on improving my skills and knowledge one design problem at a time.{' '}
          </p>{' '}
          <p>
            {' '}
            When I am not coding or spending time with my family, I am an
            Intelligence Technician for the U.S. Army. Developing tools to help
            my Soldiers be more successful was what started my coding journey.{' '}
          </p>{' '}
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitSquare} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default About
