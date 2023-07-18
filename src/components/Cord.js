import './Cord.css';
function Cord(props)
{
    const classes='cord '+props.className;
    return (<div className={classes}>{props.children}</div>);
}
export default Cord;