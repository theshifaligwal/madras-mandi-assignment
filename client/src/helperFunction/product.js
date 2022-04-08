const { API_URL } = require("../api");

const getAllProductsFromAPI = async () => {
  //   try {
  const url = `${API_URL}/api/products?populate=*`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // Hitting login API
  return await fetch(url, options).then((res) => res.json());
};

const getProductByIdFromAPI = async (productId) => {
  const url = `${API_URL}/api/products/${productId}?populate=*`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // Hitting login API
  const response = await fetch(url, options);
  // Fulfilling the Promise
  const res = await response.json();

  if (res.data !== null) {
    return res.data;
  }
};

export {getAllProductsFromAPI,getProductByIdFromAPI}