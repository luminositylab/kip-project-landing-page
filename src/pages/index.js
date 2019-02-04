// TODO: newsletter might be mailchip - could connect to shopify (if we decide to do that vs. amazon)
// research how much it costs to put a product on amazon vs. shopify
// newsletter and creator community - keep them both! They will exist

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import kipRender3 from '../assets/images/kip.render.3.png'
import blinkingKip from '../assets/images/blinking-kip.gif'

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

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <br/> {/*using this makes the header separate cleanly from the body,
        but it forces the nav bar to stick to the top when user focuses on header*/}
        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content"> 
                <header className="major">
                  <h2>Robotics - <i>simplified</i></h2>
                </header>
                <p>
                Discover the how and why of every step in the process of building your own robot.
                Become a roboticist.
                </p>
                <a href="https://www.amazon.com" className="button special">Buy KiP</a>
                
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
                Take Kip to the next level by designing new parts and watch them take shape on your 3D printer.
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Creator Community</h2>
                </header>
                <p>
                Share your designs with other Kip creators and be inspired by their ideas and discussion.
                </p>
                <Link to="/download" className="button special">
                    <span/>
                    &nbsp; Learn More
                  </Link>
              </div>
              <span>
                <img src={blinkingKip} alt="" />
              </span>
            </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Stay Updated</h2>
              <p>
              Join the Kip newsletter to follow development milestones
              and be the first to learn about future release dates.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                <Link to="/download" className="button special">
                    <span/>
                    &nbsp; Check Out Newsletter
                </Link>
                </li>
                  {/*
                  <Link to="/generic" className="button special">
                    <span className="icon fa-mobile" />
                    {'  '}
                    &nbsp; iOS
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="button special">
                    <span className="icon fa-android" />
                    &nbsp; Android
                  </Link>
                   */}
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
