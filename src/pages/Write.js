import React from 'react'
import '../styles/write.css'
import coverimage from '../assets/pexels-photo-6685428.jpeg'
function Write() {
  return (
    <div className='write'>
    <img src={coverimage} alt="cover"/>

    <form className='forms'>
    <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
           <button className="writeSubmit" type="submit">
          Publish
        </button>
    </form>
    </div>
  )
}

export default Write