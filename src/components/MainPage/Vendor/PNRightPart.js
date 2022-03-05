/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ServiceProviders } from "../Vendor/ApiCall";
import { GetIndividual_VendorActive_data } from "../Vendor/ApiCall";
import "../../../index.css";
import "../Vendor/vendor.css";

const PNRightPart = (props) => {
  console.log(props);
  const [Provider, SetProvider] = useState([]);
  const [Active_individual_data, setActive_individual_data] = useState({});
  const [error, SetError] = useState(false);
  useEffect(() => {
    const getUsers = () => {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.PassVebdor_Active_data}`
      )
        .then((res) => {
          // You have to send it, as I have done below
          if (res.status >= 400) {
            throw new Error("Server responds with error!");
          }
          return res.json();
        })
        .then(
          (users) => {
            setActive_individual_data(users);
          },

          (err) => {}
        );
    };
    getUsers();
  }, [props.PassVebdor_Active_data]);

  return (
    <>
      {/* Search functionality end*/}

      {/* service provide by vendor start */}
      {props.openRighhtSideData && (
        <section
          data-bs-spy="scroll"
          id={`Select${props.PassVebdor_Active_data}`}
        >
          <div className="Vendor_Status_right_side">
            <div className="Vendor_Status_right_side_header">
              <div className="row ">
                <div className="col-md-6 ">
                  <p className="px-2">Service Id:{Active_individual_data.id}</p>
                  <p className="px-2">Date:01/2/2010</p>
                </div>
                <div className="col-md-6">
                  <p>Status:pending</p>
                  <p>Amount:1000Tk</p>
                </div>
              </div>
            </div>
            {/* service provide by vendor  end */}
            <div className="details_vendor_status_data">
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
        </section>
      )}
    </>
  );
};

export default PNRightPart;
