import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Categories () {
    const [categories, setCategories] = useState({});

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
            <h1>Categories: </h1>
            <label>Category:</label>
            <input type="text" name="categoryName" onChange={handleCategoryChange} />
            <label>Amount:</label>
            <input type="number" name="categoryAmount" onChange={handleCategoryChange} />
            <Line data={categories} />
            <br />
        </div>
    );
 
}