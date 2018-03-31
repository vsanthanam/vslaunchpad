import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import HeaderBar from '../../components/HeaderBar/HeaderBar.jsx';
import LinkSelector from '../../components/LinkSelector/LinkSelector.jsx';
import LinkTable from '../../components/LinkTable/LinkTable.jsx';
import FooterBar from '../../components/FooterBar/FooterBar.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import AboutModal from '../../components/AboutModal/AboutModal.jsx';

import { openLink } from '../../LinkController.js';

import './LinkView.less';

Modal.setAppElement('#root');

class LinkView extends Component {

  constructor(props) {

    super(props);

    // var initialController = new LinkController("project", projectList);
    this.state = {dataSource:this.props.controller.links, showAbout:false};

    this.searchDataSource = this.searchDataSource.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);

  }

  componentDidMount() {

    if (!isTouchDevice()) {

      document.getElementById("link-search-field").focus();

    }

  }

  render() {

    return (

      <div>
        <AboutModal showModal={this.state.showAbout} onRequestClose={this.toggleAbout} />
        <HeaderBar title={this.props.title} subtitle={this.props.subtitle}/>
        <div className="content-container">
          <SearchBar inputid="link-search-field" handleKeyUp={this.searchDataSource} />
          <Link to="/projects">
            <LinkSelector name="projects" emphasized={this.props.controller.name === "projects"} />
          </Link>
          <Link to="/profiles">
            <LinkSelector name="profiles" emphasized={this.props.controller.name === "profiles"} />
          </Link>
          <Link to="/all">
            <LinkSelector name="all" emphasized={this.props.controller.name === "all"} />
          </Link>
          <LinkTable dataSource={this.state.dataSource}/>
        </div>
        <FooterBar handleOnClick={this.toggleAbout} />
      </div>

    );

  }

  searchDataSource(event) {

    var filterString = document.getElementById("link-search-field").value;

    if (filterString !== "" && event.keyCode === 13 && this.state.dataSource.length > 0) {

      var link = this.state.dataSource[0];

      openLink(link);

    }

    var results = this.props.controller.filteredLinks(filterString);

    this.setState({dataSource:results});

  }

  toggleAbout(event) {

    this.setState({showAbout:!this.state.showAbout});

  }

}

function isTouchDevice() {

    return 'ontouchstart' in document.documentElement;

}

export default LinkView;
