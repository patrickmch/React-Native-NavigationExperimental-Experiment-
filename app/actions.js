// export const FIRST_ACTION = 'FIRST_ACTION';
// export const SECOND_ACTION = 'SECOND_ACTION';

export function myFirstActionCreator(text){
  return {
    type: 'FIRST_ACTION',
    text: text
  }
}
