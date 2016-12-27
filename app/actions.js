export const FIRST_ACTION = 'FIRST_ACTION';
export const SECOND_ACTION = 'SECOND_ACTION';

export function myFirstActionCreator(action, text){
  return {
    type: action,
    text: text
  }
}
