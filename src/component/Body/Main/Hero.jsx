import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { getSearchCat, getSearchMeals } from '../../../store/categroySLice';
import SearchList from './SearchList';

const Hero = ({datas}) => {
  const [input, setInput] = useState('')
  const [ search , setSearch ] = useState([])
  const dispatch = useDispatch()
  
  const data = useFetch(`filter.php?c=${input}`);
  useEffect(() => {
     dispatch(getSearchCat(input));
  }, [input])
  
  const filterInput = (value) => {
      if (datas.categories) {
        const filterQuestion = datas.categories.filter((que) =>
          que.strCategory.toLowerCase().includes(value.toLowerCase())
        );
        setSearch(filterQuestion);
      }
  }

  const submitHandler = (e) => {
    e.preventDefault()

     if (data[0].length !== 0) {
       const searchMeal = data[0].meals;
       dispatch(getSearchMeals(searchMeal));
    }
    
  }

  return (
    <section className="hero pt-24 pb-12">
      <div className="">
        <div className="flex justify-center">
          <div className="w-[360px] md:w-[440px] lg:w-[480px]">
            <form
              onSubmit={submitHandler}
              action=""
              className="bg-white dark:bg-slate-900 shadow-xl mx-auto flex justify-between rounded-t-md py-3 px-4 md:py-4 md:px-8 "
            >
              <input
                className="border-none text-gray-500 dark:text-white md:text-lg outline-none bg-transparent w-full pe-4"
                type="text"
                value={input}
                placeholder="Search category's meal"
                onChange={(e) => {
                  setInput(e.target.value);
                  filterInput(e.target.value);
                }}
              />
              <button type="submit">
                <i className="ri-search-line text-lg dark:text-white"></i>
              </button>
            </form>
            {search.length > 0 && <SearchList datas={search} />}
          </div>
        </div>

        <div className=" text-center mt-16 mx-4">
          <h3 className=" text-[.7rem] md:text-[.8rem] uppercase text-gray-500">
            PERSONALIZE YOUR EXPERIENCE
          </h3>
          <h2 className="text-2xl pt-1 font-bold  text-gray-700">
            What are your favorite cuisines?
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero
