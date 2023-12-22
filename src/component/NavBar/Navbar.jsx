import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/images/logo1.png";
import ThemeBtn from "../../utils/themeBtn/ThemeBtn";

const Navbar = ({ datas }) => {
  const [isShow, setIsShow] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  if (datas === undefined) {
    return;
  }


  return (
    <div
      className={`px-2 z-30  shadow-lg md:px-20 lg:px-28  transition-all duration-300 ${
        isFixed ? "fixed top-0 mb-16 " : ""
      } w-screen dark:bg-slate-950 bg-gray-50`}
    >
      <nav className="flex justify-between items-center">
        {/*App Logo Area */}
        <Link to="/">
          <div className="flex items-center  ">
            <img className=" w-16 h-16 -me-2 my-0 " src={logo} alt="logo" />
            <h1 className="text-2xl font-bold text-amber-500">Cooky</h1>
          </div>
        </Link>

        <div className="flex items-center">
          <div className="pe-4">
            <div className="flex items-center">
              <ThemeBtn />
              <div className="ps-3">
                <span onClick={() => setIsShow(!isShow)}>
                  <i className="ri-menu-line dark:text-white text-xl ms-3 font-bold"></i>
                </span>
                <div
                  className={`bg-stone-100 fixed z-40 top-0 bottom-0 transition-all duration-500 ${
                    isShow ? "right-0 w-[200px] md:w-[300px]" : "-right-60"
                  } w-60`}
                >
                  <ul className="pt-20 dark:bg-slate-900">
                    {datas.map((category, index) => (
                      <Link key={index} to={`category/${category.strCategory}`}>
                        <li
                          onClick={() => setIsShow(false)}
                          className="mx-6 py-2 font-bolder text-[.9rem] dark:text-white text-gray-500 border-b-2"
                        >
                          {category.strCategory}
                        </li>
                      </Link>
                    ))}
                  </ul>
                  <span
                    onClick={() => setIsShow(!isShow)}
                    className="absolute top-1 right-3 border-2 border-amber-400 rounded-full px-1"
                  >
                    <i className="ri-close-line text-2xl dark:text-white"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
