import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import '../style/styles.scss';

class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/category" component={Home}/>
              <Route path="/products" component={Home}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
