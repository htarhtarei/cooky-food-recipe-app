import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../utils/Loader/Loader"

const Lastest = ({ datas }) => {
  return (
    <section className="px-2 mb-8 md:px-20 lg:px-28">
      <h1 className="dark:text-white text-3xl pb-8 font-bold">Categories</h1>

      {datas.categories === undefined ? (
          <Loader />
      ) : (
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {datas.categories.map((data, index) => (
            <Link key={index} to={`category/${data.strCategory}`}>
              <li className=" bg-white dark:bg-slate-800 dark:shadow-2xl dark:border-none border py-4 shadow-2xl relative">
                <img
                  src={data.strCategoryThumb}
                  alt=""
                  className=" scale-100 hover:scale-90 transition-transform duration-200"
                />
                <span className="absolute top-2 right-2 bg-amber-500 text-[.8rem] text-white px-2 rounded-lg">
                  {data.strCategory}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Lastest;
