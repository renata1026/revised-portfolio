import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <h2 className="title-footer">Get In Touch</h2>
        <ul className="social-list footer-social">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/renata1026/"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/renata1026"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://calendly.com/rcreinartz/chat"
              aria-label="Calendly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxs-calendar"></i>
            </a>
          </li>
        </ul>
        <p>
          I 🤍 meeting new people. Please feel free to send me an email or book
          my calendar for a chat.
        </p>
        <a
          className="btn"
          href="mailto:rcreinartz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Chat <i className="bx bx-envelope"></i>
        </a>
      </div>
      <p className="copyright">Designed and Developed By Renata Reinartz</p>
    </footer>
  );
}

export default Footer;
