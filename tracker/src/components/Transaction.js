import React,{useState} from 'react'

export default function Transaction(props) {
    const [text,typeText] = useState('') // text field
    const [Amount,TypeAmount] = useState(0) //Amount field
    // function hello(e){
    //   typeText(e.target.value)
    // } easy way to do it is (e) => typeText(e.target.value) to get the typed value 
    function AddTransaction(e){
      e.preventDefault()
      props.ad(text,Amount)
    

    }
    return (
        <React.Fragment>
        <h3>Add new transaction</h3>
      <form onSubmit={AddTransaction} >
        <div className="form-control">
          <label >Text</label>
          <input type="text" value={text} onChange={(e) => typeText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label 
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={Amount} onChange={(e) =>TypeAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </React.Fragment>
    )
}
