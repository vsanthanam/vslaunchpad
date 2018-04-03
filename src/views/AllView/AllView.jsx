import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import ProfileList from '../../dataSources/ProfileList.json';
import ProjectList from '../../dataSources/ProjectList.json';

class AllView extends React.Component {

  render() {

    var links = ProfileList.concat(ProjectList);

    var controller = new LinkController("all", links);

    return(

      <LinkView title="projects & profiles" subtitle="https://{identifier}.vsanthanam.com" controller={controller} />

    );

  }

}

export default AllView;
