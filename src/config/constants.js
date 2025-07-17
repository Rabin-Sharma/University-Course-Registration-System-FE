// API Configuration
export const API_CONFIG = {
  BASE_URL: "http://localhost:8000",
  API_BASE_URL: "http://localhost:8000/api",
  STORAGE_URL: "http://localhost:8000/storage"
};

// Helper functions for URL construction
export const getApiUrl = (endpoint) => `${API_CONFIG.API_BASE_URL}/${endpoint}`;
export const getStorageUrl = (path) => `${API_CONFIG.STORAGE_URL}/${path}`;
