import React, { Component } from 'react'

import './AboutMe.css';

export class AboutMe extends Component {
  render() {
    return (
      <section id="AboutMe">
        <h1 className="title">ABOUT ME</h1>
        <div id="aboutMeCard">
          <header id="aboutMeHeader">
            <div id="profilePic" />
          </header>
          <div id="info">

          </div>
          <ul id="aboutMeSects">
            <li>
              <button>
                Bio
              </button>
            </li>
            <li>
              <button>
                Skills
              </button>
            </li>
            <li>
              <button>
                Education
              </button>
            </li>
          </ul>
          <div id="details">
            <section id="bio">
              <p>BIO</p>
            </section>
            <section id="skills">
              <p>SKILLS</p>
            </section>
            <section id="education">
              <p>EDUCATION</p>
            </section>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe
