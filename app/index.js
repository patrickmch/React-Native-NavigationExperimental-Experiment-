import { createStore } from 'redux';
import testReducer from './reducer';

let store = createStore(testReducer);

console.log('test',store.getState());
