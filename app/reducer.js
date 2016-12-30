import InitialNavState from './state/InitialNavState'
import { FIRST_ACTION } from './actions'

function reducer(state = InitialNavState, action){
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

export default reducer;
