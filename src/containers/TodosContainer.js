import { connect } from 'react-redux'
import TodosComponent from './TodosComponent';

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index});
    },
    onAddTodo: (label) => {
      dispatch({ type: 'ADD_TODO', label});
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);

export default TodosContainer;
