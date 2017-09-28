import React, {Component} from 'react';
import ReqHandler from './ReqHandler.js';

class Pages extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    //debugger;
    ReqHandler.getPages()
      .then(res => {
        const pages = res;
        this.setState({pages});
      });
  }

    render() {

        return (
            <div>
                <h1>Pages</h1>
                <p>This page fetches and lists all pages from wordpress</p>
                <ul>
                  {this.state.pages.map((page) =>
                    <div key={page.id}>
                      <h2> {page.title.rendered} </h2>
                      <div dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                    </div>
                  )}
                </ul>
            </div>
        );
    }
}

export default Pages;
