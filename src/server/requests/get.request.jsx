import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { setRecipes } from "../../store/recipes/recipes.actions";

const GetRequest = async (token) => {
  const url =
    "https://demo-api.foodyman.org/api/v1/dashboard/admin/receipts?perPage=10&page=1";

  return await fetch(url, {
    headers: {
      Authorization: "Bearer 205|nfZW3C1IuS9d6LH7XRkMcmM7RAhK5VF1k0KPOJMT",
    },
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Could not fetch the data for that resource");
      }
      console.log("Response: ", response.json());
      //   return response.json();
    })
    .catch((error) => console.error("ERROR:", error));
};

export default GetRequest;
