import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react'
 
const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><BiHome/> </a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/> </a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBook/> </a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}><RiServiceLine/> </a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><TiMessages/> </a>
 
    </nav>
  )
}

export default Nav