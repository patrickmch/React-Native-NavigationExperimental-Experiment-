export const FIRST_ACTION = 'FIRST_ACTION'

export function myFirstActionCreator(key){
  return {
    type: FIRST_ACTION,
    key: key
  }
}
