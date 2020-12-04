import React, { Component } from 'react';
import './App.css'
import Header from './components/header'
import Balance from './components/Balance'
import Expense from './components/Expense'
import History from './components/History'
import Transaction from './components/Transaction'
import { GlobalContext, GlobalProvider } from './contetxt/GlobalState';
class App extends Component {
    // state={ history:[
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 }
    // ]
    // }
    ad = (text,amount) =>{
        console.log(text,amount);
    } 
    render() {
        return (
            <div className='App'>
                <Header/>
                <GlobalProvider>
                <div className="container">
                    <Balance/>
                    <Expense/>
                    <History/>
                    <Transaction ad={this.ad}/>
                </div>
                </GlobalProvider>
 
            </div>
        );
    }
}

export default App;
