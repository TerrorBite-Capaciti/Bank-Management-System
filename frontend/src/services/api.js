import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API functions

export const login = (data) => {
  console.log(data)
  return API.post('/api/customers/login', data);
};

export const createCustomer = (data) => API.post('/api/customers/createCustomer', data);
export const getTransactions = () => API.get('/api/transactions');
export const saveTransaction = (transaction) => API.post('/api/transactions', transaction);

export default API;
