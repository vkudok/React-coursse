import React from "react";
import styles from "./styles.module.css";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = (restaurant) => {
  return (
    <div className={styles.root}>
      <h2>Ресторан {restaurant.restaurant.name}</h2>
      <Menu menu={restaurant.restaurant.menu} />
      <Reviews restaurantId={restaurant.restaurant.id} />
      <hr />
    </div>
  );
};
