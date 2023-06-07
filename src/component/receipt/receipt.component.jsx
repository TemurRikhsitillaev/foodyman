import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectRecipes } from "../../store/recipes/recipes.selector";
import { InputCheckbox } from "../form-input/form-input.component";
import {
  ButtonDeleteVerifyNo,
  ButtonDeleteVerifyYes,
  ButtonProductDelete,
  ButtonSelectedProductDelete,
} from "../button/button.component";

import { requestDelete } from "../../server/requests/request.server";

// // // STYLES // // //

import "./receipt.styles.scss";

import editIconPath from "../../assets/edit-icon.svg";
import { setRecipes } from "../../store/recipes/recipes.actions";

const Receipts = () => {
  const dispatch = useDispatch();

  const { recipes } = useSelector(selectRecipes);

  const [selectAll, setSelectAll] = useState(false);
  const [isVerifyDeleteOpen, setVerifyDeleteOpen] = useState(false);

  // // // ACTION HANDLERS // // //

  const handleDelete = (event) => {
    const id = Number(event.target.id);

    requestDelete(id);
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

    if (recipes.every((recipe) => recipe.selected === true)) {
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
        requestDelete(recipe.id);
      }
    });
  };

  const handleVerifyDelete = () => {
    if (recipes.every((recipe) => recipe.selected === false)) return;
    setVerifyDeleteOpen(!isVerifyDeleteOpen);
  };

  return (
    <Fragment>
      {isVerifyDeleteOpen && (
        <div className="verify-delete-wrapper" onClick={handleVerifyDelete}>
          <div className="verify-delete" onClick={(e) => e.stopPropagation()}>
            <p className="verify-text">
              Are you sure you want to delete this recipe?
            </p>
            <div>
              <ButtonDeleteVerifyYes
                type="button"
                onClick={handleDeleteSelected}
              >
                Yes
              </ButtonDeleteVerifyYes>
              <ButtonDeleteVerifyNo type="button" onClick={handleVerifyDelete}>
                No
              </ButtonDeleteVerifyNo>
            </div>
          </div>
        </div>
      )}
      <div className="receipt-container">
        <h1>Receipts</h1>
        <div className="receipt-functions">
          <ButtonSelectedProductDelete
            className="function-button"
            onClick={handleVerifyDelete}
            disabled={recipes.every((recipe) => recipe.selected === false)}
          >
            Delete selected
          </ButtonSelectedProductDelete>
        </div>
        <div className="receipt-body">
          <h2>Recipes</h2>

          <table>
            <thead>
              <tr>
                <th className="checkbox">
                  <InputCheckbox
                    type="checkbox"
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
                  discountType,
                  categoryTitle,
                  shopImage,
                  shopTitle,
                  selected,
                } = data;

                const discountSign = discountType === "fix" ? "$" : "%";

                return (
                  <tr key={key}>
                    <td className="checkbox">
                      <InputCheckbox
                        type="checkbox"
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
                      <img src={productImage} alt="recipe image" />
                    </td>
                    <td className="recipe-category">{categoryTitle}</td>
                    <td className="discount">
                      {discountPrice} {discountSign}
                    </td>
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
                      <ButtonProductDelete onClick={handleDelete} id={id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Receipts;
