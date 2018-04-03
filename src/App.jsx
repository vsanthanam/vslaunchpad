import React, { Component } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LinkView from './views/LinkView/LinkView';

import LinkController from './LinkController';

import ProjectList from './dataSources/ProjectList.json';
import ProfileList from './dataSources/ProfileList.json';

import './App.less';

Modal.setAppElement('#root');

class App extends Component {

  render() {

    return (

      <Router>
        <Switch>
          <Route exact path="/" component={ProjectView} />
          <Route exact path="/projects" component={ProjectView} />
          <Route exact path="/profiles" component={ProfileView} />
          <Route exact path="/all" component={AllView} />
        </Switch>
      </Router>
    );

  }

}

class ProjectView extends Component {

  render() {

    var controller = new LinkController("projects", ProjectList);

    return(

      <LinkView title="projects" subtitle="https://{project}.vsanthanam.com" controller={controller} />

    );

  }

}

class ProfileView extends Component {

  render() {

    var controller = new LinkController("profiles", ProfileList);

    return(

      <LinkView title="profiles" subtitle="https://{profile}.vsanthanam.com" controller={controller} />

    );

  }

}

class AllView extends Component {

  render() {

    var links = ProfileList.concat(ProjectList);

    var controller = new LinkController("all", links);

    return(

      <LinkView title="projects & profiles" subtitle="https://{identifier}.vsanthanam.com" controller={controller} />

    );

  }

}

export default App;
