import React, { Component } from 'react'

import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav id="navBar">
        <div id="icon" />
        <ul id="directories">
          <li>About Me</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
