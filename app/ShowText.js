import { connect } from 'react-redux'
import  { myFirstActionCreator }  from './actions'
import  BasicView  from './BasicView'


const mapStateToProps = (state) => {
  return {
    text: state.text,
  }
}
//  const FIRST_ACTION = 'FIRST_ACTION'
//
// function myFirstActionCreator(){
//   console.log('action')
//   return {
//     type: FIRST_ACTION
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    onTextClick: () => {
      dispatch(myFirstActionCreator())
    }
  }
}


const ShowText = connect(mapStateToProps, mapDispatchToProps)(BasicView)

export default ShowText



// * Dispatches an action. It is the only way to trigger a state change.
//   *
//   * The `reducer` function, used to create the store, will be called with the
//   * current state tree and the given `action`. Its return value will
//   * be considered the **next** state of the tree, and the change listeners
//   * will be notified.
//   *
//   * The base implementation only supports plain object actions. If you want to
//   * dispatch a Promise, an Observable, a thunk, or something else, you need to
//   * wrap your store creating function into the corresponding middleware. For
//   * example, see the documentation for the `redux-thunk` package. Even the
//   * middleware will eventually dispatch plain object actions using this method.
//   *
//   * @param {Object} action A plain object representing “what changed”. It is
//   * a good idea to keep actions serializable so you can record and replay user
//   * sessions, or use the time travelling `redux-devtools`. An action must have
//   * a `type` property which may not be `undefined`. It is a good idea to use
//   * string constants for action types.
//   *
//   * @returns {Object} For convenience, the same action object you dispatched.
//   *
//   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
//   * return something else (for example, a Promise you can await).
//   */
 // function dispatch(action) {
 //   if (!(0, _isPlainObject2['default'])(action)) {
 //     throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
 //   }
 //
 //   if (typeof action.type === 'undefined') {
 //     throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
 //   }
 //
 //   if (isDispatching) {
 //     throw new Error('Reducers may not dispatch actions.');
 //   }
 //
 //   try {
 //     isDispatching = true;
 //     currentState = currentReducer(currentState, action);
 //   } finally {
 //     isDispatching = false;
 //   }
 //
 //   var listeners = currentListeners = nextListeners;
 //   for (var i = 0; i < listeners.length; i++) {
 //     listeners[i]();
 //   }
 //
 //   return action;
 // }


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
