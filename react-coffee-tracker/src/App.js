import './App.css';

import { Routes, Route } from "react-router-dom";

import { RoasteriesPage } from './pages/roasteriesPage';
import { MethodsPage } from './pages/methodsPage';

import { GlobalStyle } from "./styles/globalstyles.style";
import { StyledNavbar } from './components/UI/navbar/navbar.style';
import { HomePage } from './pages/homePage';
// import { CoffeeRoutes } from './features/coffee/routes'
import { CoffeesPage } from './pages/coffeesPage';
import { CoffeeDetailPage } from './pages/coffeeDetailPage'
function App() {

  return (
    <div className='app'>
      <StyledNavbar className="navbar" />
      <GlobalStyle />

      <Routes>
        {/* {CoffeeRoutes} */}
        <Route path="/react-coffee-project/coffees" exact element={<CoffeesPage />} />
        <Route path="/react-coffee-project/coffees/:id" element={<CoffeeDetailPage />} />
        <Route path="/react-coffee-project/roasteries" exact element={<RoasteriesPage />} />
        <Route path="/react-coffee-project/methods" exact element={<MethodsPage />} />
        <Route path="/react-coffee-project/" element={<CoffeesPage />} />
      </Routes>
    </div >
  );
}


export default App;
