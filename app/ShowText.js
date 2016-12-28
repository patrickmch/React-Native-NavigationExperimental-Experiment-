import { connect } from 'react-redux'
import { myFirstActionCreator } from './actions'
import  basicView  from './basicView'


const showText = (action) => {
  switch(action.type){
    case 'FIRST_ACTION':
      return [
        ...state,
        {
          text: action.text,

        }
      ]
    }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const ShowText = connect(mapStateToProps)(basicView)

export default ShowText
