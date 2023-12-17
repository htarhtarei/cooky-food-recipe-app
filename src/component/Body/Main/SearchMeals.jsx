import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchMeals = ({ datas }) => {
  const { searchCategory: category } = useSelector((state) => state.category);
    if (datas.length === 0) {
       return 
  }
    
  return (
    <div className=" pt-8 pb-12 px-4 md:px-20 lg:px-28">
      <h1 className=" text-2xl font-bold border-b-4 border-amber-500 uppercase w-20">
        Meals
      </h1>

      <ul className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-8">
        {datas.map((meal, index) => (
          <Link key={index} to={`/food/recipe/${meal.idMeal}`}>
            <li className="relative bg-white rounded-sm shadow-md pb-2">
              <img src={meal.strMealThumb} alt="" className=" rounded-t-sm" />
              <h3 className=" font-semibold p-2 leading-5">{meal.strMeal}</h3>
              <p className='absolute top-1 right-2 bg-amber-500 text-white px-2 rounded-xl text-[.9rem]'>{category }</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchMeals
