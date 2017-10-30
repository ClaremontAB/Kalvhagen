# Kalvhagen

Remember to give the correct URL to the wordpress. I have mine running on localhost and named it kalvhagen.
*******
Untill we have a wordpress running on some server, we can run it locally.
This is a guide for Mac https://theme-fusion.com/local-wordpress-installation-mac/
And this is for windows https://sourceforge.net/projects/wampserver/
Both of them will install and configure PHP, MySQL and everything else that needs to be done to run wordpress.
Then you just need to download and install Wordpress.

Documentation for the Carousel module used in the Carousel component can be found at: https://www.npmjs.com/package/react-responsive-carousel


*******


This boilerplate will help you use React JS with Wordpress REST API.
Clone the project and install node packages:

```
npm i
```

To run the project on localhost:8080:
```
npm start
```

To build the project into /build folder:
```
npm run build
```

You need to have webpack and webpack-dev-server installed globally:
* [`webpack`](http://webpack.github.io/docs/)
```
npm install -g webpack
```

* [`webpack-dev-server`](http://webpack.github.io/docs/webpack-dev-server.html)
```
npm install -g webpack-dev-server
```

Don't forget to update the Worpress installation url in DataActions.js. It's located in src/actions/DataActions.js line 7
```
class DataActions {
	constructor() {
		const appUrl = 'http://localhost/kalvhagen'; // Wordpress installation url
	}
```
