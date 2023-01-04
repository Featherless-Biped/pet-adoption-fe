import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from './displays/homePage/homePage';
import LoginPage from './displays/loginPage/loginPage';
import MyPetsPage from './displays/myPetsPage/myPetsPage';



function App() {


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pets/:userid" element={<MyPetsPage />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
