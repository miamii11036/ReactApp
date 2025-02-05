import { useMealsListContext } from "./MealProvider";
import './MealList.css';

/*
接收Context API傳來德資料成現在網頁中
*/


const MealsList = () => {
    const {meals} = useMealsListContext();
    const {toggleMeal} = useMealsListContext();
    return (
        <div className="MealsList">
            <p>今天吃了什麼?</p>
            <textarea cols="40" rows="4" value={meals} onChange={toggleMeal}/>
            <h1>
                Meals List 
            </h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
}

export default MealsList