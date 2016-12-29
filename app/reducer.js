import InitialNavState from './state/InitialNavState'
import { FIRST_ACTION } from './actions'

function reducer(state = InitialNavState, action){
    switch(action.type){
        case FIRST_ACTION:
          return {
            ...state,
            text: 'This is some new text'
          }
        default:
          return state
    }
}

export default reducer;
