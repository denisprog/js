import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {id:"1", date:new Date(2019, 2, 22), title:"Potato", amount:256},
        {id:"2", date:new Date(2020, 3, 23), title:"Milk",           amount:150},
        {id:"3", date:new Date(2021, 3, 23), title:"Butter",           amount:100},
        {id:"4", date:new Date(2022, 3, 23), title:"Bread",           amount:200},
    ];

    const addExpenseHandler = expense =>{
        console.log('In App.js');
        console.log(expense);
    }

    return(
        <div>
            <ClassComponent name="Denis"/>
            <FunctionalComponent name="Denis"/>
            <NewExpense onAddExpense={addExpenseHandler}/>
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