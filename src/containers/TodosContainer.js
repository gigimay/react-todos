import { connect } from 'react-redux'
import Todos from '../components/Todos';

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index});
    },
    onAddTodo: (label) => {
      dispatch({ type: 'ADD_TODO', label});
    },
    filterTodo(value){
      dispatch({type: 'SET_VISIBILITY_FILTER', value})
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter,
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

export default TodosContainer;
