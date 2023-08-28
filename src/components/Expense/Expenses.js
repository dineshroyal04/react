import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Cord from '../UI/Cord';
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  const FilterChangeHandler = selectedyear =>{
    setFilteredYear(selectedyear);
   
  }
  
  return (
    <Cord className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
    </Cord>
  );
}
export default Expenses;
