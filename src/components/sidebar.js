import React from 'react'
import photo from '../assets/pexels-jess-bailey-designs-839443.jpg'
import '../styles/sidebar.css'
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
function Sidebar() {
  return (
    <div className='sidebar'>
        <h3>ABOUT ME</h3>
         <img src={photo} alt="profile"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus porttitor tortor, non dapibus est bibendum sed.</p>
         <h3>CATEGORIES</h3>
         <div className="sidebarItem">
         <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
        </div>
       
        <h3>FOLLOW US</h3>
        <div className='about' style={{display:'flex',flexDirection:'row',marginLeft:'380px',marginTop:'20px'}}>
        <TwitterIcon fontSize='large'/>
         <FacebookIcon fontSize='large'/>
         <LinkedInIcon fontSize='large'/>
         <PinterestIcon fontSize='large'/>
         </div>
    </div>
  )
}

export default Sidebar