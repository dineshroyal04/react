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
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
      {props.items.map((expenses,index) => { 
        //console.log(expenses);
      return (<ExpenseItem 
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      key={index}
      />)
      })}
      
    </Cord>
  );
}
export default Expenses;
