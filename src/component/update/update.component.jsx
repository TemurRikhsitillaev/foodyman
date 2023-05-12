import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultFormFields } from "../../utils/default-values/update-values.default-values";
import { REQUEST_TYPES } from "../../server/requests/request.server";
import { requestDataConstructor } from "../../server/requests/request.server";
import FormInput from "../form-input/form-input.component";

import "./update.styles.scss";

const Update = () => {
  const id = Number(useParams().id);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const [show, setShow] = useState([]);

  const [currentFormField, setCurrentFormField] = useState(1);

  const [stockList, setStockList] = useState([
    { stock_name: "", stock_quantity: "" },
  ]);

  const [nutritionList, setNutritionList] = useState([
    { nutrition_name: "", nutrition_weight: "", nutrition_percentage: "" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await requestDataConstructor(REQUEST_TYPES.GET_SHOW, id);
      setShow(jsonData);
    };

    fetchData();
  }, [id]);

  const handleNextFormField = () => {
    setCurrentFormField(currentFormField + 1);
  };
  const handlePrevFormField = () => {
    setCurrentFormField(currentFormField - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleChangeStock = (event, index) => {
    const { name, value } = event.target;
    const list = [...stockList];
    list[index][name] = value;
    setStockList(list);
    console.log(stockList);
  };

  const handleStockAdd = () => {
    setStockList([...stockList, { stock_name: "", stock_quantity: "" }]);
  };

  const handleStockRemove = (index) => {
    const list = [...stockList];
    list.splice(index, 1);
    setStockList(list);
  };

  const handleNutritionAdd = () => {
    setNutritionList([
      ...nutritionList,
      { nutrition_name: "", nutrition_weight: "", nutrition_percentage: "" },
    ]);
  };

  const handleNutritionRemove = (index) => {
    const list = [...nutritionList];
    list.splice(index, 1);
    setNutritionList(list);
  };

  const handleChangeNurition = (event, index) => {
    const { name, value } = event.target;
    const list = [...nutritionList];
    list[index][name] = value;
    setNutritionList(list);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const stock_id = show.data.stocks[0].id;
    const { category_id, servings, shop_id } = show.data;

    const stock = stockList.map((item, index) => {
      const stockID = index === 0 ? stock_id : stock_id + index;

      return {
        stock_id: stockID,
        min_quantity: item.stock_quantity,
      };
    });

    const nutritions = nutritionList.map((item) => {
      return {
        weight: item.nutrition_weight,
        percentage: item.nutrition_percentage,
        ru: item.nutrition_name,
        en: item.nutrition_name,
      };
    });

    const updatedData = {
      shop_id: shop_id,
      category_id: category_id,
      active_time: formFields.active_time,
      total_time: formFields.total_time,
      calories: formFields.calories,
      servings: servings,
      discount_type: formFields.discount_type,
      discount_price: formFields.discount_price,
      stocks: [...stock],
      title: {
        ru: formFields.name,
        en: formFields.name,
      },
      description: {
        ru: formFields.description,
        en: formFields.description,
      },
      ingredient: {
        ru: formFields.ingredients,
        en: formFields.ingredients,
      },
      instruction: {
        ru: formFields.instruction,
        en: formFields.instruction,
      },
      nutrition: [...nutritions],
    };

    requestDataConstructor(REQUEST_TYPES.UPDATE, id, updatedData);
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
            className={currentFormField === 1 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <FormInput
                label="Name"
                type="text"
                required
                onChange={handleChange}
                name="name"
                value={formFields.name}
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="field-container">
              <FormInput
                myType="select"
                label="Shop/Restaurant"
                options={[
                  {
                    id: 1,
                    value: "Kids Plate",
                  },
                  {
                    id: 2,
                    value: "Cakes",
                  },
                ]}
                name="shop_name"
                value={formFields.shop_name}
                onChange={handleChange}
              />
            </div>
            <div className="field-container">
              <FormInput
                myType="select"
                label="Category"
                options={[
                  {
                    id: 1,
                    value: "Foodyman Recipe",
                  },
                  {
                    id: 2,
                    value: "Italian Recipe",
                  },
                ]}
                name="category_name"
                value={formFields.category_name}
                onChange={handleChange}
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Description"
                type="text"
                required
                name="description"
                onChange={handleChange}
                value={formFields.description}
                placeholder="Description"
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Calories"
                type="number"
                required
                onChange={handleChange}
                name="calories"
                value={formFields.calories}
                placeholder="Calories"
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Active time"
                type="text"
                required
                onChange={handleChange}
                name="active_time"
                value={formFields.active_time}
                placeholder="Active time"
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Total time"
                type="text"
                required
                onChange={handleChange}
                name="total_time"
                value={formFields.total_time}
                placeholder="Total time"
              />
            </div>
            <div className="field-container">
              <FormInput
                myType="select"
                label="Discount type"
                options={[
                  {
                    id: 1,
                    value: "fix",
                  },
                  {
                    id: 2,
                    value: "percent",
                  },
                ]}
                onChange={handleChange}
                name="discount_type"
                value={formFields.discount_type}
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Discount price"
                type="number"
                required
                onChange={handleChange}
                name="discount_price"
                value={formFields.discount_price}
                placeholder="Discount price"
              />
            </div>
            <div className="field-container">
              <FormInput
                label="Image"
                type="file"
                required
                onChange={handleChange}
                name="img"
                value={formFields.img}
              />
            </div>
          </div>
          <div
            className={currentFormField === 2 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <FormInput
                label="Instructions"
                type="text"
                required
                onChange={handleChange}
                name="instruction"
                value={formFields.instruction}
                placeholder="Instructions"
              />
            </div>
          </div>

          <div
            className={currentFormField === 3 ? "current-form" : "displayNone"}
          >
            <div className="field-container">
              <FormInput
                label="Ingredients"
                type="text"
                onChange={handleChange}
                required
                name="ingredients"
                value={formFields.ingredients}
                placeholder="Ingredients"
              />
            </div>
          </div>

          <div
            className={currentFormField === 4 ? "current-form" : "displayNone"}
          >
            {stockList.map((service, index) => {
              return (
                <div
                  className="stocks"
                  key={index}
                >
                  <div className="field-container">
                    <FormInput
                      myType="select"
                      label="Stocks"
                      options={[
                        {
                          id: 0,
                          value: "",
                          hidden: true,
                          disabled: true,
                        },
                        {
                          id: 1,
                          value: "tomato",
                        },
                        {
                          id: 2,
                          value: "potato",
                        },
                      ]}
                      name="stock_name"
                      value={service.stock_name}
                      onChange={(event) => handleChangeStock(event, index)}
                    />
                  </div>
                  <div className="field-container">
                    <FormInput
                      label="Min quantity"
                      type="number"
                      onChange={(event) => handleChangeStock(event, index)}
                      required
                      name="stock_quantity"
                      value={service.stock_quantity}
                      placeholder="Min quantity"
                    />
                  </div>
                  {stockList.length !== 1 && (
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleStockRemove(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              className="add-button"
              onClick={handleStockAdd}
            >
              Add Stocks
            </button>
          </div>
          <div
            className={currentFormField === 5 ? "current-form" : "displayNone"}
          >
            {nutritionList.map((service, index) => {
              return (
                <div
                  className="nutritions"
                  key={index}
                >
                  <div className="field-container">
                    <FormInput
                      label="Name"
                      type="text"
                      required
                      onChange={(event) => handleChangeNurition(event, index)}
                      name="nutrition_name"
                      value={service.nutrition_name}
                      placeholder="Name"
                    />
                  </div>
                  <div className="field-container">
                    <FormInput
                      label="Weight"
                      type="text"
                      required
                      onChange={(event) => handleChangeNurition(event, index)}
                      name="nutrition_weight"
                      value={service.nutrition_weight}
                      placeholder="Weight"
                    />
                  </div>
                  <div className="field-container">
                    <FormInput
                      label="Percentage"
                      type="number"
                      required
                      onChange={(event) => handleChangeNurition(event, index)}
                      name="nutrition_percentage"
                      value={service.nutrition_percentage}
                      placeholder="Percentage"
                    />
                  </div>
                  {nutritionList.length !== 1 && (
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleNutritionRemove(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              className="add-button"
              onClick={handleNutritionAdd}
            >
              Add Nutrition
            </button>
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
