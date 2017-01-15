import { InitialNavState } from './state/NavState'
import { PUSH, POP } from './actions'
import { combineReducers } from 'redux'

function navigationState(state = InitialNavState, action){
    switch(action.type){
        case PUSH:
          return {
            ...state,
            data:action.payload
          }
        case POP:
          console.log('pop');
          return {
            ...state
          }
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
