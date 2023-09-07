import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  const day = props.data.toLocaleString("en-US", { day: "2-digit" });

  const year = props.data.getFullYear();
  const month = props.data.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
