export const FIRST_ACTION = 'FIRST_ACTION'
export const SECOND_ACTION = 'SECOND_ACTION'

export function firstAction(){
  return {
    type: FIRST_ACTION,
    id: Date.now()
  }
}

export function secondAction(){
  return {
    type: SECOND_ACTION,
    id: Date.now()
  }
}
