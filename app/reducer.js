import { getData } from './state/NavState'
import { PUSH, POP } from './actions'
import { combineReducers } from 'redux'

function navigationState(state = getData[0], action){
    const { index } = state
    switch(action.type){
        case PUSH:
          let obj= {
            index:index+1,
            ...action.payload,
            routes:[
              ...state.routes,
              {
                key: Date.now().toString()
              }
            ],
          }
          console.log('push object', obj);
          return obj
        case POP:
          return index > 0 ? {
            index: index-1,
            ...getData[state.parent],
          } : state
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
