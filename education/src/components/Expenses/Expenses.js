import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'


const Expenses =(props) => {

    const [filteredYear, setFilteredYear] = useState('2020'); 

    const onChangeFilter = yearValue => {
        setFilteredYear(yearValue);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            {
                props.expenses.map(expense =>{
                    return <ExpenseItem {...expense} />;
                })
            }
        </Card>
    )
}

export default Expenses;