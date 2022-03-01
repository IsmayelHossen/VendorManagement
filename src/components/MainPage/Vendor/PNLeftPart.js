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
const PNLeftPart = (props) => {
  const [Provider, SetProvider] = useState([]);
  const [error, SetError] = useState(false);
  const [vendorActive, setVendorActive] = useState("");
  useEffect(() => {
    console.log(props.id);
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
  const Vendor_status_Active = (id) => {
    setVendorActive(id);
    console.log(id);
    props.activeStatusDetail(id);
  };
  return (
    <>
      <h3 className="headingof_left_side">Service List</h3>
      {/* Search functionality */}
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
      {/* Search functionality end*/}

      {/* service provide by vendor start */}

      {Provider.slice(0, 10).map((row, index) => (
        <div
          className="Vendor_Status"
          id={row.id == vendorActive ? "Active_Vendor_Status" : "Vendor_Status"}
          onClick={() => Vendor_status_Active(row.id)}
        >
          <div className="Vendor_Status_heading">
            <h6 className="Vendor_Status_heading_h6">Abc Company</h6>
            <p className="checkmark">
              <i class="fa fa-check-circle " aria-hidden="true"></i>
            </p>
          </div>

          <div className="row displayflex">
            <div className="col-md-6">
              <p className="Vendor_Status_heading_left_data">
                <strong>Service Id:</strong>
                {row.id}
              </p>
              <p className="Vendor_Status_heading_left_data">
                <strong>Date:</strong>01/2/2010
              </p>
            </div>
            <div className="col-md-6">
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
      ))}
    </>
  );
};

export default PNLeftPart;
