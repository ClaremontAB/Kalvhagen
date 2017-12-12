import React, {Component} from 'react';

import UserQuote from './common/UserQuote';
import ScheduleComp from './schedule/ScheduleComp';

class ComponentsPage extends Component {

  render () {
    return (
      <div className="container-fluid" style={{display: "inline-flex"}}>
        <UserQuote />
        <ScheduleComp title="Kickboxning" time="On 10:30"/>
      </div>
    );
  }
}

export default ComponentsPage;
