import LogoTitle from '../../Assets/images/logopreload.png'
import './index.scss'
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
        </div>
      </div>
    </>
  )
}

export default Home
