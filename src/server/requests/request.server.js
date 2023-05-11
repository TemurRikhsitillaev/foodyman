const token = "14|uTEAoYjYUiHO9KEjA1lU0TOAFZB2z7z81VOeASx3";

const requestURLs = {
  serverURL: "https://demo-api.foodyman.org/api/v1/dashboard/admin/",
  recipesURL: "receipts?perPage=10&page=1",
  updateURL: "receipts/",
  showURL: { firstHalf: "receipts/", secondHalf: "?lang=ru" },
  deleteURL: "receipts/",
};

export const REQUEST_TYPES = {
  GET_PAGINATE: "GET_PAGINATE",
  GET_SHOW: "GET_SHOW",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

const requestToServer = async (url, fetchObject) => {
  try {
    const response = await fetch(url, {
      ...fetchObject,
    });

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const requestDataConstructor = async (type, id = null, body = {}) => {
  let url = "",
    fetchObject = {};

  switch (type) {
    case REQUEST_TYPES.GET_PAGINATE:
      url = `${requestURLs.serverURL}${requestURLs.recipesURL}`;

      fetchObject = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      return requestToServer(url, fetchObject);

    case REQUEST_TYPES.GET_SHOW:
      url = `${requestURLs.serverURL}${requestURLs.showURL.firstHalf}${id}${requestURLs.showURL.secondHalf}`;

      fetchObject = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      return requestToServer(url, fetchObject);

    //   case REQUEST_TYPES.UPDATE:
    //     const url = `${requestURLs.serverURL}${requestURLs.updateURL}${id}`;
    //   case REQUEST_TYPES.DELETE:
    //     return `${requestURLs.serverURL}${requestURLs.deleteURL}${id}`;
    //   case REQUEST_TYPES.GET_SHOW:
    //     return `${requestURLs.serverURL}${requestURLs.showURL.firstHalf}${id}${requestURLs.showURL.secondHalf}`;
    default:
      return;
  }
};
