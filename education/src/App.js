import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import ExpenseItem from "./components/ExpenseItem";

function App(){
    const expenses = [
        {expenseDate:new Date(2022, 2, 22), expenseTitle:"Car Insurancee", expenseAmount:256},
        {expenseDate:new Date(2022, 3, 23), expenseTitle:"Milk",           expenseAmount:1.5}
    ];
    return(
        <div>
            <ClassComponent name="Denis"/>
            <FunctionalComponent name="Denis"/>

            {
                expenses.map(expense =>{
                    return <ExpenseItem {...expense} />;
                })
            };
        </div>
    );
}

export default App;