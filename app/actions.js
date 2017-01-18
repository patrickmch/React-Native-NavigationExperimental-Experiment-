import { getData } from './state/NavState'

export const PUSH = 'PUSH'
export const POP = 'POP'

export function push(scene_id){
  return {
    type: PUSH,
    id: Date.now(),
    payload: getData[scene_id],
  }
}

export function pop(){
  return {
    type: POP,
    id: Date.now()
  }
}
