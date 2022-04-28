import { Route } from "react-router-dom";
import { CoffeesPage } from '../../pages/coffeesPage';
import { CoffeeDetailPage } from '../../pages/coffeeDetailPage';

export const CoffeeRoutes = () => {
  return (
    <>
      <Route path="/coffees" exact element={<CoffeesPage />} />
      <Route path="/coffees/:id" element={<CoffeeDetailPage />} />
    </>
  )
}
