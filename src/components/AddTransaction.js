import React from 'react'
import {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*1000000),
            text,
            amount: parseInt(amount)        // veya +amount kullanılabilir, number'a cevirmek icin
        }
        addTransaction(newTransaction)
        console.log(text)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label> <br/>
                    <input typeof='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text.' />
                </div>
                <div className="form-control">
                    <label htmlFor='amount'>Amount <br />
                    (negative - expense, positive-income)</label>
                    <input typeof='number' value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amount..'/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
