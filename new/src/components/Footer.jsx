import React from "react";
import SwagBotFooter from "../assets/img/SwagBot_Footer_graphic.png";
import './Footer.css';

function SwagLabsFooter (){
  return (
    <footer className="footer">

      <ul className="social">
        <li className="social_twitter">Twitter</li>
        <li className="social_facebook">Facebook</li>
        <li className="social_linkedin">LinkedIn</li>
      </ul>

      <div className="footer_copy">
        &copy; {new Date().getFullYear()} Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
      </div>
      <img className="footer_robot" src={SwagBotFooter}/>
    </footer>
  )
}

export default SwagLabsFooter