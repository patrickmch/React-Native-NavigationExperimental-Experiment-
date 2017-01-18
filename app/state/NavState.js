import { _renderScene } from '../components/_renderScene'
//generates random string
genKey = () =>{
    return Math.random().toString(36).substr(2, 5)
}

export const InitialNavState = {
      index: 0,
      routes: [
        { key:genKey(), id: 1, title: 'First' },
        { key:genKey(), id: 2, title: 'Second' },
        { key:genKey(), id: 3, title: 'Third' },
      ],
      title: 'Welcome'

}//InitialNavState


//getData: function to return routes and associated data
//called inside the reducer and passed a id from the action
//based on which item was clicked
export const getData = {
  1: {
        title: 'First Scene',
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
        title: 'Second Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  3: {
        routes: [
          { key:genKey(), id: 8, title: 'Ceck' },
          { key:genKey(), id: 9, title: 'Junk' },
        ],
        title: 'Third Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  4: {
        routes: [
          { key:genKey(), id: 10, title: 'whateve' }
        ],
        title: 'A new scene',
        info: 'This is more info about something else.',
        viewToRender: 'ModuleView',
      },
}//getData
