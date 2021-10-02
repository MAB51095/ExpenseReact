 
import '../componentsCss/ExpenseItem.css'

function ExpenseItem() {
    const expenseDescription = 'Car Insurance'
    const expenseDate = new Date(2021,1,26)
    const expensePrice = '$100.00'

    return (
        
        <div className="expense-item">
            <h2 className="expense-item-description">{expenseDescription}</h2>
            <div className="expense-item-date">{expenseDate.toISOString()}</div>    
            <div className="expense-item-price">{expensePrice}</div>
            
        </div>
    )
}

export default ExpenseItem;