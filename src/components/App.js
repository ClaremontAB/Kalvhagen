import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

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
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/category" component={Home}/>
              <Route path="/products" component={Home}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
