import React from 'react'

import kipCastle from '../assets/images/kipv3.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={kipCastle} alt="KIP" />
    </span>
    <p style={{color: "#2454A3"}}>
      An affordable, open-source 3D-printed robot for teaching a breadth <br />of relevant hardware and software skills to students of all ages.
      </p>
  </header>
)

export default Header
