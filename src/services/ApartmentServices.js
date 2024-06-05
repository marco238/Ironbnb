import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ironbnb-m3.herokuapp.com',
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
