import React from 'react'
import { Link } from "react-router-dom"

const CategoryList = ({ datas }) => {
  return (
    <div className=" pt-16">
      <h1 className="dark:text-white text-3xl font-bold border-b-4 border-amber-500 uppercase w-20">
        Meals
      </h1>

      <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-12">
        {datas[0].meals.map((meal, index) => (
          <Link key={index} to={`/food/recipe/${meal.idMeal}`}>
            <li className="dark:bg-slate-800 dark:shadow-xl bg-white rounded-sm h-[285px] shadow-md pb-2">
              <img src={meal.strMealThumb} alt="" className=" rounded-t-sm" />
              <h3 className=" font-semibold p-2 pt-4 leading-4 dark:text-white">{meal.strMeal.length > 25 ?meal.strMeal.slice(0,25)+".....":meal.strMeal}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList
