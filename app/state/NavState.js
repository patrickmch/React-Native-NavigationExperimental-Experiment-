import { _renderScene } from '../components/_renderScene'


export const InitialNavState = {
  
      index: 0,
      routes: [
        { key: 'First', title: 'First' },
        { key: 'Second', title: 'Second' },
        { key: 'Third', title: 'Third' },
      ],
      title: 'Welcome'

}//InitialNavState


//getData: function to return routes and associated data
//called inside the reducer and passed a key from the action
//based on which item was clicked
export const getData = (key, index) => {

  // var { index } = InitialNavState.data

  switch(key){
    case 'First':
      return {
        key: Math.random(),
        title: 'First Scene',
        routes: [
          { key: 'Fourth', title: 'New' },
          { key: 'Newer', title: 'Newer' },
        ],
        info: 'A bunch of things about something. We cannot be sure what that is yet',
      }
    case 'Second':
      return {
        key: Math.random(),
        routes: [
          { key: 'Stoff', title: 'Stoff' },
          { key: 'Get Out', title: 'Get Out' },
        ],
        title: 'Second Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      }
    case 'Third':
      return {
        key: Math.random(),
        routes: [
          { key: 'Ceck', title: 'Ceck' },
          { key: 'Junk', title: 'Junk' },
        ],
        title: 'Third Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      }
    case 'Fourth':
      console.log('current index', index)
      console.log('incremented', index+1);
      return {
        key: Math.random(),
        routes: [
          { key: 'hello', title: 'whateve' }
        ],
        title: 'A new scene',
        info: 'This is more info about something else.',
        viewToRender: 'ModuleView',
      }
    default:
      return 'hello'
  }//switch
}//getData
