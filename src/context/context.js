import React, {useReducer, createContext} from 'react'; 
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":50,"category":"Business","type":"Income","date":"2021-05-11","id":"20ae0fac-ec59-44d8-add9-66b4850a1260"},{"amount":75,"category":"House","type":"Expense","date":"2021-05-11","id":"ba15bd65-6205-4c05-954a-5a7920ea5ccb"},{"amount":55,"category":"Travel","type":"Expense","date":"2021-05-10","id":"1898f64f-7bf0-45c2-8d55-4b7cc07f4e47"},{"amount":100,"category":"Salary","type":"Income","date":"2021-05-10","id":"62fed999-7676-4014-b819-5411ec7862c9"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    //Total Balance
    const balance = transactions.reduce((acc, currVal)=> currVal.type ==='Expense' ? acc - currVal.amount : acc + currVal.amount , 0);
    
    return ( 
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, 
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

