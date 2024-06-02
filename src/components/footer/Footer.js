import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer data-testid="footer" className="footer-distributed">
        <div className="row">
          <div className="col-md-2">
            <div className="footer-left">
              {/* <img src="./assets/logo.svg" className="logo" alt="logo" /> */}
            </div>
          </div>
          <div className="col-md-10">
            <div className="footer-right">
              <img src="../../assets/instagram.svg" alt="instalogo" />
              <img src="../../assets/facebook.svg" alt="fblogo" />
              <img src="../../assets/twitter.svg" alt="twitlogo" />
              {/* <img src="../../assets/linkedin.svg" alt="linklogo" />
              <img src="../../assets/github.svg" alt="gitlogo" /> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
