import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

http.interceptors.response.use(function(response) {
  return response.data;
}, function(error) {
  return Promise.reject(error);
});

export const listApartments = () => {
  return http.get('/apartments');
}

export const getApartment = (id) => {
  return http.get(`/apartments/${id}`);
}

export const addApartment = (apt) => {
  return http.post('/apartments', apt);
}
