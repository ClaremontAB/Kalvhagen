import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'
import '../../css/header.css'

class Header extends React.Component {

    render() {
        return (


            <div className="header">
                <img src="../../../img/topLogo copy.png" alt="LOGOGOGO" className="topLogo"></img>
                <Link to="/"/* style={{marginRight: '10px'}}*/ className="headerItem" >Home</Link>
                <Link to="/posts" key="1" /*style={{marginRight: '10px'}}*/ className="headerItem" >Posts</Link>
                <Link to="/pages" key="2" /*style={{marginRight: '10px'}}*/ className="headerItem" >Pages</Link>
            </div>
        );
    }
}

export default Header;
