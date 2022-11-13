import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'
import ExpensesList from './ExpensesList';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(''); 

    const onChangeFilter = yearValue => {
        setFilteredYear(yearValue);
    };

    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear || filteredYear==='';
    });


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            <ExpensesList items={filteredExpenses}/>

        </Card>
    )
}

export default Expenses;