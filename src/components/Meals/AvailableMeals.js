import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
    const mealsList = props.mealsList.map(meal => <MealItem 
        id = {meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}></MealItem>);
  return (
   <section className={classes.meals}>
    <Card>
        <ul>
            {mealsList}
     </ul>
    </Card>
    
  </section>
  )
};

export default AvailableMeals;