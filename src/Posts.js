import React, {Component} from 'react';
import ReqHandler from './ReqHandler.js';
import './css/page.css';

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    ReqHandler.getPosts()
      .then(res => {
        const posts = res;
        this.setState({posts});
      });
  }
    render() {
      return (
          <div className='page'>
              <h1>Posts</h1>
              <p>This page fetches and lists all posts from wordpress</p>
              <ul>
                {this.state.posts.map((post) =>
                  <div key={post.id}>
                    <h2> {post.title.rendered} </h2>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                  </div>
                )}
              </ul>
          </div>
      );
    }
}

export default Posts;
