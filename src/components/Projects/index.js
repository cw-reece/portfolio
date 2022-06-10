import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import cam_censor from '../../Assets/images/cam_censor.png'
import etch from '../../Assets/images/etch.png'
import jokeBot from '../../Assets/images/jokeBot.png'
import quoteGen from '../../Assets/images/quoteGen.png'
import screenCap from '../../Assets/images/screenCap.png'

const Projects = () => {
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
      <div className="container projects-page">
        {' '}
        <div className="text-zone">
          {' '}
          <h1>
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />{' '}
          </h1>{' '}
          <section className="proj">
            <article
              className="one"
              onClick={() => {
                window.location.href = 'https://cwcamface.netlify.app'
              }}
            >
              <img src={cam_censor} alt="" />
              <h2>Web Cam Censorship Tool</h2>
            </article>
            <article
              className="two"
              onClick={() => {
                window.location.href = 'https://etchcw.netlify.app'
              }}
            >
              <img src={etch} alt="" />
              <h2>Etch-A-Sketch Game</h2>
            </article>
            <article
              className="three"
              onClick={() => {
                window.location.href = 'https://cw-joke-bot.netlify.app'
              }}
            >
              <img src={jokeBot} alt="" />
              <h2>Bot that tells Jokes on Demand</h2>
            </article>
            <article
              className="four"
              onClick={() => {
                window.location.href = 'https://quotebycw.netlify.app'
              }}
            >
              <img src={quoteGen} alt="" />
              <h2>Random Quote Generator with tweet option</h2>
            </article>
            <article
              className="five"
              onClick={() => {
                window.location.href = 'https://cwscreencap.netlify.app'
              }}
            >
              <img src={screenCap} alt="" />
              <h2>capture a screen for picture in picture viewing</h2>
            </article>
          </section>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Projects
