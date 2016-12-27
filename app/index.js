import { createStore } from 'redux';
import testReducer from './reducer';
import { FIRST_ACTION, SECOND_ACTION, myFirstActionCreator } from './actions';


let store = createStore(testReducer);
console.log('initial state',store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('unsubscribe', store.getState())
)

store.dispatch(myFirstActionCreator(FIRST_ACTION, 'FA'));
store.dispatch(myFirstActionCreator(SECOND_ACTION, 'SA'));

unsubscribe();
