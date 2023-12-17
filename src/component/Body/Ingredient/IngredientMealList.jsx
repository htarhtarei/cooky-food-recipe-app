import React from 'react'
import { Link } from 'react-router-dom';

function IngredientMealList({ datas }) {
  return (
    <div className=" pt-8">
      <h1 className=" text-2xl font-bold border-b-4 border-amber-500 w-12">
        Meals
      </h1>

      <ul className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
        {datas[0].meals.map((data, index) => (
          <Link key={index} to={`/food/recipe/${data.idMeal}`}>
            <li className=" bg-white rounded-sm shadow-md pb-2">
              <img src={data.strMealThumb} alt="" className=" rounded-t-sm" />
              <h3 className=" font-semibold p-2 leading-5">{data.strMeal}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default IngredientMealList
