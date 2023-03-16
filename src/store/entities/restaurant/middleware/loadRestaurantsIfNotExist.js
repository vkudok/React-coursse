import {
  failLoadingRestaurants,
  finishLoadingRestaurants,
  RESTAURANT_ACTIONS,
  startLoadRestaurants,
} from "../actions";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== RESTAURANT_ACTIONS.load) {
    return next(action);
  }

  const restaurantIds = selectRestaurantIds(store.getState());

  if (restaurantIds.length) {
    return;
  }

  store.dispatch(startLoadRestaurants());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(() => store.dispatch(failLoadingRestaurants()));
};
