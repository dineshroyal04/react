import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cord from "../UI/Cord";


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  console.log(title);
//console.log(props.title, title);
  const  clickHandler = () => {
    setTitle("updated");
   // console.log(title);
  }

  return (
    <Cord className="expense-item">
      <ExpenseDate data={props.date}></ExpenseDate>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>click me!</button>
    </Cord>
  );
}
export default ExpenseItem;
