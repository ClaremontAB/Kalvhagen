import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './common/Header';
import Home from './home/Home';
import Training from './Training';
import About from './about/About';
import Schedule from './Schedule';
import Trainers from './Trainers';
import Footer from './common/Footer';

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
              <Route path="/trainers" component={Trainers}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
