import React, {Component, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import { Divider, Card, List } from 'react-native-paper';
import './css/Transaction.css';

function Transaction() {
    const [transactions, setTransactions] = useState([
        {
          name : "DOLLARAMA #433",
          category: "Shopping",
          transaction: "-$2.54",
          date: "Jan 07, 2023"
        },
        {
          name : "TIGER SUGAR OTTAWA MER",
          category: "Restaurants",
          transaction: "-$10.10",
          date: "Jan 06, 2023"
        },
        {
          name : "ALIRANG RESTAURANT",
          category: "Restaurants",
          transaction: "-$28.12",
          date: "Jan 06, 2023"
        },
    ]);
    
    const displayTransactions = () => {
        return (
            <Card>
                <Card.Title title="Recent Transactions"/>
                {
                    transactions.map((transaction) => {
                        return (
                            <>
                                <Divider />
                                <List.Item
                                    title={transaction.name}
                                    description={transaction.transaction}
                                />
                            </>
                        );
                    })
                }
            </Card>
        );
    }

    return (
        <>
            {displayTransactions()}
        </>
    );
}

export default Transaction;
