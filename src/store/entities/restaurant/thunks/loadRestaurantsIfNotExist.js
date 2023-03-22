import { restaurantSlice } from "..";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantIfNotExist = () => (dispatch, getState) => {
  const restaurantIds = selectRestaurantIds(getState());

  if (restaurantIds.length) {
    return;
  }

  dispatch(restaurantSlice.actions.startLoading());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      dispatch(restaurantSlice.actions.finishLoading(restaurants))
    )
    .catch(() => dispatch(restaurantSlice.actions.failLoading()));
};
