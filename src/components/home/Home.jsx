import React, { useEffect, useState } from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      // Activar la visibilidad después de que el componente se monte
      setIsVisible(true);
  }, []);


  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className={`home__img ${isVisible ? 'home__img-visible' : ''}`}></div>

                <Data />
            </div>

            <ScrollDown />
            
        </div>
    </section>
  )
}

export default Home