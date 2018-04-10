// @flow

import * as React from 'react';

import './SearchBar.less'

type SearchBarProps = {

  inputid: string,
  handleKeyUp: (event: KeyboardEvent) => void

}

class SearchBar extends React.Component<SearchBarProps> {

  render() {

    return(
      <input type="text" className="search-bar-input" id={this.props.inputid} placeholder="Type something and press return" onKeyUp={this.props.handleKeyUp} />
    )

  }

}

export default SearchBar
