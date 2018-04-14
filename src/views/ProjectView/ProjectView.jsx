// @flow

import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import { getProjects } from '../../parts/Firebase/Firebase';

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string,
  exclude: boolean

}

type ProjectViewProps = {};
type ProjectViewState = {

  projects: Array<Array<Link>>

}

class ProjectView extends React.Component<ProjectViewProps, ProjectViewState> {

  constructor(props: ProjectViewProps) {

    super(props);
    this.state = {projects: []};

  }

  render() {

    var controller = new LinkController('projects', this.state.projects, false);

    var loading = this.state.projects.length === 0 ? true : false;

    return (

      <LinkView title="projects" subtitle="https://{project}.vsanthanam.com" controller={controller} loading={loading} />

    )

  }

  componentDidMount() {

    getProjects((data) => {

      // this.controller = new LinkController("projects", data);
      this.setState({projects: this.state.projects.concat(data)});
      // console.log(data)
      // this.render();

    });

  }

}

export default ProjectView;
