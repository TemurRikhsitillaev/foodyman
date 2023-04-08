import React from "react";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipes/recipes.selector";
import { deleteRequest } from "../../server/requests";
import "./receipt.styles.css";
import { ReactComponent as EditIcon } from "../../assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";
import deleteIconPath from "../../assets/delete-icon.svg";
import editIconPath from "../../assets/edit-icon.svg";

const handleDelete = (event) => {
  console.log("delete: ", event.target.id);
  const id = Number(event.target.id);
  deleteRequest(id);
  // const url = `https://demo-api.foodyman.org/api/v1/dashboard/admin/receipts/delete?ids[0]=${id}`;
  // fetch(url, {
  //   headers: {
  //     Authorization: "Bearer 205|nfZW3C1IuS9d6LH7XRkMcmM7RAhK5VF1k0KPOJMT",
  //   },
  //   method: "DELETE",
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error("Could not delete the recipe, smth went wrong");
  //     }

  //     console.log("Assume that recipe is deleted :)");
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
};

const Receipts = () => {
  const { recipes } = useSelector(selectRecipes);
  const dataArray = [];
  recipes.map((recipe, index) => {
    const {
      id,
      img: productImage,
      discount_price: discountPrice,
      shop,
      category,
    } = recipe; // img is image of product
    const { keywords: title } = category;
    const { logo_img: shopImage, translation } = shop; // shop image and in the translation object we have title
    const { title: shopTitle } = translation; // shop title
    dataArray.push({
      id,
      index,
      title,
      productImage,
      discountPrice,
      shopImage,
      shopTitle,
    });
  });
  dataArray.reverse();
  console.log(dataArray);

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
            {dataArray.map((data) => {
              const {
                id,
                index,
                title,
                productImage,
                discountPrice,
                shopImage,
                shopTitle,
              } = data;

              return (
                <tr key={id}>
                  <td className="checkbox">
                    <input
                      type="checkbox"
                      className="input-checkbox"
                    />
                  </td>
                  <td className="id">{index + 1}</td>
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
                    <button
                      className="table-function-button edit"
                      id={id}
                    >
                      <img
                        src={editIconPath}
                        className="function-image"
                        id={id}
                      />
                      {/* <EditIcon className="function-image" /> */}
                    </button>
                    <button
                      className="table-function-button delete"
                      onClick={handleDelete}
                      id={id}
                    >
                      {/* <DeleteIcon className="function-image" /> */}
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
