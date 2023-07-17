import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='abouth5'>What Skills I have</h5>
      <h2 className='header-buttons'>My experience</h2>

    <div className='container experience__container '>
      <div className='experience__frontend header-buttons'>
        <h3>Frontend Development</h3>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Flutter</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>

      </div>




      <div className='experience__backend header-buttons' >
      <h3>Backend Development</h3>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>C Language</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>


        
      </div>
        
      <div className='experience__backend header-buttons' >
      <h3>Technologies</h3>
      
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Django</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Flask</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>Laravel</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience_details-icons'/>
          <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>

        
      </div>
        
      </div>

 


    </section >
  )
}

export default Experience