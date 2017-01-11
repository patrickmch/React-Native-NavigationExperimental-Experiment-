import InitialNavState from './state/InitialNavState'
import { FIRST_ACTION } from './actions'
import { combineReducers } from 'redux'
function navigationState(state = InitialNavState, action){
    switch(action.type){
        case FIRST_ACTION:
          return {
            ...state,
            scenes: ['a', 'different', 'set']
          }
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
