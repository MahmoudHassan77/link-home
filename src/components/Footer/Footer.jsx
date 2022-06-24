import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../../photos/logo.png"
import google from "../../photos/google-play.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons'
import style from "./Footer.module.scss"

function Footer() {
  return (
   <Container>
    <footer className="container py-5">
  <div className="row">
    <div className={`col-12 col-md ${style.logoSec}`}>
      <img className={style.logo} alt='linkDev logo' id='logo' src={logo} />
      <small className="d-block mb-3 mt-4">We make technology produce productive, adaptable and sustainable business experiences.</small>
    </div>
    <div className="col-6 col-md">
      <h5>Company</h5>
      <ul className="list-unstyled text-small">
        <li>About</li>
        <li>Careers</li>
        <li>Mobile</li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Contact</h5>
      <ul className="list-unstyled text-small">
        <li>Help/FAQ</li>
        <li>Press</li>
        <li>Affilates</li>
      </ul>
    </div>
    <div className="col-12 col-md">
      <h5>Media</h5>
      <ul className="list-unstyled text-small">
        <li>News</li>
        <li>Photo</li>
        <li>Video</li>
      </ul>
    </div>
    <div className={`col-12 col-md ${style.last}`}>
      <div>
        <button className={style.social}><FontAwesomeIcon icon={faFacebookF}/></button>
        <button className={style.social}><FontAwesomeIcon icon={faInstagram}/></button>
        <button className={style.social}><FontAwesomeIcon icon={faTwitter}/></button>
      </div>
      <h6 className={style.discover}>Discover our app</h6>
      <div className={style.btns}>
            <button className={style.down}>
            <img src={google} style={{fontSize:"1rem", marginRight:"8px"}} alt="google play"/>
            <div>
                <div>GET IT ON</div>
                <div>GOOGLE PLAY</div>
            </div>
            </button>
        <button className={style.down}>
            <FontAwesomeIcon icon={faApple} style={{fontSize:"1rem", marginRight:"8px"}} />
            <div>
                <div>Avalible on the</div>
                <div>Apple Store</div>
            </div>
            </button>
      </div>
    </div>
  </div>
</footer>
 <p className={style.lastFooter}>All rights reserved@Linkdevelopment.com</p>
   </Container>
  )
}

export default Footer