import React, { Component } from 'react'
//import Todos from './Todo'
import './TodoItems.css'

export class TodoItems extends Component {
    complete = ()=>{
        /*
        if(this.props.todo.completed){
            return{
            textDecoration:'line-through'

        }
        }else{
            return{
            textDecoration:'none'
            }
        }
        */
       //alternate to this
       return{
           textDecoration: this.props.todo.completed ? 'line-through' :'none',
           color:this.props.todo.completed ? 'green' :'red',
           background:'#f4f4f4',
           padding:'10px',
           borderBottom:'1px black solid'
       }
    }
    render() {
        const {id,title} = this.props.todo
        return ( 
            <div className='ss' >
                
                <p style={this.complete()}>
                    <input type="checkbox" onChange = {this.props.check.bind(this,this.props.todo.id)}/>
                    {this.props.todo.title}
                    <button className='b' onClick={this.props.delete.bind(this,id)}> X </button>
                </p>
            </div>
        )
    }
}



export default TodoItems;

