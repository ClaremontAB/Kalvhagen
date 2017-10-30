import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';


class Home extends Component {

  render () {
    return (
      <div> Hello home </div>
    );
  }
}

class App extends Component {

	render () {
		return (
      <Router>
        <div>

          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link to="/">Homes</Link></li>
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </nav>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/page1" component={Home}/>
              <Route path="/page2" component={Home}/>
            </Switch>


        </div>
      </Router>
		);
	}
}

export default App;
