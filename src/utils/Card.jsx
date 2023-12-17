import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link>
      <li className="max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-[220px]"
          src="https://i.pinimg.com/564x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg"
          alt=""
        />
        <div className="my-3 ">
          <h4 className="pb-1 text-[.8rem] text-amber-500">Thailand</h4>
          <h5 className="text-xl font-semibold text-gray-600 tracking-tight  dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`food/recipe`}>
            <button className=" underline-offset-1 underline">
              See Recipes
            </button>
          </Link>
          <span>
            <i className="ri-heart-line text-xl"></i>
          </span>
        </div>
      </li>
    </Link>
  );
}

export default Card
