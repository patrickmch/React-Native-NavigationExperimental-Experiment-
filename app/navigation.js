import React, { Component } from 'react';
import{
  Text,
  View
} from 'react-native';
import rootReducer from '../reducers/index';
import { connect } from 'react-redux';

class Navigation extends Component{
  renderList(){
    return this.props.nav;
    // return this.props.navs.map((nav) => {
    //   return (
    //     <Text key={ nav.title }>{ nav.title }</Text>
    //   );
    // })
  }
  render(){
    return (
      <View>{ this.renderList }</View>
    );
  }
}
//debug here- try console.log(state) and see if it comes up as undefined- this could be the problem
function mapStateToProps(state){
  return{
    navs: state.navs
  }
}

export default connect(mapStateToProps)(Navigation);
