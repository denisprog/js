import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import {useState} from 'react'

//onAddExpense(f), 
//onVisibilityForm(f)
//visibleForm(v), 
const NewExpense = (props) => {
    const[isEdit, setEdit] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const startEdit = () => {
        setEdit(true);
    }
    const stopEdit = () => {
        setEdit(false);
    }


    return (
        <div className="new-expense">
            {isEdit 
                ?(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdit}/>)
                : (<button onClick={startEdit}>Show Form</button>)}
        </div>
    )
}

export default NewExpense;