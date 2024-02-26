

const ExpenseList = ({ expenses, title}) => {




    return ( 
        <div className="expense-list">
                {expenses.map((expense) =>
                    <div className="expense-preview" key={expense.id}>
                        <p>{expense.title}</p> 
                        <p>{expense.date}</p>
                        <p>{expense.category}</p>
                        <p>+{expense.price}</p>
                    </div>
                )}
            <h2>{title}</h2>
        </div>
     );
}
 
export default ExpenseList;