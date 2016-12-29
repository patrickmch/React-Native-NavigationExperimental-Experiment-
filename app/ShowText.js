import { connect } from 'react-redux'
import  myFirstActionCreator  from './actions'
import  BasicView  from './BasicView'


const mapStateToProps = (state) => {
  return {
    text: state.text,
    onTextClick: () => {
      console.log('onTextClick')
      // dispatch(myFirstActionCreator('You changed it! Jesus Christ!!'))
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    somethingElse: () => {
      console.log('somethingElse')
      // dispatch(myFirstActionCreator('You changed it! Jesus Christ!!'))
    }
  }
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(BasicView)

export default ShowText



// import React, { PropTypes } from 'react'
// import Todo from './Todo'
//
// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         {...todo}
//         onClick={() => onTodoClick(todo.id)}
//       />
//     )}
//   </ul>
// )
//
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }
//
// export default TodoList





// mport { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
// export default VisibleTodoList
