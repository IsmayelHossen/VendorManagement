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
const PNRightPart = () => {
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
      {/* Search functionality end*/}

      {/* service provide by vendor start */}

      <div className="Vendor_Status_right_side">
        <div className="row Vendor_Status_right_side_header">
          <div className="col-md-6">
            <p>Service Id:</p>
            <h4>Date:01/2/2010</h4>
          </div>
          <div className="col-md-6">
            <p>Status:pending</p>
            <p>Amount:1000Tk</p>
          </div>
        </div>

        {/* service provide by vendor  end */}
        <div className="">
          {/* table status */}
          <div class="table-responsive ">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PNRightPart;
