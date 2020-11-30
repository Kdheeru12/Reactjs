import React, { Component } from 'react';
import TodoItems from './TodoItems'
import PropTypes from 'prop-types';
/*
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
*/

class Todos extends Component{

  render(){
      console.log(this.props.todos)
    return (
      this.props.todos.map((i) =>(
        <TodoItems key = {i.id} todo = {i} check = {this.props.check} delete = {this.props.delete}/>
    )
    )
    )
  }
  
}

Todos.propTypes ={
    todos: PropTypes.array.isRequired
}


export default Todos;