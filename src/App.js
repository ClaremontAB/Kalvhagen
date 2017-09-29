import React, { Component } from 'react';
import Home                 from './Home.js';
import Pages                from './Pages.js';
import Posts                 from './Posts.js';
import Header               from './Header.js';

import './css/index.css';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  buildRoutes(response) {
    return [
      <Route key='1' component={Posts} path='/posts'/>,
      <Route key='2' component={Pages} path='/pages'/>
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Switch>
                <Route path="/" component={ Home } exact />

                {this.buildRoutes(this.state.props)}
                <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
