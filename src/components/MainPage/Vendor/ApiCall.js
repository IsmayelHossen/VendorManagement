import Axios from "axios";
import { API_URL } from "./CommonUrlApi";

export const ServiceProviders = async () => {
  return await Axios.get(`${API_URL}posts`).then((res) => {
    return res;
  });
};

export const GetIndividual_VendorActive_data = async (id) => {
  return await Axios.get(`${API_URL}posts/${id}`).then((res) => {
    return res;
  });
};
export const SearchDataFromApi = async (id) => {
  return await Axios.get(`${API_URL}posts/${id}`).then((res) => {
    return res;
  });
};
export const GetVendor_individualData_update = async (id) => {
  return await Axios.get(`${API_URL}posts/${id}`).then((res) => {
    return res;
  });
};

export const OrderedData = async () => {
  return await Axios.get(`${API_URL}posts`).then((res) => {
    return res;
  });
};
export const GetDeleiveryProduct = async (id) => {
  return await Axios.get(`${API_URL}posts/${id}`).then((res) => {
    return res;
  });
};
