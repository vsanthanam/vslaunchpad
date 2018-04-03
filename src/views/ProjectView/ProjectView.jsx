// @flow

import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import ProjectList from '../../dataSources/ProjectList.json';

type ProjectViewProps = {};

class ProjectView extends React.Component<ProjectViewProps> {

  render() {

    var controller = new LinkController("projects", ProjectList);

    return(

      <LinkView title="projects" subtitle="https://{project}.vsanthanam.com" controller={controller} />

    );

  }

}

export default ProjectView;
