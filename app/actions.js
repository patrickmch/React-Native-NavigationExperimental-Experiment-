export const FIRST_ACTION = 'FIRST_ACTION'
export const SECOND_ACTION = 'SECOND_ACTION'

export function firstAction(scene_key){
  return {
    type: FIRST_ACTION,
    id: Date.now(),
    key: scene_key,
  }
}

export function secondAction(){
  return {
    type: SECOND_ACTION,
    id: Date.now()
  }
}
