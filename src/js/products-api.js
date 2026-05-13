// Функції для роботи з бекендом
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    limit: 12,
  },
});

export async function getCategories() {
  const response = await axiosInstance.get(`/category-list`);
  return response.data;
}

export async function getProducts(page) {
  const params = {
    skip: (page - 1) * 12,
  };
  const response = await axiosInstance.get('', { params });
  return response.data;
}

export async function getProductsByCategory(categoryName) {
  const response = await axiosInstance.get(`/category/${categoryName}`);
  return response.data;
}

export async function getProductByID(id) {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
}

export async function searchProducts(query, page) {
  const params = {
    q: query,
    skip: (page - 1) * 12,
  };
  debugger;
  const response = await axiosInstance.get(`/search`, { params });
  return response.data;
}
