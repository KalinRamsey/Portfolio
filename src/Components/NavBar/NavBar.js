import React, { Component } from 'react'

import './NavBar.css';

import NavMenu from '../NavMenu/NavMenu';

export class NavBar extends Component {
  state = {
    active: false,
  }

  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    });
  }
  renderMenu = () => {
    return (
      <NavMenu
        toggleMenu={() => this.toggleMenu()}
      />
    )
  }
  
  render() {
    console.log(this.state.active)
    return (
      <nav id="navBar">
        <button
          id="icon"
          onClick={() => this.toggleMenu()}
        />
        {this.state.active
          ? this.renderMenu()
          : null
        }
      </nav>
    )
  }
}

export default NavBar
