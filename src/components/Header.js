import React from 'react'

import logo from '../assets/images/kip-logo-with-text.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="KIP" />
    </span>
    <p>
      An affordable, open-source 3D-printed robot for teaching a breadth
      <br />
      of relevant hardware and software skills to students of all ages.
      <br />
    </p>
  </header>
)

export default Header
