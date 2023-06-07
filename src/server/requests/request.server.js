const token = "14|uTEAoYjYUiHO9KEjA1lU0TOAFZB2z7z81VOeASx3";

const requestURLs = {
  serverURL: "https://demo-api.foodyman.org/api/v1/dashboard/admin/",
  recipesURL: "receipts?perPage=10&page=1",
  updateURL: "receipts/",
  showURL: { firstHalf: "receipts/", secondHalf: "?lang=ru" },
  deleteURL: "receipts/delete?ids[0]=",
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

export const requestGetPaginate = () => {
  const url = new URL(
    requestURLs.serverURL + requestURLs.recipesURL
  ).toString();

  const fetchObject = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return requestToServer(url, fetchObject);
};

export const requestGetShow = (id) => {
  const url = new URL(
    requestURLs.serverURL +
      requestURLs.showURL.firstHalf +
      id +
      requestURLs.showURL.secondHalf
  ).toString();

  const fetchObject = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return requestToServer(url, fetchObject);
};

export const requestUpdate = (id, body) => {
  const url = new URL(
    requestURLs.serverURL + requestURLs.updateURL + id
  ).toString();

  const fetchObject = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return requestToServer(url, fetchObject);
};

export const requestDelete = (id) => {
  const url = new URL(
    requestURLs.serverURL + requestURLs.deleteURL + id
  ).toString();

  const fetchObject = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return requestToServer(url, fetchObject);
};
