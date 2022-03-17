import Axios from "axios";
import { API_URL } from "./CommonUrlApi";

export const ServiceProviders = async () => {
  return await Axios.get(`${API_URL}posts`).then((res) => {
    return res;
  });
};
// VendorInfoData
export const VendorInfoData = async () => {
  return await Axios.get("http://localhost:4328/Vendor_data").then((res) => {
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
  return await Axios.get(`http://localhost:4328/Vendor_data/${id}`).then(
    (res) => {
      return res;
    }
  );
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

// delete specific data
//delete specific attendance

export const deleteSpecificAttendance = async (ccode, successCode, temail) => {
  return await Axios.delete(
    `${API_URL}api/deleteSpecificAttendance/${ccode}/${successCode}/${temail}`
  ).then((res) => {
    return res.data;
  });
};
// post data
export const SaveCtMark = async (temail, session, Coursecode, ct, data) => {
  // console.log('student data',data);

  return await Axios.post(
    `${API_URL}api/SaveCtMark1/${temail}/${session}/${Coursecode}/${ct}`,
    data
  ).then((res) => {
    return res.data;

    console.log("attendance data", res.data);
  });
};
// update data
export const UpdateAttendance = async (ccode, scode, temail, data) => {
  return await Axios.put(
    `${API_URL}api/AttendanceUpdate/${ccode}/${scode}/${temail}`,
    data
  ).then((res) => {
    return res.data;
  });
};
