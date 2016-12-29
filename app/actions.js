export const FIRST_ACTION = 'FIRST_ACTION'

export function myFirstActionCreator(){
  console.log('action')
  return {
    type: FIRST_ACTION
  }
}
