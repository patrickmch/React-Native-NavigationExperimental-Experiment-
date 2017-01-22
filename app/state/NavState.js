import { _renderScene } from '../components/_renderScene'

//generates random string
genKey = () =>{
    return Math.random().toString(36).substr(7)
}

export const getData = {
  0: {
        index: 0,
        routes: [
          {
            key: Date.now().toString(),
            id: 0
          }
        ],
        title: 'Welcome',
        potentialRoutes: [
          { id: 1, title: 'First' },
          { id: 2, title: 'Second' },
          { id: 3, title: 'Third' },
        ]
      },
  1: {
        title: 'First Scene',
        key: genKey(),
        parent: 0,
        potentialRoutes: [
          { id: 4, title: 'New' },
          { id: 5, title: 'Newer' },
        ],
        info: 'A bunch of things about something. We cannot be sure what that is yet',
      },
  2: {
        potentialRoutes: [
          { id: 6, title: 'Stoff' },
          { id: 7, title: 'Get Out' },
        ],
        key: genKey(),
        parent: 0,
        title: 'Second Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  3: {
        potentialRoutes: [
          { id: 8, title: 'Ceck' },
          { id: 9, title: 'Junk' },
        ],
        key: genKey(),
        parent: 0,
        title: 'Third Scene',
        info: 'A bunch of things about something. We cannot be sure what that is yet'
      },
  4: {
          title: 'Something',
          key: genKey(),
          parent: 1,
          potentialRoutes: [
            { id: 10, title: 'Nothing' },
            { id: 11, title: 'Anything' },
          ],
          info: 'A bunch of things about something. We cannot be sure what that is yet',
      },
  5: {
          title: 'NEWTITLE',
          key: genKey(),
          parent: 1,
          potentialRoutes: [
            { id: 12, title: 'asdf' },
            { id: 13, title: 'Anyasdfffthing' },
          ],
          info: 'A bunch of things about something. We cannot be sure what that is yet',
      },
}//getData
