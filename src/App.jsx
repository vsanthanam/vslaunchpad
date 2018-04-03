// @flow

import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProjectView from './views/ProjectView/ProjectView';
import ProfileView from './views/ProfileView/ProfileView';
import AllView from './views/AllView/AllView';

import './App.less';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {

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

export default App;
