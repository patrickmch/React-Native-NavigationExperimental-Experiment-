import { connect } from 'react-redux'
import { myFirstActionCreator } from './actions'
import  basicView  from './basicView'


const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const ShowText = connect(mapStateToProps)(basicView)

export default ShowText
