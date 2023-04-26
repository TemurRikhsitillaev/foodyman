export const updateResource = async (resourceId, updatedData) => {
  // console.log("updateResource: ", resourceId, JSON.stringify(updatedData));
  fetch(
    `https://demo-api.foodyman.org/api/v1/dashboard/admin/receipts/${resourceId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer 14|uTEAoYjYUiHO9KEjA1lU0TOAFZB2z7z81VOeASx3`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
};
