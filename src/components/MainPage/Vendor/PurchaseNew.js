/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../../../index.css";
import "../Vendor/vendor.css";
import PNLeftPart from "./PNLeftPart";
import PNRightPart from "./PNRightPart";
const PurchaseNew = () => {
  const [Edit_delete, SetEditDelete] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [isDelete, setIsDelete] = useState(true);
  const { register, handleSubmit, watch, reset } = useForm();
  useEffect(() => {
    console.log(Vendor_data);
  }, []);
  const onSubmit = (data) => {
    if (!data.Firstname) {
      alert("Field must not be empty");
    } else {
      //alert("ok done");
      SetVendorData([...Vendor_data, data]);
      reset();
    }
  };
  const DemoDataDelete = (index) => {
    console.log(Vendor_data);

    // alert(index);
    const arrarydata = Vendor_data;
    var Values = arrarydata.indexOf(index);

    arrarydata.splice(index, 1);

    SetVendorData([...arrarydata]);
  };
  // FinalSubmit functionality

  return (
    <>
      <Helmet>
        <title>Dashboard - BBA STORE</title>
        <meta name="description" content="BBA STORE" />
      </Helmet>
      {/* Header */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title text-start">Vendor Status</h3>
                <button
                  type="button"
                  class="btn btn-primary float-right"
                  style={{ marginBottom: "5px" }}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>

          {/* /Page Header */}

          <div
            class="modal fade "
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-lg custom_modal_size"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    <i class="fa fa-plus"></i> Add Vendor
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="row">
                    <div className="col-md-4">
                      {/* vendor add product form */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            <span style={{ color: "red" }}>*</span>Name
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Write name"
                            {...register("Firstname")}
                          />
                        </div>
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Email
                          </span>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email"
                            {...register("Email")}
                          />
                        </div>
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Mobile
                          </span>
                          <input
                            type="number"
                            class="form-control"
                            id="email"
                            placeholder="Enter Mobile number"
                            {...register("Mobile")}
                          />
                        </div>
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Service Type
                          </span>
                          <select
                            class="form-control"
                            id="sel1"
                            {...register("Vendor_Service")}
                          >
                            <option value="Electronics">Electronics</option>
                            <option value="Exports">Exports</option>
                            <option value="Motor Bike">Motor Bike</option>
                            <option value="Monir">Monir</option>
                          </select>
                        </div>
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>
                            Pre-Request
                          </span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            {...register("Vendor_PreRequest")}
                            id="inputAddress"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                        <div class="form-group custom_group">
                          <span class="title_vendor">Details</span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            {...register("Vendor_details")}
                            id="inputAddress"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                        <div className="SubmitFooter">
                          <button
                            type="submit"
                            class="btn btn-primary custombtn"
                          >
                            Add
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger custom_danger_button"
                          >
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8">
                      <div className="table-responsive">
                        {/* table start */}
                        <table class="table">
                          <thead>
                            {Vendor_data != null && (
                              <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Service</th>
                                <th>Pre Request</th>
                                <th>Details</th>
                                <th>Action</th>
                              </tr>
                            )}
                          </thead>
                          <tbody>
                            {Vendor_data.length != 0 &&
                              Vendor_data.map((row, index) => (
                                <>
                                  <tr>
                                    <td key={index}>{row.Firstname}</td>
                                    <td>{row.Email}</td>
                                    <td>{row.Mobile}</td>
                                    <td>{row.Vendor_Service}</td>
                                    <td>{row.Vendor_PreRequest}</td>
                                    <td>{row.Vendor_details}</td>
                                    <td>
                                      <button
                                        class="btn btn-danger custom_danger_button"
                                        onClick={() => DemoDataDelete(index)}
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Left Side */}
          <div className="row">
            <div className="col-md-4">
              <div className="Purchase_Left_Side">
                <PNLeftPart />
              </div>
            </div>
            <div className="col-md-8">
              <PNRightPart />
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default PurchaseNew;
