import { Routes ,Route} from 'react-router';
import './App.css';
import Navbar from './component/NavBar/Navbar';
import "remixicon/fonts/remixicon.css";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from './store/categroySLice';

//Pages
import HomePage from './page/Home/HomePage';
import Footer from './component/Footer/Footer';
import RecipesPage from './page/Meal/RecipesPage';
import CategoryMealPage from './page/Categories/CategoryMealPage';
import IngredientPage from './page/Ingredients/IngredientPage';


function App() {
  const [ data ]= useFetch('categories.php')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory(data));
  }, [data])
  
    return (
      <>
        {data && <Navbar datas={data.categories} />}
        <div className=" min-h-[500px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="category/:categoryName" element={<CategoryMealPage />} />
            <Route path="food/recipe/:id" element={<RecipesPage />} />
            <Route path='ingredient/:ingredientName' element={<IngredientPage/>}/>
          </Routes>
        </div>
        <Footer />
      </>
    );
}

export default App;