import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../utils/Loader/Loader";

const MealImgAndIngredient = ({ singleMeal }) => {
  return (
    <div className=" md:gap-20 columns-1 md:columns-2">
      <img
        className="w-full h-[300px] md:h-[500px]"
        src={singleMeal.image}
        alt=""
      />
      <div className="md:pe-4 md:pt-8">
        <div className="">
          <h1 className="pt-3 pb-2 text-2xl leading-7 text-amber-500 font-bold border-b border-amber-500">
            {singleMeal.name}
          </h1>
          <ul className="py-6 font-semibold">
            <li className=" pb-2 uppercase">
              Category -{" "}
              <span className=" font-light">{singleMeal.category}</span>
            </li>
            <li className=" pb-2 flex items-center">
              Source -
              <Link
                className="font-light max-w-full text-gray-600"
                to={singleMeal.source}
              >
                {singleMeal.source}
              </Link>
            </li>
            <li className="pb-2">
              Tags -{" "}
              <button className="border border-amber-500 px-2 rounded-md text-amber-500 text-[.9rem]">
                {singleMeal.tag}
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-amber-500 text-white px-4 py-2">
          <h2 className="font-semibold text-lg pb-2">Ingredients</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3">
            {singleMeal.ingredients.map((ingre, index) => (
              <li key={index} className="flex items-center pb-1">
                <span className="bg-green-700 border inline-block text-[.8rem]  w-5 h-5 text-center font-bold  rounded-full">
                  {index + 1}
                </span>
                <span className="ps-2 text-[.9rem] ">{ingre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealImgAndIngredient;
 