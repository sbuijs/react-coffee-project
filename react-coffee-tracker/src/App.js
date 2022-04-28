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
        <Route path="/coffees" exact element={<CoffeesPage />} />
        <Route path="/coffees/:id" element={<CoffeeDetailPage />} />
        <Route path="/roasteries" exact element={<RoasteriesPage />} />
        <Route path="/methods" exact element={<MethodsPage />} />
        <Route path="/" element={<CoffeesPage />} />
      </Routes>
    </div >
  );
}


export default App;
