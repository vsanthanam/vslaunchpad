import React, { Component } from 'react';

import './LinkSelector.less';

class LinkSelector extends Component {

  render() {

    var className = this.props.emphasized ? "emphasized-selector-button" : "plain-selector-button";

    return(

      <button className={"link-selector-button " + className}>{this.props.name}</button>

    );

  }

}

export default LinkSelector;
