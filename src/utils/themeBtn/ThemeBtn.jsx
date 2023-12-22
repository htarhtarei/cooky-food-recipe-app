import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./ThemeBtn.css"

const ThemeBtn = () => {
  const [dark, setDark] = useState(false)
  
  const changeHandler = () => {
    setDark(!dark);

    localStorage.setItem("theme", dark ? "light" :"dark" );
  }
  
  useEffect(() => {
    const modeBtn = document.querySelector("#toggleB");
    
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      modeBtn.setAttribute("checked", "checked");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark])
  
  return (
    <div className="">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            onChange={changeHandler}
            type="checkbox"
            id="toggleB"
            className="sr-only"
          />
          <div className="block bg-gray-600 w-8 h-5 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
}

export default ThemeBtn
