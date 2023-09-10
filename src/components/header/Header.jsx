import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='header-buttons ' >Hello I'm</h5>
        <h1 className='header-buttons'>Mithoon N S</h1>
        <h4 className='hh4'>Developer</h4>
        <CTA/>
        <HeaderSocials/>

        <div className="me header-buttons ">
          <img src={ME} alt="me" />
        </div>
        
        <a href='#contact' className='scroll__down '>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header