import React, { Component } from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";

export default class Todo extends Component {

  constructor(props){
    super(props);
    this.selectFilter = this.selectFilter.bind(this);
    this.state = {
      filter: "none",
    }
  }

  selectFilter(status){
    this.setState({
      filter: status,
    });
  }

  render() {
    return (
      <div>
        <TodoInput onAddTodo={this.props.onAddTodo} />
        <TodoList todos={this.props.todos} filter={this.state.filter} selectItem={this.props.onTodoClick} />
        <TodoFilter status={this.state.filter} onSelectFilter={this.selectFilter} />
      </div>
    );
  }
}
