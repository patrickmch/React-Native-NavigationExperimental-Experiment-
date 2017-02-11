import { getData } from './state/NavState'
import { PUSH, POP } from './actions'
import { combineReducers } from 'redux'

function navigationState(state = getData[0], action){
    const { index, routes } = state
    switch(action.type){
        case PUSH:
          return {
            index:index+1,
            routes:[
              ...routes,
              {
                key: Date.now(),
                ...action.payload
              }
            ],
          }

        case POP:
          return index > 0 ? {
            index: index-1,
            routes: routes.slice(0, routes.length -1)
          } : state
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
