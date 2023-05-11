import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRecipes, setFoods } from "./store/recipes/recipes.actions";
import { REQUEST_TYPES } from "./server/requests/request.server";
import { requestDataConstructor } from "./server/requests/request.server";

import Receipts from "./component/receipt/receipt.component";
import Update from "./component/update/update.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDate = async () => {
      const jsonData = await requestDataConstructor(REQUEST_TYPES.GET_PAGINATE);

      const permanent = jsonData.data
        .map((recipe, order) => {
          const {
            id,
            img: productImage,
            discount_price: discountPrice,
            discount_type: discountType,
            shop,
            category,
            translation,
          } = recipe; // img is image of product
          const { title } = translation;
          const categoryTitle = category.translation.title;
          const { logo_img: shopImage, translation: shop_translation } = shop; // shop image and in the translation object we have title
          const { title: shopTitle } = shop_translation; // shop title
          return {
            id,
            order,
            title,
            categoryTitle,
            productImage,
            discountPrice,
            discountType,
            shopImage,
            shopTitle,
            selected: false,
          };
        })
        .reverse();
      dispatch(setFoods(jsonData));
      dispatch(setRecipes(permanent));
    };

    fetchDate();

    return () => {};
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Receipts />}
      />
      <Route
        path="/update/:id"
        element={<Update />}
      />
    </Routes>
  );
};

export default App;
