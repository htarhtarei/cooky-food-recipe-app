import React from 'react'

const MealInstruction = ({singleMeal}) => {
  return (
    <div className="pt-8">
      <h1 className="font-bold pb-3">Instructions:</h1>
      <ul className="">
        {singleMeal.instruction.map((inst,index) => (
          <li key={index} className="flex items-start pb-2">
            <i className="ri-checkbox-line text-amber-500 text-lg"></i>
            <span className="text-[.9rem] dark:text-white text-gray-600 ps-2 pt-[.2rem]">
              {inst}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealInstruction
