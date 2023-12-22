import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MealImgAndIngredient from "../../component/Body/MealDetail.jsx/MealImgAndIngredient";
import MealInstruction from "../../component/Body/MealDetail.jsx/MealInstruction";
import MealMeasure from "../../component/Body/MealDetail.jsx/MealMeasure";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader/Loader";

const RecipesPage = () => {
  const { id } = useParams();

  const [data] = useFetch(`lookup.php?i=${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //to get ingredient array and measure array
  let ingredientArray = [],
    measureArray = [],
    singleMeal = {},
    instructionArray = [];

  if (data.length !== 0) {
    for (let ingre in data.meals[0]) {
      if (ingre.includes("strIngredient")) {
        if (data.meals[0][ingre]) ingredientArray.push(data.meals[0][ingre]);
      }

      if (ingre.includes("strMeasure")) {
        if (data.meals[0][ingre]) {
          if (data.meals[0][ingre].length > 1) {
            measureArray.push(data.meals[0][ingre]);
          }
        }
      }
    }

    const stringToArry = data.meals[0].strInstructions.split(".");
    stringToArry.map((data) => data && instructionArray.push(data));


    singleMeal = {
      name: data.meals[0].strMeal,
      category: data.meals[0].strCategory,
      image: data.meals[0].strMealThumb,
      tag: data.meals[0].strTags,
      source: data.meals[0].strSource,
      ingredients: ingredientArray,
      measures: measureArray,
      instruction: instructionArray,
    };
  }

  return (
    <div>
      <div className="px-4 md:px-20 lg:px-28 pb-12">
        <Link to='/'>
          <div className="mt-8 bg-amber-500 text-white p-4 flex items-center">
            <i className="ri-home-4-line text-2xl"></i>
            <i className="ri-arrow-right-double-line text-2xl px-2"></i>
            <span className=" uppercase">{singleMeal.name }</span>
          </div>
        </Link>

        <div className="mt-8">
          <h1 className="text-3xl dark:text-white font-bold uppercase tracking-widest">
            Meal Details
          </h1>
          {data.length === 0 ? (
            <Loader />
          ) : (
            <div className="md:p-12 py-4 px-8 dark:bg-slate-800 dark:text-white bg-white mt-8 overflow-x-hidden">
              <MealImgAndIngredient singleMeal={singleMeal} />
              <MealMeasure singleMeal={singleMeal} />
              <MealInstruction singleMeal={singleMeal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
