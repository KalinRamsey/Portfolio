import React, { Component } from 'react'

import './Hero.css';

export class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <div id="heroText">
          <h3 id="heroIntro">Hi, I'm</h3>
          <h1>Kalin Ramsey</h1>
          <h3 id="heroOutro">Software Engineer</h3>
        </div>
      </div>
    )
  }
}

export default Hero
