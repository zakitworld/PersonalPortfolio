import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World! I'm</h5>
        <h1>Abdul-Razak, J</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="This is me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header