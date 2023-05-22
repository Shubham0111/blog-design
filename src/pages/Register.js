import React from 'react'
import backgorund from '../assets/pexels-photo-317355.jpeg'
import '../styles/register.css'
function Register() {
  return (
    <div className="contact">
    <div
      className="leftSide"
      style={{ backgroundImage: `url(${backgorund})` }}
    ></div>
    <div className="rightSide">
      <h1>Register</h1>

      <form id="contact-form" method="POST">
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />
        <label htmlFor="message">Message</label>
        <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          required
        ></textarea>
        <button type="submit"> Send Message</button>
      </form>
    </div>
  </div>
  )
}

export default Register