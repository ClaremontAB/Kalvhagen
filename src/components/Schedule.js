import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class Schedule extends Component {

  render () {
    return (
      <Table responsive>
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
      </Table>
    );
  }


}

export default Schedule;
