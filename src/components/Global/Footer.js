// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  }

  render() {
    const { copyright = "DevF 2018" } = this.props;

    return (
      <div className="Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
