import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import kipRender3 from '../assets/images/Kip Render.png'
import blinkingKip from '../assets/images/blinking-kip.gif'
import assemblyGuide from '../assets/images/kIP_Assembly_Guide_V2.pdf'
import gskip from '..assets/images/GS KIP.PNG'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="KiP | Learn Robotics" />

        <Header />
        <br/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content"> 
                <header className="major">
                  <h2>Robotics - <i>simplified</i></h2>
                </header>
                <p>
                Discover the how and why of every step in the process of building your own robot.
                </p>
                
              </div>
              <span className="image">
                <img src={kipRender3} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Learn Diverse Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-bolt" />
                <h3>Electrical Design</h3>
                <p>
                Master the principles of electrical design, from power electronics to digital motion control.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-code" />
                <h3>Software</h3>
                <p>
                Program new functionalities and customize pre-built ones,
                from your robot’s first steps to machine learning algorithms.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-print" />
                <h3>3D Printing</h3>
                <p>
                Take KiP to the next level by designing new parts and watch them take shape on your 3D printer.
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Tutorials</h2>
                </header>
                <p>Enjoy the learning platform and build your KiP along with everyone else.
                  We've put together tutorials for all you Kipsters.</p>
                {/*
                <p>
                Share your designs with other KiP creators and be inspired by their ideas and discussion.
                </p>
                 */} 
                 {/* NOTE: use the Link component for internal links - to other pages */}
                  <a 
                    rel="noopener noreferrer"
                    className="button special"
                    target="_blank"
                    href={assemblyGuide}>Build KiP</a>
              </div>
              <span>
                <img src={blinkingKip} alt="" />
              </span>
            </div>
          </section>

          <section id="second" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>KIP + Girl Scouts</h2>
                </header>
                <p>Learn about opportunities for your Girl Scout Troup to earn robotics and coding badges with KIP!</p>
                {/*
                <p>
                Share your designs with other KiP creators and be inspired by their ideas and discussion.
                </p>
                 */} 
                 {/* NOTE: use the Link component for internal links - to other pages */}
                  <a 
                    rel="noopener noreferrer"
                    className="button special"
                    target="_blank"
                    href={assemblyGuide}>Explore Badges</a>
              </div>
              <span>
                <img src={gskip} alt="" />
              </span>
            </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
            {/*
              <h2>Stay Updated</h2>
              <p>
              Join the Kip newsletter to follow development milestones
              and be the first to learn about future release dates.
              </p>
              */}
              <h2>Buy KiP</h2>
              <p>Get your hands on your own KiP and become a master in the fundamentals of robotics.</p>
            </header>
            <footer className="major">
              <Link to="/construction" className="button special">
                &nbsp; Buy KiP 
              </Link>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
