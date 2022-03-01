/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ServiceProviders } from "../Vendor/ApiCall";
import "../../../index.css";
import "../Vendor/vendor.css";
const PNLeftPart = () => {
  const [Provider, SetProvider] = useState([]);
  const [error, SetError] = useState(false);
  useEffect(() => {
    GetServiceProviderData();
  }, []);
  const GetServiceProviderData = async () => {
    SetError(false);
    try {
      const response = await ServiceProviders();
      SetProvider(response.data);
      console.log(response.data);
    } catch (error) {
      SetError(true);
      console.log(error);
    }
  };
  return (
    <>
      <h3>Service List</h3>
      {/* Search functionality */}
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
      {/* Search functionality end*/}

      {/* service provide by vendor start */}

      {Provider.slice(0, 10).map((row, index) => (
        <div className="Vendor_Status">
          <div className="Vendor_Status_heading">
            <h6>Abc Company</h6>
            <i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>

          <div className="row displayflex">
            <div className="col-md-6">
              <p>Service Id:{row.id}</p>
              <h4>Date:01/2/2010</h4>
            </div>
            <div className="col-md-6">
              <p>Status:pending</p>
              <p>Amount:1000Tk</p>
            </div>
          </div>

          {/* service provide by vendor  end */}
        </div>
      ))}
    </>
  );
};

export default PNLeftPart;
