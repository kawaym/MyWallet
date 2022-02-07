import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}
function signUp(body) {
  const promise = axios.post(`${BASE_URL}/cadastro`, body);

  return promise;
}

function getTransactions(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/historico`, config);

  return promise;
}

function createTransaction(token, value, name, description, type) {
  const config = createConfig(token);

  const promise = axios.post(
    `${BASE_URL}/historico`,
    { value, name, description, type },
    config
  );

  return promise;
}

const api = { login, signUp, getTransactions, createTransaction  };

export default api;
