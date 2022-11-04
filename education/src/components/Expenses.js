import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className="expenses">
            {
                props.expenses.map(expense =>{
                    return <ExpenseItem {...expense} />;
                })
            }
        </div>
    )
}

export default Expenses;