import React from "react";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipes/recipes.selector";
import "./receipt.styles.css";
import { ReactComponent as EditIcon } from "../../assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";

const Receipts = () => {
  const { recipes } = useSelector(selectRecipes);
  console.log(recipes);

  return (
    <div className="receipt-container">
      <h1>Receipts</h1>
      <div className="receipt-functions">
        <button className="function-button">Delete selected</button>
        <button className="add-button function-button">Add recipe</button>
        <button className="function-button">Columns</button>
      </div>
      <div className="receipt-body">
        <h2>Recipes</h2>
        <div className="current-list-button-container">
          <button
            className="current-list-button current-list-button-active"
            type="button"
          >
            Published
          </button>
          <button
            className="current-list-button"
            type="button"
          >
            Deleted at
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="checkbox">
                <input
                  type="checkbox"
                  className="input-checkbox"
                />
              </th>
              <th className="id">ID</th>
              <th className="title">Title</th>
              <th className="shop">Shop/Restaurant</th>
              <th className="image-container">Image</th>
              <th className="recipe-category">Recipe Category</th>
              <th className="discount">Discount</th>
              <th className="options">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="checkbox">
                <input
                  type="checkbox"
                  className="input-checkbox"
                />
              </td>
              <td className="id">1</td>
              <td className="title">Pizza</td>
              <td className="shop">
                <img
                  className="shop-image"
                  src="https://foodyman.s3.amazonaws.com/public/images/shops/logo/107-1676473671.jpeg"
                  alt="restorant/shop image"
                />
                Apexpizza
              </td>
              <td className="image-container">
                <img
                  src="https://foodyman.s3.amazonaws.com/public/images/categories/107-1676355594.webp"
                  alt="recipe image"
                />
              </td>
              <td className="recipe-category">Foodyman recipe</td>
              <td className="discount">10%</td>
              <td className="table-functions">
                <button className="table-function-button">
                  <EditIcon className="function-image" />
                </button>
                <button className="table-function-button">
                  <DeleteIcon className="function-image" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipts;
