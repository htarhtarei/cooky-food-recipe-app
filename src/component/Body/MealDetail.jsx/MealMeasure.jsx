import React from 'react'

const MealMeasure = ({singleMeal}) => {
  return (
    <div className="pt-12">
      <h1 className="font-bold pb-3">Measure:</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 border border-gray-300 p-4">
        {singleMeal.measures.map((measure, index) => (
          <li key={index} className="flex items-center pb-1 ">
            <i className="ri-add-circle-line text-amber-500 text-xl"></i>
            <span className="text-[.9rem] ps-1">{measure}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealMeasure
