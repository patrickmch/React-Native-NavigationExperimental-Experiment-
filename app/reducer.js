import testState from './testState';
function reducer(state = testState, action){
  switch(action.type){
    case 'FIRST_ACTION':
      return [
        ...state,
        {
          text: action.text,
          also: 'there is more'
        }
      ]
    case 'SECOND_ACTION':
        return[
          ...state,
          {
            text: action.text,
            and: 'fuck you'
          }
        ]
    default:
      return state;
  }

}

export default reducer;
