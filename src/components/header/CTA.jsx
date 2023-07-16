import React from 'react'
import CV from '../../assets/mithoon_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary header-buttons '>Download CV</a>
        <a href='#contact' className='btn btn-primary header-buttons'>let's talk</a>
    </div>
  )
}

export default CTA