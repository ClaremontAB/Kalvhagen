import React, {Component} from 'react';
import ReqHandler from './ReqHandler.js';
import './css/page.css';

class Pages extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: []
    };
  }

  componentDidMount() {
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
                <div className="page">
                  <p/>
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
            </div>
        );
    }
}

export default Pages;
