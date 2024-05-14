import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="container">
<div className="NavbarElements">
  <div className="NavbarLogo">

  </div>
  <div className="NavbarList">
    <ul>
    <li><NavLink to={'/Home'}>HOME</NavLink></li>
      <li><NavLink to={'/About'}>ABOUT US</NavLink></li>
      <li><NavLink to={'/Driver'}>DRIVER</NavLink></li>
      <li><NavLink to={'/Contact'}>CONTACT</NavLink></li>
    <li><NavLink to={'/Basket'}>Basket</NavLink></li>
    </ul> 
  </div>
</div>
</div>
</>
)
}

export default Navbar