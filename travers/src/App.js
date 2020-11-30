import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todo'
//import TodoItems from './components/TodoItems'


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

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title:'Hello',
        completed:false
      },
      {
        id:2,
        title:'Hello2',
        completed:true
      },
      {
        id:3,
        title:'Hello3',
        completed:true
      },
    ]
  }

check = (id) =>{
  this.setState({
    todos: this.state.todos.map( (i) =>{
      if(i.id === id){
        i.completed = !i.completed
      }
      return i
    })
  })
}
delete = (id) => {
  this.setState({
    todos:[...this.state.todos.filter(i => i.id != id)]
  })
}

  render(){
    //console.log(this.state.todos);
    return(
      
      <div className="App">
      <h1>dd</h1>
      
      <Todos todos={this.state.todos} check = {this.check} delete={this.delete}  />
      </div>
    )
  }
  
}

export default App;