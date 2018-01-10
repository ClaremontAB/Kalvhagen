// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import bookingColl from './bookingColl';

 const kalvApp = combineReducers({
   bookingColl
 });

 export default kalvApp;
