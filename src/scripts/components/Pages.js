import DataStore from 'flux/stores/DataStore.js'

class Pages extends React.Component {
    render() {
        let pages = DataStore.getAllPages();

        return (
            <div>
                <h1>Pages</h1>
                <p>This page fetches and lists all pages from wordpress</p>
                
                {pages.map((page) => {
                    return  <span key={page.id}>
                            <h3>{page.title.rendered}</h3> 
                            <div dangerouslySetInnerHTML={{__html: page.content.rendered}} /> 
                            </span>
                })}
            </div>
        );
    }
}

export default Pages;