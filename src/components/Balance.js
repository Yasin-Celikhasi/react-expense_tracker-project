import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";


const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)     // Tutarlar alınıp bir array'e atılıyor.
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);   // Amounts array'i elemanları reduce fonk. ile toplanıyor. toFixed(2) ile virgülden sonra iki basamak alınıyor
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
