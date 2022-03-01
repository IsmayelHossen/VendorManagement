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
      <form>
        <input type="text"></input>
      </form>
      {/* Search functionality end*/}

      {/* service provide by vendor start */}
      <div className="container">
        <h2>Abc Company</h2>
        <div className="row">
          <div className="col-md-6">
            <p>Service Id:123</p>
            <h4>Date:01/2/2010</h4>
          </div>
          <div className="col-md-6">
            <p>Status:pending</p>
            <p>Amount:1000Tk</p>
          </div>

          {/* service provide by vendor  end */}
        </div>
      </div>
    </>
  );
};

export default PNLeftPart;
