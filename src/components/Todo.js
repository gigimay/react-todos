import React from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";

const Todo = (props) => {
    return (
      <div>
        <TodoInput onAddTodo={props.onAddTodo} />
        <TodoList todos={props.todos} filter={props.filter} selectItem={props.onTodoClick} />
        <TodoFilter status={props.filter} onSelectFilter={props.filterTodo} />
      </div>
    );
}
export default Todo;
