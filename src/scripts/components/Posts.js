import DataStore from 'flux/stores/DataStore.js'

class Posts extends React.Component {
    render() {
        let posts = DataStore.getAllPosts();

        return (
            <div>
                <h1>Posts</h1>
                <p>This page fetches and lists all posts from wordpress</p>
                 
                {posts.map((post) => {
                    return  <span key={post.id}>
                            <h3>{post.title.rendered}</h3> 
                            <div dangerouslySetInnerHTML={{__html: post.content.rendered}} /> 
                            </span>
                })}
            </div>
        );
    }
}

export default Posts;