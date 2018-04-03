// @flow

import * as React from 'react';

import './HeaderBar.less';

type HeaderBarProps = {
  title: string,
  subtitle: string
};

class HeaderBar extends React.Component<HeaderBarProps> {

  render() {

    return (

      <div className="header-bar-container">
        <h1 className="header-bar-title">
          {this.props.title}
        </h1>
        <h2 className="header-bar-subtitle">
          {this.props.subtitle}
        </h2>
      </div>

    );

  }

}

export default HeaderBar;
