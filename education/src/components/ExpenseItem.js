import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  console.log(props);



  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;