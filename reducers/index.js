import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation_reducer';

const rootReducer = combineReducers({
  navs : NavigationReducer
});

export default rootReducer;
