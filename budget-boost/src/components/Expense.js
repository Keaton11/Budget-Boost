import React, { useState } from 'react';
import 
function Expense() {
    const [earnings, setEarnings] = useState(0);
    const [spending, setSpending] = useState(0);
    const [categories, setCategories] = useState({});

    const handleEarningsChange = (e) => {
        setEarnings(e.target.value);
    }

    const handleSpendingChange = (e) => {
        setSpending(e.target.value);
    }

    const handleCategoryChange = (e) => {
        const newCategories = { ...categories };
        newCategories[e.target.name] = e.target.value;
        setCategories(newCategories);
    }

    const data = {
        labels: Object.keys(categories),
        datasets: [{
            label: 'Spending by Category',
            data: Object.values(categories),
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };


    return (
        <div>
            <h1>Expenses: </h1>
            <label>Earnings:</label>
            <input type="number" value={earnings} onChange={handleEarningsChange} />
            <br />
            <label>Spending:</label>
            <input type="number" value={spending} onChange={handleSpendingChange} />
            <br />
            <label>Category:</label>
            <input type="text" name="categoryName" onChange={handleCategoryChange} />
            <label>Amount:</label>
            <input type="number" name="categoryAmount" onChange={handleCategoryChange} />
            <br />
            <p>Amount Earned: {earnings}</p>
            <p>Amount Spent: {spending}</p>
        </div>
    );
}

export default Expense;