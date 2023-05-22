import React from 'react'
import { postlist } from '../helper/postlist'
import Post from '../helper/post'
import '../styles/Posts.css'
function Posts() {
  return (
    <div className='posts'>
        {
           postlist.map((postItem,key)=>{
            return <Post image={postItem.img} name={postItem.name} 
            tags={postItem.tags} info={postItem.text} time= {postItem.time}/>
           })
        }
    </div>
   
  )
}

export default Posts