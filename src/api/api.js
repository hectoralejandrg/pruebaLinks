import axios from "axios";
const baseUrl = `https://reqres.in/api/`;

export const apiPostLogin = (url, values) =>
  axios.post(`${baseUrl}${url}`, values);

export const apiListUser = (url) => axios.get(`${baseUrl}${url}`);

export const apiGetUser = (id) => axios.get(`${baseUrl}users/${id}`)

export const apiPostUser = (values) => axios.post(`${baseUrl}users`, values)

export const apiPutUser = (id, values) => axios.put(`${baseUrl}users/${id}`, values)

export const apiDeleteUser = (id) => axios.delete(`${baseUrl}users/${id}`)