import React, {Component} from 'react';
import './css/page.css';

class Page1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    //debugger;
  }

    render() {

        return (
            <div className="page">
                <h1>Page numer uno</h1>
                <p>This page is a just another page to be used as template..</p>
                <ul>
                  <div> TEXT </div>
                </ul>
            </div>
        );
    }
}

export default Page1;
