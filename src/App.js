import {useEffect,Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Button from './components/Layout/Button';
import classes from './components/Meals/AvailableMeals.module.css';

function App() {
  const [pageOneMeals, setOneMeals] = useState([]);
  const [pageTwoMeals, setTwoMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [pageOnFirst, setChangePage] = useState(true);
  const [httpError, setHttpError] = useState();




    useEffect(() => {
      const fetchOneMeals = async () => {
        
       const response = await fetch('https://reacthttp-d29c4-default-rtdb.firebaseio.com/pageOneMeals.json');

       if(!response.ok){
        throw new Error('Something wweffwent wrong!');
       }
       const responseData = await response.json();
       const loadedMeals = [];

       for(const key in responseData){

         loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
         })
       }
       setIsLoading(false);
       setOneMeals(loadedMeals);
   
      };

      const fetchTwoMeals = async () => {
        
        const response = await fetch('https://reacthttp-d29c4-default-rtdb.firebaseio.com/pageTwoMeals.json');
 
        if(!response.ok){
         throw new Error('Something wweffwent wrong!');
        }
        const responseData = await response.json();
        const loadedMeals = [];
 
        for(const key in responseData){
 
          loadedMeals.push({
           id: key,
           name: responseData[key].name,
           description: responseData[key].description,
           price: responseData[key].price,
          })
        }
        setIsLoading(false);
        setTwoMeals(loadedMeals);
    
       };
      
        fetchOneMeals().then().catch((error) => {
       setIsLoading(false);
       setHttpError(error.message);
      })

      fetchTwoMeals().then().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
       })
     
    }, []);



  if(isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.MealsError}>
    <p>{httpError}</p>
  </section>
  }
  




 

  
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const forwardPage = () => {
    setChangePage(false);
  }

  const backPage = () => {
    setChangePage(true);
  }

  return (
     <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onCartClick={showCartHandler}/>
      <main>
       {pageOnFirst && <Meals mealsList={pageOneMeals}/>}
       {!pageOnFirst && <Meals mealsList={pageTwoMeals}/>}
       {pageOnFirst && <Button changePage={forwardPage}>Next Page</Button>}
       {!pageOnFirst && <Button changePage={backPage}>Previous Page</Button>}
      </main>
      

      </CartProvider>
  );
}

export default App;
