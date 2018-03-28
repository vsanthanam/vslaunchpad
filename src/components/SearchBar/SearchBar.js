import React, { Component } from 'react';

import './SearchBar.less'

class SearchBar extends Component {

  render() {

    return(
      <input type="text" className="search-bar-input" id={this.props.inputid} placeholder="Type something and press return" onKeyUp={this.props.handleKeyUp} />
    )

  }

}

export default SearchBar
