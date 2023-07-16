import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/Mithoonns2001' target='_blank' className='header-buttons'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/mithoon-n-s-746bb024b' className='header-buttons' target='_blank'><TfiLinkedin/></a>
        <a href='https://twitter.com/Mithoonns2001' className='header-buttons' target='_blank'><FaTwitter/></a>

    </div>
  )
}

export default HeaderSocials