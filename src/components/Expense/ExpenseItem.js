import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cord from "../UI/Cord";
function ExpenseItem(props) {
  // const { date, expense,title } = props;
  // const month = props.date.toLocaleString('en-Us', { month: 'long' });

  return (
    <Cord className="expense-item">
      <ExpenseDate data={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cord>
  );
}
export default ExpenseItem;
