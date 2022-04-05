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

// get token from local storage
exports.getToken = () => {
  // get user data from local storage
  let data = localStorage.getItem("user");
  data = JSON.parse(data);
  const token = `Bearer ${data.jwt}`;
  return token;
};

exports.login = async (data) => {
  const body = {
    identifier: data.email,
    password: data.password,
  };
  const url = `${API_URL}/api/auth/local`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  // Hitting login API
  const response = await fetch(url, options);
  // Fulfilling the Promise
  const res = await response.json();

  // Setting the local storage if logged in successfully
  if (res.data !== null) {
    this.setUserData(res);
  }
};

exports.register = async (data) => {
  const body = {
    username: data.username,
    name: data.name,
    email: data.email,
    password: data.password,
  };
  console.log(body);
  const url = `${API_URL}/api/auth/local/register`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  // Hitting Sign Up API
  const response = await fetch(url, options);
  const res = await response.json();

  // Setting the local storage if logged in successfully
  if (res.data !== null) {
    this.setUserData(res);
  }
};
