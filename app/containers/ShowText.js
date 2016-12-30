import { connect } from 'react-redux'
import  { myFirstActionCreator }  from '../actions'
import  ListScenes  from '../components/ListScenes'


const mapStateToProps = (state) => {
  return {
    scenes: state.scenes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: () => {
      dispatch(myFirstActionCreator())
    }
  }
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(ListScenes)

export default ShowText
