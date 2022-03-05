/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ServiceProviders, SearchDataFromApi } from "../Vendor/ApiCall";
import { GetIndividual_VendorActive_data } from "../Vendor/ApiCall";
import "../../../index.css";
import "../Vendor/vendor.css";
import PNRightPart from "./PNRightPart";
import { API_URL } from "./CommonUrlApi";
const PNLeftPart = (props) => {
  const [DataLoader, setDataLoader] = useState(true);
  const [Provider, SetProvider] = useState([]);
  const [error, SetError] = useState(false);
  const [vendorActive, setVendorActive] = useState("");
  const [isDelete, setIsDelete] = useState(true);
  const [vendorStatus_details_open, setVendorStatus_details_open] =
    useState(false);
  const [GetVendorActiveId, setGetVendorActiveId] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [GetSearchData, setGetSearchData] = useState({});
  const [notFoundSearch, setnotFoundSearch] = useState(true);
  /**for primarilly get service proveder data */
  useEffect(() => {
    console.log(props.id);
    GetServiceProviderData();
  }, []);
  const GetServiceProviderData = async () => {
    SetError(false);
    try {
      const response = await ServiceProviders();
      if (response) {
        SetProvider(response.data);
        setTimeout(() => {
          setDataLoader(false);
        }, 5000);
      }
    } catch (error) {
      SetError(true);
      console.log(error);
    }
  };
  /**for primarilly get service proveder data end*/
  //pass id to parent component(PurchaseNew)
  // const Vendor_status_Active = (id) => {
  //   setVendorActive(id);
  //   console.log(id);
  //   props.activeStatusDetail(id);
  // };
  const OpenActiveDetails = async (id) => {
    // alert(id);
    setGetVendorActiveId(id);
    setVendorStatus_details_open(true);
  };
  //search functionality
  useEffect(() => {
    const getUsers = () => {
      fetch(`${API_URL}posts/${searchStatus}`)
        .then((res) => {
          // You have to send it, as I have done below
          if (res.status >= 400) {
            throw new Error("Server responds with error!");
          }
          return res.json();
        })
        .then(
          (vendors) => {
            setGetSearchData(vendors);
            GetServiceProviderData();
            setnotFoundSearch(true);
          },

          (err) => {
            console.log(err);
            setnotFoundSearch(false);
          }
        );
    };
    getUsers();
  }, [searchStatus]);
  // const SearchDataFunction = async (e) => {
  //   setSearchStatus(e.target.value);
  //   if (e.target.value.length > 0) {
  //     const response = await SearchDataFromApi(e.target.value);
  //     setGetSearchData(response.data);

  //     console.log(response.data);
  //   } else {
  //     GetServiceProviderData();
  //   }
  // };
  return (
    <>
      {DataLoader && (
        <>
          <i
            class="fa fa-spinner fa-spin fa-3x fa-fw"
            style={{ color: "green", fontSiz: "20px" }}
          ></i>
          <span class="sr-only">Loading...</span>
        </>
      )}
      {DataLoader == false && (
        <div className="row ">
          <div className="col-md-4 col-sm-12 h-auto">
            <div className="Service_list_vendor">
              <h3 className="Vendor_Status_left_side_search_title">
                Vendor Products List
              </h3>
              {/* Search functionality */}
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  value={searchStatus}
                  name="searchStatus"
                  placeholder="Search"
                  onChange={(e) => setSearchStatus(e.target.value)}
                />
              </div>
            </div>

            {/* service provide by vendor start */}

            {notFoundSearch &&
              GetSearchData.id == null &&
              Provider.slice(0, 10).map((row, index) => (
                <a href={`#Select${row.id}`}>
                  <div
                    className="Vendor_Status"
                    id={
                      row.id == GetVendorActiveId
                        ? "Active_Vendor_Status"
                        : "Vendor_Status"
                    }
                    onClick={() => OpenActiveDetails(row.id)}
                  >
                    <div className="Vendor_Status_heading">
                      <h6 className="Vendor_Status_heading_h6">Abc Company</h6>
                      <p className="checkmark">
                        <i class="fa fa-check-circle " aria-hidden="true"></i>
                      </p>
                    </div>

                    <div className="row displayflex">
                      <div className="col-sm-12 col-md-6 col-xl-4 justify-content-sm-start ">
                        <p className="Vendor_Status_heading_left_data justify-content-sm-start">
                          <strong>Service Id:</strong>
                          {row.id}
                        </p>
                        <p className="Vendor_Status_heading_left_data justify-content-sm-start">
                          <strong>Date:</strong>01/2/2010
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-6 ">
                        <p className="Vendor_Status_heading_left_data">
                          <strong>Status:</strong>pending
                        </p>
                        <p className="Vendor_Status_heading_left_data">
                          <strong>Amount:</strong>1000Tk
                        </p>
                      </div>
                    </div>

                    {/* service provide by vendor  end */}
                  </div>
                </a>
              ))}
            {/*  after searching data found */}
            {notFoundSearch && GetSearchData.id != null && (
              <div
                className="Vendor_Status"
                id={
                  GetSearchData.id == GetVendorActiveId
                    ? "Active_Vendor_Status"
                    : "Vendor_Status"
                }
                onClick={() => OpenActiveDetails(GetSearchData.id)}
              >
                <div className="Vendor_Status_heading">
                  <h6 className="Vendor_Status_heading_h6">Abc Company</h6>
                  <p className="checkmark">
                    <i class="fa fa-check-circle " aria-hidden="true"></i>
                  </p>
                </div>

                <div className="row displayflex">
                  <div className="col-md-6 col-xl-4 col-sm-12">
                    <p className="Vendor_Status_heading_left_data">
                      <strong>Service Id:</strong>
                      {GetSearchData.id}
                    </p>
                    <p className="Vendor_Status_heading_left_data">
                      <strong>Date:</strong>01/2/2010
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-sm-12">
                    <p className="Vendor_Status_heading_left_data">
                      <strong>Status:</strong>pending
                    </p>
                    <p className="Vendor_Status_heading_left_data">
                      <strong>Amount:</strong>1000Tk
                    </p>
                  </div>
                </div>

                {/* service provide by vendor  end */}
              </div>
            )}

            {!notFoundSearch && (
              <div className="Vendor_Status">
                <div className="Vendor_Status_heading">
                  <h6
                    className="Vendor_Status_heading_h6"
                    style={{
                      paddingBottom: "13px",
                      paddingTop: "10px",
                      color: " #ea0606",
                    }}
                  >
                    No Result Found
                  </h6>
                  <p className="checkmark"></p>
                </div>

                {/* service provide by vendor  end */}
              </div>
            )}
          </div>

          <div className="col-md-8 col-sm-12">
            <PNRightPart
              PassVebdor_Active_data={GetVendorActiveId}
              openRighhtSideData={vendorStatus_details_open}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PNLeftPart;
