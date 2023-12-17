import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import chicken from "../../../asset/images/chicken.png"
import useFetch from "../../../hooks/useFetch";
import { getIngredientData } from "../../../store/ingredientSlice";
import Loader from "../../../utils/Loader/Loader";

const PopularIngre = () => {
  const dispatch = useDispatch();
  const data = useFetch(`list.php?i=list`);
  
  let pmeals=[]
  if (data[0].length !== 0) {
     pmeals = data[0].meals.slice(0,8);
  }

  useEffect(() => {
    if (data[0].length !== 0) {
     dispatch(getIngredientData(data[0].meals))
   }
  },[data])

  return (
    <section className="px-2 mb-8 md:px-20 lg:px-28 mt-24">
      <h1 className="text-3xl font-bold">Popular Ingredients</h1>

      {pmeals.length === 0 ? (
        <Loader />
      ) : (
        <div className="pt-6">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pmeals.map((p, index) => (
              <Link to={`ingredient/${p.strIngredient}`} key={index}>
                <li className="flex flex-col justify-center items-center">
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${p.strIngredient}.png`}
                    alt="ingredient"
                    className="w-40 md:w-52"
                  />
                  <h5 className="text-lg font-bold pb-4">{p.strIngredient}</h5>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default PopularIngre;

// ;
