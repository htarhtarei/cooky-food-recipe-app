import React from 'react'

const CategoryDefination = ({ category }) => {
  return (
    <div className="pt-12">
      <div className="border-2 bg-gray-50 border-amber-500">
        <div className="py-4 px-6">
          <h3 className="md:text-3xl text-2xl font-bold pb-2 text-amber-600">
            {category[0].strCategory}
          </h3>
          <p className=" text-gray-600">{category[0].strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryDefination
