import React, { useState } from 'react';

export default function Expense() {
    const [spending, setSpending] = useState(0);
    const [income, setIncome] = useState(0);

    const handleSpendingChange = (e) => {
        setSpending(e.target.value);
    }

    const handleChange = (e) => {
        setIncome(e.target.value);
    }

    return (
        <div>
            <h1>Expenses: </h1>
            <label>Total Income:</label>
            <input type="number" value={income} onChange={handleChange} />
            <br />
            <label>Amount Spent:</label>
            <input type="number" value={spending} onChange={handleSpendingChange} />
            <br />
            <p>Amount Earned: {income}</p>
            <p>Amount Spent: {spending}</p>
        </div>
    ); 

}
