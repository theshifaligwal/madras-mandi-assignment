// Set Order data to local storage
const setOrderData = (data) => {
  // If previous data exist
  const prevData = this.getOrderData();
  if (!!prevData) {
    data.forEach((element) => {
      prevData.push(element);
    });
    localStorage.setItem("order", JSON.stringify(prevData));
    return prevData;
  }
  // To store Order data in local storage
  localStorage.setItem("order", JSON.stringify(data));
  return data;
};

// Get Order data from local storage
const getOrderData = () => {
  // get Order data from local storage
  const data = localStorage.getItem("order");
  return JSON.parse(data);
};

// Remove Order data from local storage
const removeOrderData = () => {
  // remove Order data from local storage
  const data = localStorage.removeItem("order");
  return data ? JSON.parse(data) : null;
};

export { getOrderData, removeOrderData, setOrderData };
