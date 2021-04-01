import React from "react";
import SwagBotFooter from "../assets/img/SwagBot_Footer_graphic.png";
import "./Footer.css";

const SwagLabsFooter = () => {
  return (
    <footer className="footer">
      <ul className="social">
        <li className="social_twitter">
          <a
            href="https://twitter.com/saucelabs"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="social_facebook">
          <a
            href="https://www.facebook.com/saucelabs"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="social_linkedin">
          <a
            href="https://www.linkedin.com/company/sauce-labs/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="footer_copy">
        &copy; {new Date().getFullYear()} Sauce Labs. All Rights Reserved. Terms
        of Service | Privacy Policy
      </div>
      <img alt="Swag Bot Footer" className="footer_robot" src={SwagBotFooter} />
    </footer>
  );
};

export default SwagLabsFooter;
