// @flow

import * as React from 'react';

import './FooterBar.less'

type FooterBarProps = {
  handleOnClick: (event: Event) => void
};

class FooterBar extends React.Component<FooterBarProps> {

  render() {

    return (

      <div className="footer-bar-container" onClick={this.props.handleOnClick}>
        <p className="footer-bar-text">&copy; 2018 Varun Santhanam</p>
      </div>

    );

  }

}

export default FooterBar;
