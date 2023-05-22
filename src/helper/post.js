import React from 'react'

function Post(props) {
  return (
    <div className='postItem'>
    <img src={props.image} alt="postpic"/>
        <p id='tags'>{props.tags}</p>
     <h3>{props.name}</h3>
     <p id='time'>{props.time}</p>
     <p id='info'>{props.info}</p>
    </div>
  )
}

export default Post