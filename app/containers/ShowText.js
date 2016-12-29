import { connect } from 'react-redux'
import  { myFirstActionCreator }  from '../actions'
import  BasicView  from '../components/BasicView'


const mapStateToProps = (state) => {
  return {
    text: state.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: () => {
      dispatch(myFirstActionCreator())
    }
  }
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(BasicView)

export default ShowText
