import { _renderScene } from '../components/_renderScene'


export const InitialNavState = {
  data: {
      index: 0,
      routes: [
        { key: 'First', title: 'First' },
        { key: 'Second', title: 'Second' },
        { key: 'Third', title: 'Third' },
      ],
      title: 'Welcome'
  }//data
}//InitialNavState


//getData: function to return routes and associated data
//called inside the reducer and passed a key from the action
//based on which item was clicked
export const getData = (key) => {
  switch(key){
    //TODO find out why index must only be '1' for all cases
    //returns error 'there should only be one scene active, not 0' if index is changed
    case 'First':
      return {
        index: 1,
        key: Math.random(),
        title: 'First Scene',
        routes: [
          { key: 'New', title: 'New' },
          { key: 'Newer', title: 'Newer' },
        ],
        info: 'A bunch of things about something. We cannot be sure what that is yet',
      }
    case 'Second':
      return {
        index: 1,
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
        index: 1,
        key: Math.random(),
        routes: [
          { key: 'Ceck', title: 'Ceck' },
          { key: 'Junk', title: 'Junk' },
        ],
        title: 'Third Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      }
    default:
      return 'hello'
  }//switch
}//getData
