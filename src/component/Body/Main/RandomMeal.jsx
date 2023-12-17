import React from 'react'
import Card from '../../../utils/Card';

const RandomMeal = () => {
  return (
    <section className="px-2 mb-8 md:px-20 lg:px-28 mt-24">
      <h1 className="text-3xl pb-8 font-bold">Random Meals</h1>

      <div className="flex justify-center">
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </section>
  );
}

export default RandomMeal
