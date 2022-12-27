import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/port2.png'
import IMG2 from '../../Assets/port3.png'
import IMG3 from '../../Assets/port6.png'
import IMG4 from '../../Assets/port7.png'
import IMG5 from '../../Assets/port9.png'
import IMG6 from '../../Assets/port11.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Finanace',
    github: 'https://github.com/restaurantproject',
    demo: 'https://dribble.com/Alien_pixels'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map (({
          id, image, title, github, demo}) => {
            return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
            )
        })
       }
      
      </div>
    </section>
  )
}

export default Portfolio