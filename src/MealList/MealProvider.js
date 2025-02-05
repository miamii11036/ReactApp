import React from "react";

/*
1. 熟悉Context API的使用
2. 將使用者輸入的內容傳給子元件
*/

//建立一個Context物件
const MealsContext = React.createContext();

//要傳遞的值
const todaysMeals = ["起司蛋餅", "松露牛肝菌燉飯", "鮪魚起司薄餅"];

//建立Provider元件
const MealsProvider = function({children}) {
    const [meals, setMealsList] = React.useState(todaysMeals); //將預設的內容傳給子元件

    //讀取使用者輸入的內容並傳給子元件
    const toggleMeal = function(e) {
        let newMeals = e.target.value
        setMealsList(newMeals.split(","));
    }
    
    return (
        //MealsContext.Provider會將meals作為value提供給Context
        //value={{meals}} 表示 任何使用 MealsContext 的元件 都能夠讀取 meals 這個狀態
        <MealsContext.Provider value={{meals, toggleMeal}}> 
            {children}
        </MealsContext.Provider>
        //.Provider是Context物件的屬性之一，使用{{}}傳遞物件，而{}傳遞陣列
    )
}
//建立自訂的hook，封裝React.useContext(MealsContext)
//其他元件可直接存取MealsContext，不需在使用React.useContext
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider