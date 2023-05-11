import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRecipes, setFoods } from "./store/recipes/recipes.actions";

import Receipts from "./component/receipt/receipt.component";
import Update from "./component/update/update.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch(
          "https://demo-api.foodyman.org/api/v1/dashboard/admin/receipts?perPage=10&page=1",
          {
            headers: {
              Authorization:
                "Bearer 14|uTEAoYjYUiHO9KEjA1lU0TOAFZB2z7z81VOeASx3",
            },
            method: "GET",
          }
        );

        const jsonData = await response.json();
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
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchDate();
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
