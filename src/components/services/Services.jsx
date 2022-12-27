import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Domain registration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Search engine optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Educational website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blogging website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Healthcare website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>General Consultation</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding and identity design like logo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Print design like brochures, flyers, business cards etc.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital designs such as websites, social media, and email campaigns.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advertising and promotional design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Package design like labels, bottles, boxes, and cars.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Photo editing like retouching and removing of backgrounds.</p>
            </li>
          </ul>
        </article>
        {/* End of Graphic Design Services */}
        <article className="service">
          <div className="service__head">
            <h3>Software & App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IT Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Customer Relationship Management Systems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desktop apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Console apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database development</p>
            </li>
          </ul>
        </article>
        {/* End of Software & App Development */}

      </div>
    </section>
  )
}

export default Services