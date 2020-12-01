import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todo'
//import TodoItems from './components/TodoItems'
import Header from './components/header/header'
import AddTodos from './components/AddTodos'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import About from './components/pages/about'
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
        completed:false
      },
      {
        id:3,
        title:'Hello3',
        completed:false
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
    todos:[...this.state.todos.filter(i => i.id !== id)]
  })
}
ad = (title) =>{
  this.setState({
    todos:[...this.state.todos,{id:uuidv4(),title:title,completed:false}]
  })
}
  render(){
    //console.log(this.state.todos);
    return(
      <Router>
      <div className="App">
      <Header />
      <Route path='/' exact render= {
        props =>(
          <React.Fragment>
                  <AddTodos ad = {this.ad} />
                  <Todos todos={this.state.todos} check = {this.check} delete={this.delete}  />
          </React.Fragment>
        )
      } />
      <Route path='/about' component={About} />


      </div>
      </Router>
   
    )
  }
  
}

export default App;