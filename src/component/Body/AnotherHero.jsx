import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import useFetch from '../../hooks/useFetch';
import { getSearchMeals } from "../../store/categroySLice";

const AnotherHero = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState();
  const dispatch = useDispatch();

  const data = useFetch(`filter.php?c=${key}`);

  const submitHandler = (e) => {
    e.preventDefault();

    setKey(input);

    if (data[0].length !== 0) {
      const searchMeal = data[0].meals;
      dispatch(getSearchMeals(searchMeal));
    }
  };

  return (
    <section className="hero pt-24 pb-12">
      <div className="">
        <div className="flex justify-center">
          <form
            onSubmit={submitHandler}
            action=""
            className="bg-slate-100 shadow-xl mx-auto flex justify-between rounded-full py-3 px-4 md:py-4 md:px-8 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px]"
          >
            <input
              className="border-none md:text-lg outline-none bg-transparent w-full pe-4"
              type="text"
              value={input}
              placeholder="Search category's meal"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <i className="ri-search-line text-lg"></i>
            </button>
          </form>
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

export default AnotherHero
