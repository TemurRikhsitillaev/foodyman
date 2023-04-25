import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectRecipes } from "../../store/recipes/recipes.selector";
import { setFoods } from "../../store/recipes/recipes.actions";
import { updateResource } from "../../server/requests/put.request";

import "./update.styles.scss";

// https://foodyman.s3.amazonaws.com/public/images/shops/logo/101-1681881829.webp

const defaultFormFields = {
  name: "",
  shop_name: "Kids Plate",
  category_name: "Foodyman Recipe",
  description: "",
  calories: "",
  active_time: "",
  total_time: "",
  discount_type: "fix",
  discount_price: "",
  img: "",
  instruction: "",
  ingredients: "",

  stock_name: "tomato",
  stock_quantity: "",

  nutrition_name: "",
  nutrition_weight: "",
  nutrition_percentage: "",

  updated_at: "",
};

const Update = () => {
  const dispatch = useDispatch();
  const { foods } = useSelector(selectRecipes);

  const id = Number(useParams().id);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const [currentFormField, setCurrentFormField] = useState(1);

  const handleNextFormField = () => {
    setCurrentFormField(currentFormField + 1);
  };
  const handlePrevFormField = () => {
    setCurrentFormField(currentFormField - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = () => {
    const updated_at = new Date().toISOString().slice(0, 10);

    foods.data[id - 1].category.translation.title = formFields.category_name;
    foods.data[id - 1].category.updated_at = updated_at;
    foods.data[id - 1].updated_at = updated_at;
    foods.data[id - 1].category.img = formFields.img;
    foods.data[id - 1].active_time = formFields.active_time;
    foods.data[id - 1].total_time = formFields.total_time;
    foods.data[id - 1].calories = formFields.calories;
    foods.data[
      id - 1
    ].ingredients[0].title = `<p>${formFields.ingredients}</p>`;
    foods.data[id - 1].instruction.title = `<p>${formFields.instruction}</p>`;
    foods.data[id - 1].shop.translation.title = formFields.shop_name;
    foods.data[id - 1].nutritions[0].translation.title =
      formFields.nutrition_name;
    foods.data[id - 1].nutritions[0].translations.title =
      formFields.nutrition_name;
    foods.data[id - 1].nutritions[0].weight = formFields.nutrition_weight;
    foods.data[id - 1].nutritions[0].percentage =
      formFields.nutrition_percentage;
    foods.data[id - 1].discount_price = formFields.discount_price;
    foods.data[id - 1].discount_type = formFields.discount_type;
    foods.data[id - 1].translation.title = formFields.name;
    foods.data[id - 1].translations[0].title = formFields.name;
    foods.data[id - 1].translation.description = formFields.description;

    dispatch(setFoods(foods));

    console.log(foods);
    updateResource(id, foods.data[id - 1]);
  };

  return (
    <div className="update">
      <div className="header">
        <div className="current-container">
          <button
            type="button"
            onClick={() => setCurrentFormField(1)}
            className={
              currentFormField === 1
                ? "current-button current-button-active"
                : "current-button"
            }
          >
            1
          </button>
          <span>Recipe</span>
        </div>
        <div className="current-container">
          <button
            type="button"
            onClick={() => setCurrentFormField(2)}
            className={
              currentFormField === 2
                ? "current-button current-button-active"
                : "current-button"
            }
          >
            2
          </button>
          <span>Instructions</span>
        </div>
        <div className="current-container">
          <button
            type="button"
            onClick={() => setCurrentFormField(3)}
            className={
              currentFormField === 3
                ? "current-button current-button-active"
                : "current-button"
            }
          >
            3
          </button>
          <span>Ingredients</span>
        </div>
        <div className="current-container">
          <button
            type="button"
            onClick={() => setCurrentFormField(4)}
            className={
              currentFormField === 4
                ? "current-button current-button-active"
                : "current-button"
            }
          >
            4
          </button>
          <span>Stocks</span>
        </div>
        <div className="current-container">
          <button
            type="button"
            onClick={() => setCurrentFormField(5)}
            className={
              currentFormField === 5
                ? "current-button current-button-active"
                : "current-button"
            }
          >
            5
          </button>
          <span>Nutritions</span>
        </div>
      </div>
      <div className="edit-container">
        <form onSubmit={submitHandler}>
          <div
            className={currentFormField == 1 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Name</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="name"
                value={formFields.name}
              />
            </div>
            <div className="field-container">
              <label>Shop/Restaurant</label>
              <select
                name="shop_name"
                value={formFields.shop_name}
                onChange={handleChange}
              >
                <option value="Kids Plate">Kids Plate</option>
                <option value="Cakes">Cakes</option>
              </select>
            </div>
            <div className="field-container">
              <label>Category</label>
              <select
                name="category_name"
                value={formFields.category_name}
                onChange={handleChange}
              >
                <option
                  value="Foodyman Recipe"
                  name="category_name"
                >
                  Foodyman Recipe
                </option>
                <option
                  value="Italian Recipe"
                  name="category_name"
                >
                  Italian Recipe
                </option>
              </select>
            </div>
            <div className="field-container">
              <label>Description</label>
              <input
                type="text"
                required
                name="description"
                onChange={handleChange}
                value={formFields.description}
              />
            </div>
            <div className="field-container">
              <label>Calories</label>
              <input
                type="number"
                required
                onChange={handleChange}
                name="calories"
                value={formFields.calories}
              />
            </div>
            <div className="field-container">
              <label>Active time</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="active_time"
                value={formFields.active_time}
              />
            </div>
            <div className="field-container">
              <label>Total time</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="total_time"
                value={formFields.total_time}
              />
            </div>
            <div className="field-container">
              <label>Discount type</label>
              <select
                onChange={handleChange}
                name="discount_type"
                value={formFields.discount_type}
              >
                <option value="fix">fix</option>
                <option value="percent">percent</option>
              </select>
            </div>
            <div className="field-container">
              <label>Discount price</label>
              <input
                type="number"
                required
                onChange={handleChange}
                name="discount_price"
                value={formFields.discount_price}
              />
            </div>
            <div className="field-container">
              <label>Image</label>
              <input
                type="file"
                required
                onChange={handleChange}
                name="img"
                value={formFields.img}
              />
            </div>
          </div>
          <div
            className={currentFormField == 2 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Instructions</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="instruction"
                value={formFields.instruction}
              />
            </div>
          </div>

          <div
            className={currentFormField == 3 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Ingredients</label>
              <input
                type="text"
                onChange={handleChange}
                required
                name="ingredients"
                value={formFields.ingredients}
              />
            </div>
          </div>

          <div
            className={currentFormField == 4 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Stocks</label>
              <select
                name="stock_name"
                value={formFields.stock_name}
                onChange={handleChange}
              >
                <option
                  value="tomato"
                  name="tomato"
                >
                  tomato
                </option>
                <option
                  value="potato"
                  name="potato"
                >
                  potato
                </option>
              </select>
            </div>
            <div className="field-container">
              <label>Min quantity</label>
              <input
                type="number"
                onChange={handleChange}
                required
                name="stock_quantity"
                value={formFields.stock_quantity}
              />
            </div>
          </div>
          <div
            className={currentFormField == 5 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Name</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="nutrition_name"
                value={formFields.nutrition_name}
              />
            </div>
            <div className="field-container">
              <label>Weight</label>
              <input
                type="text"
                required
                onChange={handleChange}
                name="nutrition_weight"
                value={formFields.nutrition_weight}
              />
            </div>
            <div className="field-container">
              <label>Percentage</label>
              <input
                type="number"
                required
                onChange={handleChange}
                name="nutrition_percentage"
                value={formFields.nutrition_percentage}
              />
            </div>
          </div>

          <button
            className={currentFormField > 1 ? "button prev" : "displayNone"}
            type="button"
            onClick={handlePrevFormField}
          >
            Prev
          </button>
          <button
            className={currentFormField < 5 ? "button next" : "displayNone"}
            type="button"
            onClick={handleNextFormField}
          >
            Next
          </button>
          <button
            className={currentFormField === 5 ? "button submit" : "displayNone"}
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={submitHandler}
          >
            submit test
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
