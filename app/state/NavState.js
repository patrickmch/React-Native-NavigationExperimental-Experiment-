import { _renderScene } from '../components/_renderScene'

//generates random string
genKey = () =>{
    return Math.random().toString(36).substr(7)
}

// export const InitialNavState = {
//       index: 0,
//       routes: [
//         { key:genKey(), id: 1, title: 'First' },
//         { key:genKey(), id: 2, title: 'Second' },
//         { key:genKey(), id: 3, title: 'Third' },
//       ],
//       title: 'Welcome'
//
// }//InitialNavState

export const getData = {
  0: {
        index: 0,
        routes: [
          { key:genKey(), id: 1, title: 'First' },
          { key:genKey(), id: 2, title: 'Second' },
          { key:genKey(), id: 3, title: 'Third' },
        ],
        title: 'Welcome'
      },
  1: {
        title: 'First Scene',
        parent: 0,
        routes: [
          { key:genKey(), id: 4, title: 'New' },
          { key:genKey(), id: 5, title: 'Newer' },
        ],
        info: 'A bunch of things about something. We cannot be sure what that is yet',
      },
  2: {
        routes: [
          { key:genKey(), id: 6, title: 'Stoff' },
          { key:genKey(), id: 7, title: 'Get Out' },
        ],
        parent: 0,
        title: 'Second Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  3: {
        routes: [
          { key:genKey(), id: 8, title: 'Ceck' },
          { key:genKey(), id: 9, title: 'Junk' },
        ],
        parent: 0,
        title: 'Third Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  4: {
        routes: [
          { key:genKey(), id: 10, title: 'whateve' }
        ],
        parent: 1,
        title: 'A new scene',
        info: 'This is more info about something else.',
        viewToRender: 'ModuleView',
      },
}//getData
