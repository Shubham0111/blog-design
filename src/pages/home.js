import React from 'react'
import Header from '../components/header'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'
function Home() {
  return (
    <>
   
      <Header/>
      <div style={{display:'flex',flexWrap:'wrap'}}>
     <Posts/>
     <Sidebar/>
    </div>
    </>
  )
}

export default Home