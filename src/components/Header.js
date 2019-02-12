import React from 'react'

import logo from '../assets/images/kip-logo-with-text.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="KIP" />
    </span>
    <p style={{color: "#2454A3"}}>
      An affordable, open-source 3D-printed robot for teaching a breadth</p>
    <p style={{color: "#2454A3"}}>
      of relevant hardware and software skills to students of all ages.
      </p>
    
  </header>
)

export default Header
