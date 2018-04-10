// @flow

import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProjectView from './views/ProjectView/ProjectView';
import ProfileView from './views/ProfileView/ProfileView';
import AllView from './views/AllView/AllView';
import { setupFirebase } from './parts/Firebase/Firebase';

import './App.less';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {

  constructor(props: Props) {

    super(props);
    setupFirebase();

  }

  render() {

    return (

      <Router>
        <Switch>
          <Route exact path="/" component={ProfileView} />
          <Route exact path="/profiles" component={ProfileView} />
          <Route exact path="/projects" component={ProjectView} />
          <Route exact path="/all" component={AllView} />
        </Switch>
      </Router>

    );

  }

}

export default App;
