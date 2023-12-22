import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import IngredientMealList from '../../component/Body/Ingredient/IngredientMealList';
import useFetch from '../../hooks/useFetch';

const IngredientPage = () => {
    const { ingredientName } = useParams()
    const data = useFetch(`filter.php?i=${ingredientName}`);
  
    const { ingerdientData } = useSelector((state) => state.ingredient);
    const selectedIngre = ingerdientData.find((ingre) => ingre.strIngredient === ingredientName);
     
  useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
  
    return (
      <div className="pb-20">
        <div className="px-4 md:px-20 lg:px-28 pt-12">
          <h1 className="text-3xl uppercase font-bold dark:text-white">
            {selectedIngre.strIngredient}
          </h1>
          <p className="dark:text-white text-gray-600 border border-amber-500 p-4 mt-5">
            {selectedIngre.strDescription}
          </p>

          <div className="mt-8">
            {data[0].length !== 0 && <IngredientMealList datas={data} />}
          </div>
        </div>
      </div>
    );
}

export default IngredientPage
