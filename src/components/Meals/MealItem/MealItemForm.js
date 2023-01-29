import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import {useState, useRef} from 'react';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);


    const submitHandler = event => {
        event.preventDefault();
 

        //this is always a string, even if the input is a number type.
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount > 5){
            setAmountIsValid(false);
            return;

        }

          props.onAddToCart(enteredAmountNumber);
          return;

    }

return (
<form className={classes.form} onSubmit={submitHandler}>
    <Input 
    ref = {amountInputRef}
    label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount</p>}
</form>
);

};

export default MealItemForm;