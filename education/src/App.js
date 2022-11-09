import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {date:new Date(2022, 2, 22), title:"Car Insurancee", amount:256},
        {date:new Date(2022, 3, 23), title:"Milk",           amount:1.5}
    ];
    return(
        <div>
            <ClassComponent name="Denis"/>
            <FunctionalComponent name="Denis"/>
            <NewExpense />
            <Expenses expenses={expenses}/>


        </div>
    );
}
/*
function App(){
    const expenses = [
        {expenseDate:new Date(2022, 2, 22), expenseTitle:"Car Insurancee", expenseAmount:256},
        {expenseDate:new Date(2022, 3, 23), expenseTitle:"Milk",           expenseAmount:1.5}
    ];
    return(
        <div>
            <ClassComponent name="Denis"/>
            <FunctionalComponent name="Denis"/>
            <Expenses expenses={expenses}/>


        </div>
    );
}
*/
export default App;