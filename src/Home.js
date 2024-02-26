import useFetch from "./useFetch";
import ExpenseList from "./ExpenseList";
import { Link } from "react-router-dom";
import TotalExpense from "./TotalExpense";
import Balance from "./Balance";



const Home = () => {

    const {error, isPending, data: expenses}= useFetch('http://localhost:9000/expenses');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <p>loading...</p>}
            <div className="money-cards">
                {expenses && <TotalExpense expenses={expenses}/>}
                {expenses && <Balance expenses={expenses}/>}  
            </div>
            <div className="new-expense-button">
                <Link to="/newexpense"><button>+ New Expense</button></Link>
            </div>
            { expenses && <ExpenseList expenses={expenses} title="Expenses" /> }
        </div>
     );
}
 
export default Home;