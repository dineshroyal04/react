import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cord from "../UI/Cord";


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const  clickHandler = () => {
    setTitle("updated");
   // console.log(title);
  }

  return (
    <Cord className="expense-item">
      <ExpenseDate data={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <buttom onClick={clickHandler}>click me!</buttom>
    </Cord>
  );
}
export default ExpenseItem;
