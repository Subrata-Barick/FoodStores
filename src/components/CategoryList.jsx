import React, { useEffect, useState } from "react";
import FoodProducts from "../FoodProducts";
import { useSelector, useDispatch } from "react-redux";
import { setcategory } from "../features/categorySlice";

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState([]);
  const uniqueCategory = () => {
    const categories = [...new Set(FoodProducts.map((item) => item.category))];

    setActiveCategory(categories);
  };
  useEffect(() => {
    uniqueCategory();
  }, []);
  const dispatch = useDispatch();
  const newCategory = useSelector((state) => state.category.category);




  return (
    <div className="mx-7 flex gap-2">
      <button
        className={`lg:px-3 lg:py-2 px-2 py-1 bg-gray-200 font-bold rounded hover:bg-orange-500 hover:text-white ml-[30px                                                                                              ] ${
          newCategory === "All" ? "bg-orange-500 text-white font-bold" : ""
        } `}
        onClick={() => dispatch(setcategory("All"))}
      >
        All
      </button>
      {activeCategory.map((category, index) => {
        return (
          <button
            className={`lg:px-3 lg:py-2 px-2 py-1 bg-gray-200 font-bold rounded hover:bg-orange-600 hover:text-white ${
              newCategory === category
                ? "bg-orange-600 text-white font-bold"
                : ""
            } `}
            key={index}
            onClick={() => dispatch(setcategory(category))}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;
