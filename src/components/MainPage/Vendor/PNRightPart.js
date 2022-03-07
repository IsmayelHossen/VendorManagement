/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ServiceProviders } from "../Vendor/ApiCall";
import { GetDeleiveryProduct } from "../Vendor/ApiCall";
import "../../../index.css";
import "../Vendor/vendor.css";
import Fade from "react-reveal/Fade";
const PNRightPart = (props) => {
  console.log(props);
  const [Provider, SetProvider] = useState([]);
  const [Active_individual_data, setActive_individual_data] = useState({});
  const [GetDeliveryProduct, setGetDeliveyProduct] = useState({});
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
  const Deleivery_Product_update = async (id) => {
    const response = await GetDeleiveryProduct(id);
    if (response) {
      setGetDeliveyProduct(response.data);
      console.log(response.data);
    }
  };
  return (
    <>
      {/* Search functionality end*/}

      {/* service provide by vendor start */}
      {props.openRighhtSideData && (
        <section
          data-bs-spy="scroll"
          id={`Select${props.PassVebdor_Active_data}`}
        >
          <Fade right>
            <div className="Vendor_Status_right_side">
              <div className="Vendor_Status_right_side_header">
                <div class="d-flex justify-content-between align-items-center">
                  <p className="mx-auto pt-2 pb-2">
                    <strong>Service Id:</strong> {Active_individual_data.id}
                  </p>
                  <p className="mx-auto pt-2 pb-2">
                    <strong>Date:</strong>01/2/2010
                  </p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p className="mx-auto pt-2 pb-2">
                    <strong>Status:</strong>pending
                  </p>
                  <p className="mx-auto pt-2 pb-2">
                    <strong>Amount:</strong>1000Tk
                  </p>
                </div>
              </div>
              {/* service provide by vendor  end */}
              <div className="details_vendor_status_data">
                {/* table status */}
                <div class="table-responsive ">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Company Name</th>

                        <th>Service Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Active_individual_data && (
                        <>
                          <tr>
                            <td>{Active_individual_data.id}</td>
                            <td>{Active_individual_data.title}</td>
                            <td>234</td>
                            <td>23400</td>
                            <td>23/05/2021</td>
                            <td>Status:Pending</td>
                            <td>
                              <div className="dropdown dropdown-action text-right">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item "
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#Product_update"
                                    onClick={() =>
                                      Deleivery_Product_update(
                                        Active_individual_data.id
                                      )
                                    }
                                  >
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa fa-trash-o m-r-5" /> Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      )}
      {/* Deleivery Product Update */}

      <div
        class="modal custom-modal fade "
        id="Product_update"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title{GetDeliveryProduct.id}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PNRightPart;
