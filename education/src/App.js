import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import ExpenseItem from "./components/ExpenseItem";

function App(){
    return(
        <div>
            <ClassComponent name="Denis"/>
            <FunctionalComponent name="Denis"/>
            <ExpenseItem />
        </div>
    );
}

export default App;