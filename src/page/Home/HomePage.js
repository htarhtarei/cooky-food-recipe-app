import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../../component/Body/Main/Hero';
import Lastest from '../../component/Body/Main/Lastest';
import PopularIngre from '../../component/Body/Main/PopularIngre';
import SearchMeals from '../../component/Body/Main/SearchMeals';

const HomePage = () => {
  const { categories } = useSelector((state) => state.category);
  const { searchMeals: data } = useSelector((state) => state.category);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pb-16">
      <Hero />
      <div className="mx-8 mt-8">
        {data !== null ? (
          <SearchMeals datas={data} />
        ) : (
          <h1 className='py-4 text-center text-lg text-red-600'>There is no meal with this category</h1>
        )}
        <Lastest datas={categories} />
        <PopularIngre />
      </div>
    </div>
  );
}

export default HomePage
