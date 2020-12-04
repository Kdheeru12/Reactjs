import React,{useContext} from 'react'
import { GlobalContext } from '../contetxt/GlobalState';


export const HistoryList = ({ transaction }) => {
  const { hello } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() =>hello()} className="delete-btn">x</button>
    </li>
  )
}