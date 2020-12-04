import React,{useContext} from 'react'
import { GlobalContext } from '../contetxt/GlobalState';
import {HistoryList} from './HistoryList';

export default function History() {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map((i) =>(
               <HistoryList transaction={i} key={i.id}/>
            ) )}

        </ul>
        </div>
    )
}
