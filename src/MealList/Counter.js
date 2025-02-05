import { useMealsListContext } from "./MealProvider";

/*
計算Context API送來的資料數量
*/

const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <div className="Counter">
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter