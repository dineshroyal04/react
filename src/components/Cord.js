import './Cord.css';
const Cord = (props) =>
{
    const classes='cord '+props.className;
    return (<div className={classes}>{props.children}</div>);
}
export default Cord;