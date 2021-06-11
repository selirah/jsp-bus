import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function callApiGet(path) {
  return await axios.get(`${API_ENDPOINT}/${path}`);
}

export async function callApiPost(path, payload) {
  return await axios.post(`${API_ENDPOINT}/${path}`, payload);
}

export async function callApiPut(path, payload, param) {
  return await axios.put(`${API_ENDPOINT}/${path}/${param}`, payload);
}

export async function callApiDelete(path, param) {
  return await axios.delete(`${API_ENDPOINT}/${path}/${param}`);
}
