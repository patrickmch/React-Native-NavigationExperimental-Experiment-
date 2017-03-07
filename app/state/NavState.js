import { _renderScene } from '../components/_renderScene'

export const getData = {
  0: {
        index: 0,
        routes: [
          {
            key: 'root',
            id: 0,
            title: 'Welcome',
            potentialRoutes: [
              { id: 1, title: 'First' },
              { id: 2, title: 'Second' },
              { id: 3, title: 'Third' },
            ]
          }
        ],
      },
  1: {
        title: 'First Scene',
        potentialRoutes: [
          { id: 4, title: 'Fourth Scene' },
          { id: 5, title: 'Fifth Scene' },
        ],
      },
  2: {
        title: 'Second Scene',
        info: 'Placeholder Text...'
      },
  3: {
        potentialRoutes: [
          { id: 8, title: 'Eighth Scene' },
          { id: 9, title: 'Ninth Scene' },
        ],
        title: 'Third Scene',
      },
  4: {
        title: 'Something',
        potentialRoutes: [
          { id: 10, title: 'Tenth Scene' },
          { id: 11, title: '11th Scene' },
        ],
      },
  5: {
        title: 'NEWTITLE',
        potentialRoutes: [
          { id: 12, title: '12th Scene' },
          { id: 13, title: '13th Scene' },
        ],
      },
}//getData
