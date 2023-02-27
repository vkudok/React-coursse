import React from "react";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount({ max: 6 });

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <div>
        <div>
          <span>{name}</span>-<span>{price}</span>
        </div>
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
        </div>
      </div>
      {count > 0 && !!ingredients.length && (
        <div>
          {ingredients.map((ingredient) => (
            <Ingredient name={ingredient} />
          ))}
        </div>
      )}
    </div>
  );
};
