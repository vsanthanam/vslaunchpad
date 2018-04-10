// @flow

import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import ProjectList from '../../dataSources/ProjectList.json';
import { setupFirebase, getProjects } from '../../parts/Firebase/Firebase';

type ProjectViewProps = {};
type ProjectViewState = {

  controller: LinkController;

}

class ProjectView extends React.Component<ProjectViewProps, ProjectViewState> {

  constructor(props) {

    super(props);
    this.state = {controller: new LinkController('projects', [])};

  }

  // controller = new LinkController("projects", []);


  render() {

    return (

      <LinkView title="projects" subtitle="https://{project}.vsanthanam.com" controller={this.state.controller} />

    )

  }

  componentWillMount() {

    setupFirebase();

  }

  componentDidMount() {

    console.log('cook the j00');

    // setupFirebase();

    getProjects((data) => {

      // this.controller = new LinkController("projects", data);
      this.setState({controller: new LinkController('projects', data)});
      console.log(this.state.controller.links)
      this.render();

    });

  }

}

export default ProjectView;
