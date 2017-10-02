import 'whatwg-fetch';

 class ReqHandler {

  constructor() {
      const appUrl = 'http://34.240.147.115'; // Wordpress installation url

      this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
      this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
  }

 getPages() {
    return fetch(this.pagesEndPoint)
      .then((response) => response.json())
      /*.then((responseJson) => {
        return responseJson.movies;
      })*/
      .catch((error) => {
        console.error(error);
      });
  }

  getPosts() {
    return fetch(this.postsEndPoint)
      .then((response) => response.json())
      /*.then((responseJson) => {
        return responseJson.movies;
      })*/
      .catch((error) => {
        console.error(error);
      });
  }

}

export default new ReqHandler();
