const Balance = ({expenses}) => {
    
    let Total=80000
    expenses.map((expense) =>
        Total -= parseInt(expense.price)
    )


    return ( 
        <div className="balance">
            <h2> Balance </h2>
            <p> {Total} fcfa</p>
        </div>
     );
}
 
export default Balance;