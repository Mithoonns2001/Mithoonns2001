import React from 'react'
import './about.css'
import ME from '../../assets/ai.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Internship</h5>
              <small>Python Full Stack</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Hackathons</h5>
              <small>Four</small>
            </article>
          </div>

          <p>

          Although I may not have much work experience yet, I am eager to learn and gain practical skills in Application Development and Deep Learning. I am a quick learner, a team player, and I am always looking for ways to improve my knowledge and skills.  
          </p>

          <a href='#contact' className='btn btn-primary'> Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About