import React, { Component } from 'react';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import TopicsContainer from './topics/TopicsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/topics" component={TopicsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
