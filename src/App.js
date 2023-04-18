import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRecipes } from "./store/recipes/recipes.actions";

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
                "Bearer 205|nfZW3C1IuS9d6LH7XRkMcmM7RAhK5VF1k0KPOJMT",
            },
            method: "GET",
          }
        );

        const jsonData = await response.json();
        const permanent = [];
        jsonData.data.map((recipe, order) => {
          const {
            id,
            img: productImage,
            discount_price: discountPrice,
            shop,
            category,
          } = recipe; // img is image of product
          const { keywords: title } = category;
          const { logo_img: shopImage, translation } = shop; // shop image and in the translation object we have title
          const { title: shopTitle } = translation; // shop title

          permanent.push({
            id,
            order,
            title,
            productImage,
            discountPrice,
            shopImage,
            shopTitle,
            selected: false,
          });
        });
        permanent.reverse();
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
