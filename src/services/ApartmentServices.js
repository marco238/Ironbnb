import createHttp from "./BaseService";

const http = createHttp();

export const listApartments = () => {
  return http.get("/apartments");
};

export const getApartment = (id) => {
  return http.get(`/apartments/${id}`);
};

export const addApartment = (apt) => {
  return http.post("/apartments", apt);
};

export const editApartment = (id, apt) => {
  return http.put(`/apartments/${id}`, apt);
};

export const deleteApartment = (id) => {
  return http.delete(`/apartments/${id}`);
};
