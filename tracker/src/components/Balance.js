import React,{useContext} from 'react'
import { GlobalContext } from '../contetxt/GlobalState';

export default function Balance() {
    const {transactions} = useContext(GlobalContext);
    const arr = transactions.map( (i) => i.amount)
    const total = arr.reduce( (total,i) =>{
      return total+i
    },0 )
    return (
        <div>
            <h4>Balance</h4>
    <h1 id="balance">${total}</h1>
        </div>
    )
}
