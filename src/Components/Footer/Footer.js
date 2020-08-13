import React, { Component } from 'react'

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ul id="socialLinks">
          <li>
            <a
              href="https://www.linkedin.com/in/kalinramsey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="linkedIn"
                className="socialTag"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KRamseyArt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="gitHub"
                className="socialTag"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kalin.ramsey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="facebook"
                className="socialTag"
              />
            </a>
          </li>
        </ul>
        <p>Designed & Developed by Kalin Ramsey</p>
      </footer>
    )
  }
}

export default Footer
