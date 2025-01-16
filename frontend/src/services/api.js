import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080', // Backend base URL from environment variables
});

// Add auth token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Centralized error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API Endpoints
export const login = (data) => API.post('/api/customers/login', data);
export const createCustomer = (data) => API.post('/api/customers/createCustomer', data);
export const getAccounts = (customerId) => API.get(`/api/accounts/customer/${customerId}`);
export const transferFunds = (customerId, sourceAccountId, targetAccountId, data) =>
  API.post(`/api/transactions/${customerId}/transfer/${sourceAccountId}/${targetAccountId}`, data);
export const deposit = (customerId, accountId, data) =>
  API.post(`/api/transactions/${customerId}/deposit/${accountId}`, data);
export const withdraw = (customerId, accountId, data) =>
  API.post(`/api/transactions/${customerId}/withdraw/${accountId}`, data);
export const saveTransaction = (transaction) => API.post('/api/transactions', transaction);
export const getTransactions = () => API.get('/api/transactions');

export default API;
