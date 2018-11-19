import React, { Component } from 'react';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import TopicsContainer from './topics/TopicsContainer';
import SubjectsContainer from './subjects/SubjectsContainer';
import CardsContainer from './cards/CardsContainer';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/topics" component={TopicsContainer} />
          <Route exact path="/topics/:id" component={SubjectsContainer} />
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
