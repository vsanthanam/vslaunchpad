// @flow

import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import { getProjects, getProfiles } from '../../parts/Firebase/Firebase';

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string

}

type AllViewProps = {};
type AllViewState = {

  links: Array<Link>

};

class AllView extends React.Component<AllViewProps, AllViewState> {

  constructor(props: AllViewProps) {

    super(props);
    this.state = {links: []};

  }

  render() {

    var controller = new LinkController("all", this.state.links);

    var loading = this.state.links.length === 0 ? true : false;

    return(

      <LinkView title="profiles & projects" subtitle="https://{identifier}.vsanthanam.com" controller={controller} loading={loading} />

    );

  }

  componentDidMount() {

    getProjects((data) => {

      this.setState({links: this.state.links.concat(data)});

    });

    getProfiles((data) => {

      this.setState({links: this.state.links.concat(data)});

    });

  }

}

export default AllView;
