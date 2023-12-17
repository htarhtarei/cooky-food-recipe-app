import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import CategoryDefination from "../../component/Body/Category/CategoryDefination";
import CategoryList from "../../component/Body/Category/CategoryList";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader/Loader";

const CategoryMealPage = () => {
  const { categoryName } = useParams()

  //to get click category to send category defination component
  const { categories:category } = useSelector(state => state.category)
  const clickedCategory = category.categories.filter(
    (cat) => cat.strCategory === categoryName
  );

  const data = useFetch(`/filter.php?c=${categoryName}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20">
      {data[0].length === 0 ? (
        <Loader />
      ) : (
        <div className="px-4 md:px-20 lg:px-28">
          <CategoryDefination category={clickedCategory} />
          <CategoryList datas={data} />
        </div>
      )}
    </div>
  );
};

export default CategoryMealPage;
