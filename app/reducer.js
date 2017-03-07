import { getData } from './state/NavState'
import { PUSH, POP } from './actions'
import { combineReducers } from 'redux'
import * as NavigationStateUtils from 'NavigationStateUtils'

function navigationState(state = getData[0], action){
    const { index, routes } = state
    switch(action.type){
        case PUSH:
          newState = {
            index:index+1,
            //no integers accepted, hence the type casting
            key: Date.now().toString(),
            ...action.payload
          }
          console.log(NavigationStateUtils.push(state, newState));
          return NavigationStateUtils.push(state, newState)
        case POP:
          if(index > 0){
            return NavigationStateUtils.pop(state)
          } else {
            return state
          }
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
