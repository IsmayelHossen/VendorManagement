import Axios from "axios";
import { API_URL } from "./CommonUrlApi";

export const ServiceProviders = async () => {
  return await Axios.get(`${API_URL}posts`).then((res) => {
    return res;
    console.log("attendance data", res.data.data);
  });
};

export const GetIndividual_VendorActive_data = async (id) => {
  return await Axios.get(`${API_URL}posts/${id}`).then((res) => {
    return res;
    console.log("attendance data", res.data.data);
  });
};
