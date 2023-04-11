import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "./store/recipes/recipes.actions";

import Receipts from "./component/receipt/receipt.component";

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
        dispatch(setRecipes(jsonData.data));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchDate();
  }, []);

  return <Receipts />;
};

export default App;
