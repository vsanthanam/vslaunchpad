import React, { Component } from 'react';

import './FooterBar.less'

class FooterBar extends Component {

  render() {

    return (

      <div className="footer-bar-container" onClick={this.props.handleOnClick}>
        <p className="footer-bar-text">&copy; 2018 Varun Santhanam</p>
      </div>

    );

  }

}

export default FooterBar;
