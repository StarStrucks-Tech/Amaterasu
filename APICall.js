import axios from 'axios';
import config from './config';

// Fetch API URLs from config
const {BASE_PUBLIC_API, BASE_PRIVATE_API} = config;

// Define constants for authorization headers and error messages
const AUTHORIZATION_HEADER = 'Authorization';
const BEARER_TOKEN_TYPE = 'Bearer';
const UNAUTHORIZED_ERROR_MESSAGE =
  'Invalid or expired token. Please re-authenticate.';
const FORBIDDEN_ERROR_MESSAGE =
  'Invalid API token. Please check your API token and try again.';

// Create an instance of axios with default headers pointing to the private API base URL
const instance = axios.create({
  // Set the base URL for private API requests
  baseURL: BASE_PRIVATE_API,
});

/**
 * Make a GET request to a public API endpoint
 * @param {string} endpoint - The API endpoint to call
 * @returns {Promise<any>} - The response data from the API
 */
export const getPublicAPI = async endpoint => {
  try {
    // Make a GET request to the public API endpoint and return the response data
    const response = await axios.get(`${BASE_PUBLIC_API}/${endpoint}`);
    return response.data;
  } catch (error) {
    //Handle errors
    //Log any errors encountered during the request
    console.error(error);
  }
};

/**
 * Make a GET request to a private API endpoint with OAuth token
 * @param {string} endpoint - The API endpoint to call
 * @param {string} oauthToken - The OAuth token to use for authentication
 * @returns {Promise<any>} - The response data from the API
 */
export const getPrivateAPI = async (endpoint, oauthToken) => {
  try {
    // set Authorization header with OAuth token
    instance.defaults.headers.common[
      AUTHORIZATION_HEADER
    ] = `${BEARER_TOKEN_TYPE} ${oauthToken}`;
    //send GET request to the private API and return the response data
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    //Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (invalid or expired token)
      alert(UNAUTHORIZED_ERROR_MESSAGE);
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error (invalid API token)
      alert(FORBIDDEN_ERROR_MESSAGE);
    } else {
      //Log any other errors that occur
      console.error(error);
    }
  }
};

/**
 * Make a POST request to a public API endpoint
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const postPublicAPI = async (endpoint, data) => {
  try {
    // send POST request to the public API with provided data and return the response data
    const response = await axios.post(`${BASE_PUBLIC_API}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    //Handle errors
    //Log any errors encountered during the request
    console.error(error);
  }
};

/**
 * Make a POST request to a private API endpoint with OAuth token
 * @param {string} endpoint - The API endpoint to call
 * @param {string} oauthToken - The OAuth token to use for authentication
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const postPrivateAPI = async (endpoint, oauthToken, data) => {
  try {
    // set Authorization header with OAuth token
    instance.defaults.headers.common[
      AUTHORIZATION_HEADER
    ] = `${BEARER_TOKEN_TYPE} ${oauthToken}`;
    //send POST request to the private API and return the response data
    const response = await instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    //Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (invalid or expired token)
      alert(UNAUTHORIZED_ERROR_MESSAGE);
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error (invalid API token)
      alert(FORBIDDEN_ERROR_MESSAGE);
    } else {
      //Log any other errors that occur
      console.error(error);
    }
  }
};

/**
 * Make a PUT request to a public API endpoint
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const putPublicAPI = async (endpoint, data) => {
  try {
    // Make a PUT request to the public API endpoint and return the response data
    const response = await axios.put(`${BASE_PUBLIC_API}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    //Handle errors
    //Log any errors encountered during the request
    console.error(error);
  }
};

/**
 * Make a PUT request to a private API endpoint with OAuth token
 * @param {string} endpoint - The API endpoint to call
 * @param {string} oauthToken - The OAuth token to use for authentication
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const putPrivateAPI = async (endpoint, oauthToken, data) => {
  try {
    // set Authorization header with OAuth token
    instance.defaults.headers.common[
      AUTHORIZATION_HEADER
    ] = `${BEARER_TOKEN_TYPE} ${oauthToken}`;
    // Make a PUT request to the private API endpoint and return the response data
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    //Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (invalid or expired token)
      alert(UNAUTHORIZED_ERROR_MESSAGE);
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error (invalid API token)
      alert(FORBIDDEN_ERROR_MESSAGE);
    } else {
      //Log any other errors that occur
      console.error(error);
    }
  }
};

/**
 * Make a PATCH request to a public API endpoint
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const patchPublicAPI = async (endpoint, data) => {
  try {
    // Make a PATCH request to the public API endpoint and returns the response data
    const response = await axios.patch(`${BASE_PUBLIC_API}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    //Handle errors
    //Log any errors encountered during the request
    console.error(error);
  }
};

/**
 * Make a PATCH request to a private API endpoint with OAuth token
 * @param {string} endpoint - The API endpoint to call
 * @param {string} oauthToken - The OAuth token to use for authentication
 * @param {object} data - The data to send in the request body
 * @returns {Promise<any>} - The response data from the API
 */
export const patchPrivateAPI = async (endpoint, oauthToken, data) => {
  try {
    // set Authorization header with OAuth token
    instance.defaults.headers.common[
      AUTHORIZATION_HEADER
    ] = `${BEARER_TOKEN_TYPE} ${oauthToken}`;
    // Make a PATCH request to the private API endpoint and return the response data
    const response = await instance.patch(endpoint, data);
    return response.data;
  } catch (error) {
    //Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (invalid or expired token)
      alert(UNAUTHORIZED_ERROR_MESSAGE);
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error (invalid API token)
      alert(FORBIDDEN_ERROR_MESSAGE);
    } else {
      //Log any other errors that occur
      console.error(error);
    }
  }
};

/**
 * Make a DELETE request to a public API endpoint
 * @param {string} endpoint - The API endpoint to call
 * @returns {Promise<any>} - The response data from the API
 */
export const deletePublicAPI = async endpoint => {
  try {
    // Make a DELETE request to the public API endpoint and return the response data
    const response = await axios.delete(`${BASE_PUBLIC_API}/${endpoint}`);
    return response.data;
  } catch (error) {
    //Handle errors
    //Log any errors encountered during the request
    console.error(error);
  }
};

/**
 * Make a DELETE request to a private API endpoint with OAuth token
 * @param {string} endpoint - The API endpoint to call
 * @param {string} oauthToken - The OAuth token to use for authentication
 * @returns {Promise<any>} - The response data from the API
 */
export const deletePrivateAPI = async (endpoint, oauthToken) => {
  try {
    // set Authorization header with OAuth token
    instance.defaults.headers.common[
      AUTHORIZATION_HEADER
    ] = `${BEARER_TOKEN_TYPE} ${oauthToken}`;
    // Make a DELETE request to the private API endpoint and return the response data
    const response = await instance.delete(endpoint);
    return response.data;
  } catch (error) {
    //Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (invalid or expired token)
      alert(UNAUTHORIZED_ERROR_MESSAGE);
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error (invalid API token)
      alert(FORBIDDEN_ERROR_MESSAGE);
    } else {
      //Log any other errors that occur
      console.error(error);
    }
  }
};
