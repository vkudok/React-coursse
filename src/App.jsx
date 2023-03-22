import React from "react";
import { Header } from "./components/Header/Header";

import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

export const App = () => {
  return (
    <div>
      <Header />
      <RestaurantPage />
    </div>
  );
};
