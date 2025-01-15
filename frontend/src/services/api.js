import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // Backend base URL
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
    alert(error.response?.data?.message || 'An error occurred. Please try again.');
    return Promise.reject(error);
  }
);

// API Endpoints
export const login = (data) => API.post('/api/auth/login', data);
export const createAccount = (data) => API.post('/api/users/register', data);
export const getAccounts = () => API.get('/api/accounts');
export const transferFunds = (data) => API.post('/api/transactions/transfer', data);
export const deposit = (data) => API.post('/api/transactions/deposit', data);
export const withdraw = (data) => API.post('/api/transactions/withdraw', data);

export default API;
