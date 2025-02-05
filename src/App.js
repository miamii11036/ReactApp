import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; 

import MealsProvider from './MealList/MealProvider';
import Counter from './MealList/Counter';
import MealsList from './MealList/MealList';
import Home from './Home';
import CurrentMessage from './WeekDisplay/CurrentMessage';
import DayProvider from './WeekDisplay/DayProvider';
import UserProvider from './LogInOutButton/UserProvider';
import LogMenu from './LogInOutButton/LogMenu';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className='nav-item'>首頁</Link><br />
      </nav>
      <Routes>
          <Route path='/' element={<Home />}></Route>
      </Routes>
      <div>
        <Link to="/MealsLister" className='nav-item'>餐點計算器</Link>
        <Routes>
          <Route path='/MealsLister' element={
            <MealsProvider>
              <MealsList />
              <Counter />
            </MealsProvider>
          }></Route>
        </Routes>
      </div>
      <div>
        <Link to="/CurrentMessage" className='nav-item'>星期通知器</Link>
        <Routes>
          <Route path='/CurrentMessage' element={
            <DayProvider>
              <CurrentMessage />
            </DayProvider>
          }/>
        </Routes>
      </div>
      <div>
        <Link to="/LogInOutButton" className='nav-item'>登入登出按鈕</Link>
        <Routes>
          <Route path='/LogInOutButton' element={
            <UserProvider>
              <LogMenu />
            </UserProvider>
          }></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
