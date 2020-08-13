import React, { Component } from 'react'

import './NavMenu.css';

export class NavMenu extends Component {
  render() {
    return (
      <div id="NavMenu">
        <ul>
          <li>
            <a href="#AboutMe">
              <button
                className="navLink"
                onClick={() => this.props.toggleMenu()}
              >
                ABOUT ME
              </button>
            </a>
          </li>
          <li>
            <a href="#Experience">
              <button
                className="navLink"
                onClick={() => this.props.toggleMenu()}
              >
                EXPERIENCE
              </button>
            </a>
          </li>
          <li>
            <a href="#Projects">
              <button
                className="navLink"
                onClick={() => this.props.toggleMenu()}
              >
                PROJECTS
              </button>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <button
                className="navLink"
                onClick={() => this.props.toggleMenu()}
              >
                CONTACT
              </button>
            </a>
          </li>
        </ul>
        <div id="toTop">
          <a href="#">
            <button
              className="faBtn"
              onClick={() => this.props.toggleMenu()}
            >
              <span className="fa fa-arrow-circle-up" />
            </button>
          </a>
          <h4>To Top of Page</h4>
        </div>
      </div>
    )
  }
}

export default NavMenu
