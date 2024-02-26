import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewExpense = () => {

    const [title, setTitle]= useState('');
    const [date, setDate]= useState('');
    const [category, setCategory]= useState('Nourriture');
    const [price, setPrice]= useState(0);
    const [isPending, setIsPending]=useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {title, date, category, price};

        setIsPending(true);

        fetch('http://localhost:9000/expenses', {
            method: 'POST',
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify(expense)
        }).then(()=>{
            console.log('new expense added');
            setIsPending(false);
            navigate("/");
        })
    } 



    return ( 
        <div className="new-expense">
            <h2>ADD NEW EXPENSE</h2>
            <form onSubmit={handleSubmit}>
                <label>Expense title:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Date:</label>
                <input type="date" required value={date} onChange={(e)=> setDate(e.target.value)}/>
                <label>Category:</label>
                <select required value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="Nourriture">Nourriture</option>
                    <option value="Transport">Transport</option>
                    <option value="Facture">Facture</option>
                    <option value="Pret">Prêt</option>
                    <option value="Soins">Soins</option>
                    <option value="Divertissement">Divertissement</option>
                    <option value="Autre">Autre</option>
                </select>
                <label>Price:</label>
                <input type="number" required value={price} onChange={(e)=> setPrice(e.target.value)}/>
                {!isPending && <button>Add Expense</button>}
                {isPending && <button>Adding Expense</button>}
                
            </form>
        </div>

     );
}
 
export default NewExpense;