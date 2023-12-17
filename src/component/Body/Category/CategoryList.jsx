import React from 'react'
import { Link } from "react-router-dom"

const CategoryList = ({ datas }) => {
  return (
    <div className=" pt-16">
      <h1 className=" text-3xl font-bold border-b-4 border-amber-500 uppercase w-20">
        Meals
      </h1>

      <ul className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-12">
        {datas[0].meals.map((meal, index) => (
          <Link key={index} to={`/food/recipe/${meal.idMeal}`}>
            <li className=" bg-white rounded-sm shadow-md pb-2">
              <img src={meal.strMealThumb} alt="" className=" rounded-t-sm" />
              <h3 className=" font-semibold p-2 leading-5">{meal.strMeal}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList
