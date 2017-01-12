import { connect } from 'react-redux'
import  { firstAction, secondAction }  from '../actions'
import  ListScenes  from '../components/ListScenes'

const mapStateToProps = (state) => {
  return {
    scenes: state.navigationState.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: (key) => {
        dispatch(firstAction(key))
    }//onTextClick
  }//return
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(ListScenes)

export default ShowText
