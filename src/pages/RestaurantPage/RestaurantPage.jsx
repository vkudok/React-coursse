import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { selectRestaurantsFilteredByName } from "../../store/entities/restaurant/selectors";

export const RestaurantPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(loadRestaurantIfNotExist());
  }, []);

  const restaurants = useSelector((state) =>
    selectRestaurantsFilteredByName(state, {
      searchValue: '',
    })
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <div>
        <h1>Список ресторанов: </h1>
        {restaurants.map((r) => {
          return <Restaurant key={r.id} restaurant={r}/>
        })}
      </div>
    </div>
  );
};
