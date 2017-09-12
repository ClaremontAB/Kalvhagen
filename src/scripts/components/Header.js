import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        return (
            <div className="header">
                <Link to="/" style={{marginRight: '10px'}} >Home</Link>
                <Link to="/posts" key="1" style={{marginRight: '10px'}} >Posts</Link>
                <Link to="/pages" key="2" style={{marginRight: '10px'}} >Pages</Link>
            </div>
        );
    }
}

export default Header;