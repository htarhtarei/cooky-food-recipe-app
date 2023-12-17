import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RandomIngre = () => {
  const { ingerdientData } = useSelector((state) => state.ingredient);
  const defineRandomIngre = ingerdientData.slice(4,8)

  return (
    <section className="px-2 mb-8 md:px-20 lg:px-28 mt-24">
      <h1 className="text-3xl font-bold">Random Ingredients</h1>

      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {defineRandomIngre.map((p, index) => (
            <Link to={`ingredient/${p.strIngredient}`} key={index}>
              <li className="flex flex-col justify-center items-center">
                <img
                  src={`https://www.themealdb.com/images/ingredients/${p.strIngredient}.png`}
                  alt="ingredient"
                  className="w-40 md:w-52"
                />
                <h5 className="text-lg font-bold ">{p.strIngredient}</h5>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RandomIngre
