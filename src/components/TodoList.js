import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends Component {

  constructor(props){
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      todos: [
        {label: "Learn Javascript", complete: false},
        {label: "Learn ES6", complete: false},
        {label: "Learn React", complete: false},
        {label: "Learn React Native", complete: false},
        {label: "Learn Nodejs", complete: false},
        {label: "Learn by doing", complete: false},
        {label: "Learn to teach", complete: false},
        {label: "Teach to learn", complete: false},
      ],
      inputValue: "",
    }
  }

  onAddTodo(){
    const todos = this.state.todos;
    todos.push({
      label: this.state.inputValue
    });

    this.setState({
      todos,
      inputValue: "",
    });
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  toggleComplete(index){
    const selectedTodo = this.state.todos[index];
    selectedTodo.complete=!selectedTodo.complete;
    this.setState({
      todos: this.state.todos,
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <button onClick={this.onAddTodo}>Ajouter</button>
        <ul>{
          this.state.todos.map((item, index)=>{
            return <TodoItem key={index}
                             label={item.label}
                             complete={item.complete}
                             onClick={this.toggleComplete.bind(this,index)}
                  />
          })
        }</ul>
        <div>
          <span>Filtres: </span>
          <button>Tous</button>
          <button>Terminé</button>
          <button>A faire</button>
        </div>
      </div>
    );
  }
}
