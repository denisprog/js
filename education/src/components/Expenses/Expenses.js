import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(''); 

    const onChangeFilter = yearValue => {
        setFilteredYear(yearValue);
    };

    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear || filteredYear==='';
    });

    let expensesContent = <p>No expenses found</p>;
    if (filteredExpenses.length >0){
        expensesContent = filteredExpenses.map(expense =>{
            return <ExpenseItem 
                        key={expense.id} 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>;
        })
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            { expensesContent }

        </Card>
    )
}

export default Expenses;