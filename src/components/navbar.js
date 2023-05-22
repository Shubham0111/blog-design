import React from 'react'
import {Link} from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/navbar.css'
// import { TextField, withStyles } from '@mui/material';
function Navbar() {
    
  return (
    <div className='navbar'>
      <div className='logo'>
         <TwitterIcon fontSize='large'/>
         <FacebookIcon fontSize='large'/>
         <LinkedInIcon fontSize='large'/>
         <PinterestIcon fontSize='large'/>
      </div>
      <div className='list'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/write">Write</Link>
      <Link to="/register">Register</Link>
      </div>
      <div className='profile' style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/register"><AccountCircleIcon fontSize='large'/></Link>
      <input
      type="text"
      style={{
        borderRadius: '30px',
        padding: '10px',
        border: '1px solid #ccc',
        marginLeft:'20px'
      }}
    />
    {/* //    <input type="text" style={inputStyle} /> */}
      <SearchIcon style={{ fill: "blue" }} />
      {/* <RoundedTextField
      label="Enter text"
      variant="outlined"
    /> */}
      </div>
    </div>
  )
}
// const RoundedTextField = withStyles({
//     root: {
//       '& .MuiOutlinedInput-root': {
//         borderRadius: '100px',
//       },
//     },
//   })(TextField);
export default Navbar