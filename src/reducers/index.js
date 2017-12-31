import { combineReducers } from 'redux';
import gallery from './gallery';
import navbarItems from './navbarItems'

export default combineReducers({
  gallery,
  navbarItems,
});
