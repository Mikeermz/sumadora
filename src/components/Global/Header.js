// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const { title, items } = this.props

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {title} </h1>
        <ul className="Menu">
          {items && items.map((item, key) =>  <li key={key}>{item.title} </li> )}
        </ul>
      </header>
    );
  }
}

export default Header;
