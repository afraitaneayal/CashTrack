const TotalExpense = ({expenses, title}) => {
    
    let Total=0
    expenses.map((expense) =>
        Total += parseInt(expense.price)
    )


    return ( 
        <div className="total-expense">
            <h2> Total Expenses </h2>
            <p> {Total} fcfa</p>
        </div>
     );
}
 
export default TotalExpense;