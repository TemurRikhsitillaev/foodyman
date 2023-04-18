import React from "react";
import { useLocation } from "react-router-dom";

import "./update.styles.scss";

const Update = () => {
  const location = useLocation();
  const id = location.state.id;
  return (
    <div className="update">
      <div className="header">
        <div className="current-container">
          <button className="current-button current-button-active">1</button>
          <span>Recipe</span>
        </div>
        <div className="current-container">
          <button className="current-button">2</button>
          <span>Instructions</span>
        </div>
        <div className="current-container">
          <button className="current-button">3</button>
          <span>Ingredients</span>
        </div>
        <div className="current-container">
          <button className="current-button">4</button>
          <span>Stocks</span>
        </div>
        <div className="current-container">
          <button className="current-button">5</button>
          <span>Nutritions</span>
        </div>
      </div>
      <div className="edit-container">
        <form>
          <div className="current-form">
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
          <div className="current-form">
            <div className="field-container">
              <label>Instructions</label>
              <input
                type="text"
                required
                name="instructions"
              />
            </div>
          </div>

          <div className="current-form">
            <div className="field-container">
              <label>Ingredients</label>
              <input
                type="text"
                required
                name="ingredients"
              />
            </div>
          </div>

          <div className="current-form">
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
          <div className="current-form">
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                required
                name="nutritionsName"
              />
            </div>
            <div className="form-field">
              <label>Weight</label>
              <input
                type="text"
                required
                name="nutritionsWeight"
              />
            </div>
            <div className="form-field">
              <label>Percentage</label>
              <input
                type="text"
                required
                name="nutritionsPercentage"
              />
            </div>
          </div>

          <button className="button prev">Prev</button>
          <button className="button next">Next</button>
          <button className="button submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
