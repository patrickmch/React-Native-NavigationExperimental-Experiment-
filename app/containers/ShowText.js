import { connect } from 'react-redux'
import  { firstAction }  from '../actions'
import  ListScenes  from '../components/ListScenes'

const mapStateToProps = (state) => {
  return {
    scenes: state.navigationState.routes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: () => {
      dispatch(firstAction())
    }
  }
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(ListScenes)

export default ShowText
