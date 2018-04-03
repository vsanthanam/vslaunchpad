// @flow

import * as React from 'react';

import './LinkSelector.less';

type LinkSelectorProps = {
  emphasized: boolean,
  name: string
};

class LinkSelector extends React.Component<LinkSelectorProps> {

  render() {

    var className = this.props.emphasized ? "emphasized-selector-button" : "plain-selector-button";

    return(

      <button className={"link-selector-button " + className}>{this.props.name}</button>

    );

  }

}

export default LinkSelector;
