import React, { Component } from 'react';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import TopicsContainer from './topics/TopicsContainer';
import Topic from './topics/Topic';

import 'bootstrap/dist/css/bootstrap.min.css';
import CardsContainer from './cards/CardsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/topics" component={TopicsContainer} />
          <Route exact path="/topics/:id" component={Topic} />
          <Route
            exact
            path="/topics/:tid/subjects/:sid"
            component={CardsContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
