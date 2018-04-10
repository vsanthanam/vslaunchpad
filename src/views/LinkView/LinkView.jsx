// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import LinkSelector from '../../components/LinkSelector/LinkSelector';
import LinkTable from '../../components/LinkTable/LinkTable';
import FooterBar from '../../components/FooterBar/FooterBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import AboutModal from '../../components/AboutModal/AboutModal';

import LinkController, { openLink } from '../../LinkController';

import './LinkView.less';

type LinkViewProps = {

  controller: LinkController,
  title: string,
  subtitle: string,
  loading: boolean

};
type LinkViewState = {

  dataSource: Array<Link>,
  showAbout: boolean

};

class LinkView extends React.Component<LinkViewProps, LinkViewState> {

  constructor(props: LinkViewProps) {

    super(props);

    this.state = {dataSource:this.props.controller.links, showAbout:false};

    this.searchDataSource = this.searchDataSource.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);

  }

  componentWillReceiveProps(nextProps: LinkViewProps) {

    this.setState({dataSource:nextProps.controller.links});

  }

  componentDidMount() {

    if (!isTouchDevice()) {


      var input = document.getElementById("link-search-field")

      if (input instanceof HTMLInputElement) {

        input.focus();

      }

    }

  }

  render() {

    return (

      <div>
        <AboutModal showModal={this.state.showAbout} onRequestClose={this.toggleAbout} />
        <HeaderBar title={this.props.title} subtitle={this.props.subtitle}/>
        <div className="content-container">
          <SearchBar inputid="link-search-field" handleKeyUp={this.searchDataSource} />
          <Link to="/profiles">
            <LinkSelector name="profiles" emphasized={this.props.controller.name === "profiles"} />
          </Link>
          <Link to="/projects">
            <LinkSelector name="projects" emphasized={this.props.controller.name === "projects"} />
          </Link>
          <Link to="/all">
            <LinkSelector name="all" emphasized={this.props.controller.name === "all"} />
          </Link>
          <LinkTable dataSource={this.state.dataSource} loading={this.props.loading}/>
        </div>
        <FooterBar handleOnClick={this.toggleAbout} />
      </div>

    );

  }

  searchDataSource = (event: KeyboardEvent)=> {

    var input = document.getElementById("link-search-field");

    var filterString = (input instanceof HTMLInputElement) ? input.value : "";

    if (filterString !== "" && event.keyCode === 13 && this.state.dataSource.length > 0) {

      var link = this.state.dataSource[0];

      openLink(link);

    }

    var results = this.props.controller.filteredLinks(filterString);

    this.setState({dataSource:results});

  }

  toggleAbout = (event: Event) => {

    this.setState({showAbout:!this.state.showAbout});

  }

}

function isTouchDevice() {

  if (document.documentElement instanceof Object) {

    return 'ontouchstart' in document.documentElement;

  }

  return false;

}

export default LinkView;
