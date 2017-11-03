import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Training from './Training';
import About from './About';
import Schedule from './Schedule';
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
              <Route path="/training" component={Training}/>
              <Route path="/about" component={About}/>
              <Route path="/schedule" component={Schedule}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
