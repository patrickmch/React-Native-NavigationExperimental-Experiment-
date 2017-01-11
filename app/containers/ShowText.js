import { connect } from 'react-redux'
import  { firstAction, secondAction }  from '../actions'
import  ListScenes  from '../components/ListScenes'

const mapStateToProps = (state) => {
  return {
    scenes: state.navigationState.routes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: (key) => {
      switch (key) {
        case 'First':
            dispatch(firstAction())
          break
        case 'Second':
            dispatch(secondAction())
            break
        case 'Third':
            dispatch(firstAction())
          break
        default:
          return
      }//switch
    }//onTextClick
  }//return
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(ListScenes)

export default ShowText
