import React, {Component} from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './common/Header';
import Home from './home/Home';
import Training from './Training';
import About from './about/About';
import Schedule from './Schedule';
import Trainers from './Trainers';
import Footer from './common/Footer';
import ComponentsPage from './ComponentsPage';

import '../style/styles.scss';

const history = createHistory();
history.listen((location, action) => {
  //Hack to remove extra focus from header-link when clicking back
  if (action === 'POP') {
    document.activeElement.blur();
  }
  window.scrollTo(0,0);
});

class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/training" component={Training}/>
              <Route path="/about" component={About}/>
              <Route path="/schedule" component={Schedule}/>
              <Route path="/trainers" component={Trainers}/>
              <Route path="/componentspage" component={ComponentsPage}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
