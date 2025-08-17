import axios from "axios";

// API 
const API_BASE_URL = "https://fakestoreapi.com";

// ================== Products ==================
export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}/products`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(`${API_BASE_URL}/products/categories`);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await axios.get(`${API_BASE_URL}/products/category/${category}`);
  return res.data;
};

// ================== Cart ==================
export const getUserCart = async (userId) => {
  const res = await axios.get(`${API_BASE_URL}/carts/user/${userId}`);
  return res.data;
};

export const addToCart = async (cartData) => {
  const res = await axios.post(`${API_BASE_URL}/carts`, cartData);
  return res.data;
};

// ================== Auth / Users ==================
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/users`, userData);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(`${API_BASE_URL}/users`);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/users/${id}`);
  return res.data;
};
