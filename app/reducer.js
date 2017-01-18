import { InitialNavState } from './state/NavState'
import { PUSH, POP } from './actions'
import { combineReducers } from 'redux'

function navigationState(state = InitialNavState, action){
    const { index } = state
    // console.log('state', state);
    switch(action.type){
        case PUSH:
          let obj= {
            prevState: state,
            index:index+1,
            ...action.payload
          }
          return obj
        case POP:
          // console.log('pop')
          // console.log('pop_state', state)
          return {
            ...state,
            routes: state.prevRoutes,
            title: state.title,
            index: index-1
          }
        default:
          return state
    }
}

const reducer = combineReducers({
  navigationState
})

export default reducer;
