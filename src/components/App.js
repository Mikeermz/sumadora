//  Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Footer from './Global/Footer';
import Body from './Global/Body';

// Assets
import './Global/css/App.css';

// Data
import items from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    console.log(this)
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Sumadora" items={items} />
        <Body content={children} />
        <Footer copyright="&copy; DevF 2018"/>
      </div>
    );
  }
}

export default App;
