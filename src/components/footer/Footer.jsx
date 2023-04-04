import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        
        <div className="footer__content">
          <p>Application Developer - Chennai, TN, India</p>
          <ul className="footer__socials">
            <li>
              <a href="https://github.com/Mithoonns2001" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mithoon-n-s-746bb024b" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:mithoonns@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
