import classes from './HeaderCartButton.module.css';

const Button = props => {
    return (
    <button onClick={props.changePage} className={classes.button}>{props.children}</button> )
}



export default Button;