import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./update.styles.scss";

const Update = () => {
  const location = useLocation();

  const [currentFormField, setCurrentFormField] = useState(1);

  const handleNextFormField = () => {
    setCurrentFormField(currentFormField + 1);
  };
  const handlePrevFormField = () => {
    setCurrentFormField(currentFormField - 1);
  };

  const id = location.state.id;
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
        <form>
          <div
            className={currentFormField == 1 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Name</label>
              <input
                type="text"
                required
                name="name"
              />
            </div>
            <div className="field-container">
              <label>Shop/Restaurant</label>
              <select name="shop/restaurant">
                <option value="kidsPlate">Kids Plate</option>
                <option value="cakes">Cakes</option>
              </select>
            </div>
            <div className="field-container">
              <label>Category</label>
              <select name="category">
                <option value="foodymanRecipe">Foodyman Recipe</option>
              </select>
            </div>
            <div className="field-container">
              <label>Description</label>
              <input
                type="text"
                required
                name="description"
              />
            </div>
            <div className="field-container">
              <label>Calories</label>
              <input
                type="number"
                required
                name="calories"
              />
            </div>
            <div className="field-container">
              <label>Active time</label>
              <input
                type="text"
                required
                name="activeTime"
              />
            </div>
            <div className="field-container">
              <label>Total time</label>
              <input
                type="text"
                required
                name="totalTime"
              />
            </div>
            <div className="field-container">
              <label>Discount type</label>
              <select name="discountType">
                <option value="fix">fix</option>
                <option value="percent">percent</option>
              </select>
            </div>
            <div className="field-container">
              <label>Discount price</label>
              <input
                type="number"
                required
                name="discountPrice"
              />
            </div>
            <div className="field-container">
              <label>Image</label>
              <input
                type="file"
                required
                name="image"
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
                name="instructions"
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
                required
                name="ingredients"
              />
            </div>
          </div>

          <div
            className={currentFormField == 4 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <label>Stocks</label>
              <select name="stocks">
                <option value="tomato">tomato</option>
                <option value="tomato">tomato</option>
              </select>
            </div>
            <div className="field-container">
              <label>Min quantity</label>
              <input
                type="number"
                required
                name="minQuantity"
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
                name="nutritionsName"
              />
            </div>
            <div className="field-container">
              <label>Weight</label>
              <input
                type="text"
                required
                name="nutritionsWeight"
              />
            </div>
            <div className="field-container">
              <label>Percentage</label>
              <input
                type="text"
                required
                name="nutritionsPercentage"
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
        </form>
      </div>
    </div>
  );
};

export default Update;
