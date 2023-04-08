import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "../store/recipes/recipes.actions";

export const getRequest = (token) => {
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
};

export const deleteRequest = (id) => {
  const url = `https://demo-api.foodyman.org/api/v1/dashboard/admin/receipts/delete?ids[0]=${id}`;
  fetch(url, {
    headers: {
      Authorization: "Bearer 205|nfZW3C1IuS9d6LH7XRkMcmM7RAhK5VF1k0KPOJMT",
    },
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Could not delete the recipe, smth went wrong");
      }

      console.log("Assume that recipe is deleted :)");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
