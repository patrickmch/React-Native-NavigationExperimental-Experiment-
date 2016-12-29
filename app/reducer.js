import testState from './testState'
import { FIRST_ACTION } from './actions'

function reducer(state = testState, action){
    console.log('reducer')
    switch(action.type){
        case FIRST_ACTION:
        console.log('test1')
          return {
            ...state,
            text: 'This is some new text'
          }
        default:
          console.log('test')
          return state
    }
}

export default reducer;
