import { InitialNavState, getData } from './state/NavState'
import { FIRST_ACTION, SECOND_ACTION } from './actions'
import { combineReducers } from 'redux'

function navigationState(state = InitialNavState, action){
    switch(action.type){
        case FIRST_ACTION:
          return {
            ...state,
            index: 1,
            data: getData(action.key)
          }

        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
