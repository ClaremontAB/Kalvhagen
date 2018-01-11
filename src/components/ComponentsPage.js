import React, {Component} from 'react';

import UserQuote from './common/UserQuote';
import InstagramComp from './common/InstagramComp';

class ComponentsPage extends Component {

  render () {
    return (
      <div>
        <div className="container-fluid" style={{display: "inline-flex"}}>
          <UserQuote />
        </div>
        <div>
          <InstagramComp />
        </div>
      </div>
    );
  }
}

export default ComponentsPage;
