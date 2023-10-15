import React from "react";
import "./Footer.css";

const SwagLabsFooter = () => {
  return (
    <footer className="footer">
      {/* <div className="footer_container"> */}
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
      {/* </div> */}
    </footer>
  );
};

export default SwagLabsFooter;
