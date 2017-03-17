import React, { Component } from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";

export default class Todo extends Component {

  render() {
    return (
      <div>
        <TodoInput onAddTodo={this.props.onAddTodo} />
        <TodoList todos={this.props.todos} filter={this.props.filter} selectItem={this.props.onTodoClick} />
        <TodoFilter status={this.props.filter} onSelectFilter={this.props.filterTodo} />
      </div>
    );
  }
}
