import React, { Component } from 'react'
import './Add.css'
export default class AddTodos extends Component {
    state = {
        title: ' '
    }
    text = (e) => this.setState({[e.target.name]:e.target.value})
    Submit = (e) => {
        e.preventDefault();
        this.props.ad(this.state.title)
        this.setState({ title: ''})
    }
    render() {
        return (
            // <form action="">
            //     <input type="text"name='title' placeholder='add todos'/>
            //     <button type="submit">submit</button>
            // </form>
            <form onSubmit={this.Submit} className="form-inline">

            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">Password</label>
              <input type="input" className="form-control" value={this.state.title} onChange={this.text} id="inputPassword2" placeholder="Password" name='title' />
            </div>
            <button type="submit"  className="btn k btn-primary mb-2">Confirm</button>
          </form>
        )
    }
}
