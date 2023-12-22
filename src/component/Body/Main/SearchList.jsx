import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SearchList = ({ datas }) => {
  const [scroll, setScroll] = useState(100);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > scroll);
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${visible ? "hidden" : ""}  relative`}>
      <ul
        className={`bg-white dark:bg-slate-900 border-t-2 absolute top-0 w-full overflow-y-scroll max-h-[210px]  z-40  pt-2  rounded-b-md`}
      >
        {datas.map((data, index) => (
          <Link key={index} to={`category/${data.strCategory}`}>
            <li className="py-2 dark:text-white px-3 text-[.8rem] text-gray-500 text-left">
              {data.strCategory}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
