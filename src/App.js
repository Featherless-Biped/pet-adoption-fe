import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Dashboard from './displays/adminPages/dashboardPage';
import HomePage from './displays/homePage/homePage';
import LoggedInHomePage from './displays/homePage/LoggedInHomePage';
// import LoginPage from './displays/loginPage/loginPage';
import MyPetsPage from './displays/myPetsPage/myPetsPage';



function App() {


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<LoggedInHomePage />} />
        <Route path="/pets/:userid" element={<MyPetsPage />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
