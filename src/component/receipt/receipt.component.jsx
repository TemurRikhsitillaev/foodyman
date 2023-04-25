import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectRecipes } from "../../store/recipes/recipes.selector";
import { deleteRequest } from "../../server/requests/delete.request";
import Update from "../update/update.component";

// // //
import "./receipt.styles.css";
import deleteIconPath from "../../assets/delete-icon.svg";
import editIconPath from "../../assets/edit-icon.svg";
import { setRecipes } from "../../store/recipes/recipes.actions";

const Receipts = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector(selectRecipes);
  const [selectAll, setSelectAll] = useState(false);

  const handleDelete = (event) => {
    const id = Number(event.target.id);

    deleteRequest(id);
  };

  const handleSelectCheckbox = (event) => {
    const id = Number(event.target.id);
    const selected = event.target.checked;

    dispatch(
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === id) {
            recipe.selected = selected;
          }
          return recipe;
        })
      )
    );

    if (recipes.every((recipe) => recipe.selected == true)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const handleSelectAllCheckbox = (event) => {
    const selected = event.target.checked;
    setSelectAll(!selectAll);

    dispatch(
      setRecipes(
        recipes.map((recipe) => {
          recipe.selected = selected;

          return recipe;
        })
      )
    );
  };

  const handleDeleteSelected = () => {
    recipes.map((recipe) => {
      if (recipe.selected) {
        deleteRequest(recipe.id);
        console.log("deleted", recipe.id);
      }
    });
  };

  return (
    <div className="receipt-container">
      <h1>Receipts</h1>
      <div className="receipt-functions">
        <button
          className="function-button"
          onClick={handleDeleteSelected}
        >
          Delete selected
        </button>
        <button className="add-button function-button">Add recipe</button>
      </div>
      <div className="receipt-body">
        <h2>Recipes</h2>
        {/* <div className="current-list-button-container">
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
        </div> */}
        <table>
          <thead>
            <tr>
              <th className="checkbox">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  onChange={handleSelectAllCheckbox}
                  checked={selectAll}
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
            {recipes.map((data, key) => {
              const {
                id,
                order,
                title,
                productImage,
                discountPrice,
                shopImage,
                shopTitle,
                selected,
              } = data;

              return (
                <tr key={key}>
                  <td className="checkbox">
                    <input
                      type="checkbox"
                      className="input-checkbox"
                      onChange={handleSelectCheckbox}
                      id={id}
                      checked={selected}
                    />
                  </td>
                  <td className="id">{order + 1}</td>
                  <td className="title">{title}</td>
                  <td className="shop">
                    <img
                      className="shop-image"
                      src={shopImage}
                      alt="restorant/shop image"
                    />
                    {shopTitle}
                  </td>
                  <td className="image-container">
                    <img
                      src={productImage}
                      alt="recipe image"
                    />
                  </td>
                  <td className="recipe-category">Foodyman recipe</td>
                  <td className="discount">{discountPrice}%</td>
                  <td className="table-functions">
                    <Link
                      to={`/update/${id}`}
                      className="table-function-button edit"
                      state={{ id: id }}
                    >
                      <img
                        src={editIconPath}
                        className="function-image"
                        id={id}
                      />
                    </Link>
                    <button
                      className="table-function-button delete"
                      onClick={handleDelete}
                      id={id}
                    >
                      <img
                        src={deleteIconPath}
                        className="function-image"
                        id={id}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipts;
