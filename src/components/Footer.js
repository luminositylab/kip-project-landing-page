import React from 'react'

const Footer = (props) => (
    <footer style={{color: "#2454A3"}} id="footer">
        <section>
            <h2 style={{color: "#2454A3"}}>The Luminosity Lab</h2>
            <p>We're The Luminosity Lab, a research based start-up lab designed to solve the world's diverse problems.</p>
            {/*
            <ul className="actions">
            <Link to="/download" className="button special">
                    <span/>
                    &nbsp; Link here?
                  </Link>
                  
            </ul>
            */}
        </section>
        <section>
            <h2 style={{color: "#2454A3"}}>Contact Us</h2>
            <dl className="alt">
                <dt style={{color: "#2454A3"}}>Address</dt>
                <dd>Arizona State University &bull; Tempe, AZ 85281 &bull; USA</dd>
                <dt style={{color: "#2454A3"}}>Email</dt>
                <dd>support@kipkit.io</dd>
            </dl>
            <ul className="icons">            
                <li><a href="https://www.instagram.com/robo.kip/" className="icon fa-instagram alt" style={{backgroundColor: "#8CC9F0"}}><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/orgs/luminositylab/teams/project-kip" className="icon fa-github alt" style={{backgroundColor: "#8CC9F0"}}><span className="label">Github</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; The Luminosity Lab<br/>Design: <a href="https://html5up.net">HTML5 UP</a></p>
        
    </footer>
)

export default Footer
