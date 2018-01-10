import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import ScheduleComp from './ScheduleComp';

class Schedule extends Component {

  render () {

    const scheduleData = [{
        title: "Kickboxning",
        time: "Må 08:30"
    },{
        title: "Thaiboxning",
        time: "Må 11:30"
    }, {
        title: "BeatBox",
        time: "Ti 12:30"
    }, {
        title: "Yoga",
        time: "On 13.30"
    }, {
        title: "Bananböjning",
        time: "To 07:30"
    }, {
        title: "Thaiboxning",
        time: "To 17:30"
    }, {
        title: "AW-box",
        time: "Fr 18:30"
    }];

    return (
      <div>

      <Grid style={{paddingTop: "20px"}}>
        <Row className="show-grid">
          {scheduleData.map((pass, idx) => (
              <Col key={idx} sm={4} md={3} xsOffset={0} mdOffset={0} smOffset={0}>
                <ScheduleComp pass={pass} id={idx}/>
              </Col>
          ))}
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Schedule;

/*  <Table responsive>
    <thead>
      <tr>
        <th>Tid</th>
        <th>Måndag</th>
        <th>Tisdag</th>
        <th>Onsdag</th>
        <th>Torsdag</th>
        <th>Fredag</th>
        <th>Lördag</th>
        <th>Söndag</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10:00</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td rowSpan="4" colSpan="2" bgcolor="#7d7dbd"><b>Kickboxning <br />10:00-11.30</b></td>
      </tr>
      <tr>
        <td>10:30</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>11:00</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>11:30</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>12:00</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td rowSpan="2" bgcolor="#7d7dbd"><b>Kickboxning <br />12:00-13.00</b></td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>13:00</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr bgcolor="#777">
      <td colSpan="8" />
      </tr>
    </tbody>
  </Table>*/
