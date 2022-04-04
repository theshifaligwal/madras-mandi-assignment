const { API_URL } = require("../api");

// Set user data to local storage
exports.setUserData = (data) => {
  // To store user data in local storage
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

// Get user data from local storage
exports.getUserData = () => {
  // get user data from local storage
  const data = localStorage.getItem("user");
  return JSON.parse(data);
};

// Remove user data from local storage
exports.removeUserData = () => {
  // remove user data from local storage
  const data = localStorage.removeItem("user");
  return data ? JSON.parse(data) : null;
};

exports.login = async (data) => {
  const body = {
    identifier: data.email,
    password: data.password,
  };
  console.log(body);
  const url = `${API_URL}/api/auth/local`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  const res = await response.json();
  console.log(res);
  this.setUserData(res);
};