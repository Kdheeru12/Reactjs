import React, {useContext} from 'react'
import { GlobalContext } from '../contetxt/GlobalState';

export default function Expense() {
    const {transactions} = useContext(GlobalContext);
    const arr = transactions.map( (i) => i.amount)
    const plus = arr.filter( (j) => j>0)
    const minus = arr.filter( (j) => j<0)
    const sum = plus.reduce( (total,i) =>{
      return total+i
    },0 )
    const sub = minus.reduce( (total,i) =>{
      return total+i
    },0 )
    
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+{sum} </p>
        </div>
        <div>
          <h4>Expense</h4>
          
    <p id="money-minus" className="money minus">{sub}</p>
        </div>
      </div>
    )
}
