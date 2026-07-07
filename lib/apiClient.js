import api from '../lib/api';

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
};

// Grievance API
export const grievanceAPI = {
  submit: (data) => api.post('/grievances', data),
  getAll: () => api.get('/grievances'),
  getById: (id) => api.get(`/grievances/${id}`),
  track: (id) => api.get(`/grievances/${id}/status`),
};

// Payment API
export const paymentAPI = {
  propertyTax: (data) => api.post('/payments/property-tax', data),
  waterBill: (data) => api.post('/payments/water-bill', data),
  getHistory: () => api.get('/payments/history'),
};

// Tenders API
export const tendersAPI = {
  getAll: () => api.get('/tenders'),
  getById: (id) => api.get(`/tenders/${id}`),
  bid: (tenderId, bidData) => api.post(`/tenders/${tenderId}/bid`, bidData),
};

// News API
export const newsAPI = {
  getAll: () => api.get('/news'),
  getById: (id) => api.get(`/news/${id}`),
};

// Auth API
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  verify: () => api.get('/auth/verify'),
};
