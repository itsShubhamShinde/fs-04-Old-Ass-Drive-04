import React from 'react'
import './Style/Nav.css'
import logo from '../Image/Logo.png'

const Nav = () => {
    return (
      <div className='NavOuterDiv'>
        <div className="logoDiv">
        <img src={logo} alt="" height="60%" width="60%" />
        </div>
        <div className="menuDiv">
          <ul>
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="symbolDiv">
            <button>Contact us</button>
            <button>Log In</button>
            <button style={{backgroundColor:"green",color:"white"}}>Sign Up</button>
        </div>
      </div>
    )
  }

export default Nav