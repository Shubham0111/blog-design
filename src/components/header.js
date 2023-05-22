import React from 'react'
import coverpic from '../assets/coverpic-blog.jpg'
import '../styles/header.css'
function Header() {
  return (
    <div className='header'>
        <div className='headtext'>
            <h1>React & Node</h1>
            <h3>Blog</h3>
        </div>
        <img src={coverpic} alt="blog img" className='headerimg'/>
       
    </div>
  )
}

export default Header