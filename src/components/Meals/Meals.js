import React, {Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
const Meals = (props) => {
    return (
<React.Fragment>
    <MealsSummary/>
    <AvailableMeals mealsList={props.mealsList}/>
</React.Fragment>
    )
}
export default Meals;