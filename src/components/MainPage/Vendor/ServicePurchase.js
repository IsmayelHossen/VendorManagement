/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
/**
 * for paginationn and data table
 */
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
/**
 * for paginationn and data table end
 */
import swal from "sweetalert";
import "../../../index.css";
import "../Vendor/vendor.css";
import PUBLIC_URL from "../Vendor/CommonUrlApi";
import VendorEdit from "./VendorEdit";
import { GetVendor_individualData_update } from "../Vendor/ApiCall";
const ServicePurchase = () => {
  const [Edit_delete, SetEditDelete] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [Action_button, setActionButton] = useState(false);
  const [EditModal, setEditModa] = useState(false);
  const [Individual_data, setIndividual_data] = useState("");
  const [UpdateDataFound, setUpdateDataFound] = useState({});
  const [onchangeData, setOnchangeData] = useState("");
  //let getLoginData = JSON.parse(localStorage.getItem("VendorData"));
  //let getLoginData = [];
  const {
    register,

    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: register1,

    handleSubmit: handleSubmit1,
    formState: { errors: errors2 },
  } = useForm();

  // submit vendor create data info
  const onSubmit = (data) => {
    SetVendorData([...Vendor_data, data]);
    reset();
    console.log(data);

    // localStorage.setItem("VendorData", JSON.stringify(Vendor_data));
  };
  const onSubmit1 = (data) => {
    alert(data.test);
    console.log(data);
  };
  //Action edit,delete
  const Action_bar = (name) => {
    console.log(name);
    setActionButton(true);
  };
  useEffect(() => {
    console.log(onchangeData);
  });
  //delete vendor
  const Delete_vendor = (id) => {
    const arrarydata = Vendor_data;
    var Values = arrarydata.indexOf(id);

    arrarydata.splice(id, 1);

    SetVendorData([...arrarydata]);
    swal.fire("delete data");
  };
  //edit vendor data
  const EditIndividual_vendor = async (id) => {
    if (id) {
      setIndividual_data(id);
      const response = await GetVendor_individualData_update(id);
      if (response) {
        setUpdateDataFound(response.data);
        console.log(response.data);
      }
    }
  };
  const DeleteIndividual_vendor = (id) => {
    alert(id);
  };
  //table
  const UpdateSubmit = (data) => {
    console.log("ok");
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "Firstname",
    },
    {
      title: "Email",
      dataIndex: "Email",
    },

    {
      title: "Mobile",
      dataIndex: "Mobile",
    },

    {
      title: " Service",
      dataIndex: "Vendor_Service",
    },

    {
      title: "Pre Request",
      dataIndex: "Vendor_PreRequest",
    },
    {
      title: "Details",
      dataIndex: "Vendor_details",
    },

    {
      title: "Action",
      render: (text, record) => (
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
              data-target="#vendor_update"
              onClick={() => {
                EditIndividual_vendor(record.id);
              }}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                DeleteIndividual_vendor(record.id);
              }}
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];
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
              <div className="col-sm-12 create">
                <h3 className="create_vendor_page_title page-title text-start text-justify">
                  Welcome To Service
                </h3>
                <button
                  type="button"
                  class="Button_success float-right"
                  style={{ marginBottom: "10px" }}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa fa-plus"></i> Add Vendor
                </button>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div
            class="modal custom-modal fade "
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
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ fontWeight: "600", color: "#5265ac" }}
                  >
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
                  {/* vendor form */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" g-3 needs-validation"
                    novalidate
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            <span style={{ color: "red" }}>*</span>Name
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Write name"
                            id="validationDefault01"
                            {...register("Firstname", {
                              required: true,
                            })}
                          />
                        </div>

                        {errors.Firstname && (
                          <div class="alert alert-warning">
                            <strong>Warning!</strong> This alert box could
                            indicate a warning that might need attention.
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Email
                          </span>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email"
                            id="validationDefault02"
                            {...register("Email", {
                              pattern: /@/,
                              required: true,
                            })}
                          />
                        </div>
                        {errors.Email && (
                          <span className="errorsMsg">
                            Please enter valid email
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Mobile
                          </span>
                          <input
                            type="number"
                            class="form-control"
                            id="validationDefault03"
                            placeholder="Enter Mobile number"
                            {...register("Mobile", {
                              required: true,
                              pattern: /^01[35-9]\d{8}/,
                              maxLength: 11,
                            })}
                          />
                        </div>
                        {errors.Mobile && (
                          <span className="errorsMsg">
                            Please enter valid number
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Service Type
                          </span>
                          <select
                            class="form-control"
                            id="validationDefault04"
                            {...register("Vendor_Service", {
                              required: true,
                            })}
                          >
                            <option value="">Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Exports">Exports</option>
                            <option value="Motor Bike">Motor Bike</option>
                            <option value="Monir">Monir</option>
                          </select>
                        </div>
                        {errors.Vendor_Service && (
                          <span className="errorsMsg">Select Service</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Pre-Request
                          </span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            id="validationDefault05"
                            {...register("Vendor_PreRequest", {
                              required: true,
                              minLength: 20,
                            })}
                            id="inputAddress"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                        {errors.Vendor_PreRequest && (
                          <span className="errorsMsg">
                            Minimum 20 characters required
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">Details</span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            {...register("Vendor_details")}
                            id="validationDefault06"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div class="form-group custom_group">
                        <span class="title_vendor">
                          <span style={{ color: "red" }}>*</span>Name
                        </span>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Write Id"
                          id="validationDefault07"
                          {...register("id", {
                            required: true,
                          })}
                        />
                      </div>
                      {errors.id && (
                        <span className="errorsMsg">
                          Name field is required
                        </span>
                      )}
                    </div>
                    <div className="SubmitFooter">
                      <button type="submit" class="Button_success">
                        Submit
                      </button>
                      <button
                        type="button"
                        class="Button_Danger1"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* table start */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: Vendor_data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={Vendor_data}
                  rowKey={(record) => record.id}
                  onChange={console.log("chnage")}
                />
              </div>
            </div>
          </div>
          {/* update vendor modal start */}

          <div
            class="modal custom-modal fade "
            id="vendor_update"
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
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ fontWeight: "600", color: "#5265ac" }}
                  >
                    <i class="fa fa-plus"></i> Update Vendor{onchangeData}
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

                {/* vendor update form */}
                <div class="modal-body">
                  {/* vendor form */}
                  {Individual_data}

                  <form
                    onSubmit={handleSubmit1(onSubmit1)}
                    className=" g-3 needs-validation"
                    novalidate
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            <span style={{ color: "red" }}>*</span>Name
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="Write name"
                            {...register1("Firstname", {
                              required: true,
                            })}
                          />
                        </div>

                        {errors2.Firstname && (
                          <span className="errorsMsg">
                            Name field is required
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Email
                          </span>
                          <input
                            type="email"
                            class="form-control"
                            id="validationDefault02"
                            placeholder="Enter email"
                            {...register1("Email", {
                              pattern: /@/,
                              required: true,
                            })}
                          />
                        </div>
                        {errors2.Email && (
                          <span className="errorsMsg">
                            Please enter valid email
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Mobile
                          </span>
                          <input
                            type="number"
                            class="form-control"
                            id="validationDefault03"
                            placeholder="Enter Mobile number"
                            {...register1("Mobile", {
                              // required: true,
                              // pattern: /^01[35-9]\d{8}/,
                              // maxLength: 11,
                            })}
                          />
                        </div>
                        {errors2.Mobile && (
                          <span className="errorsMsg">
                            Please enter valid number
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Service Type
                          </span>
                          <select
                            class="form-control"
                            id="validationDefault04"
                            {...register1("Vendor_Service", {
                              // required: true,
                            })}
                          >
                            <option value="">Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Exports">Exports</option>
                            <option value="Motor Bike">Motor Bike</option>
                            <option value="Monir">Monir</option>
                          </select>
                        </div>
                        {errors2.Vendor_Service && (
                          <span className="errorsMsg">Select Service</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            {" "}
                            <span style={{ color: "red" }}>*</span>Pre-Request
                          </span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            id="validationDefault05"
                            defaultValue={UpdateDataFound.body}
                            {...register1("Vendor_PreRequest", {
                              // required: true,
                              // minLength: 20,
                            })}
                            id="inputAddress"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                        {errors2.Vendor_PreRequest && (
                          <span className="errorsMsg">
                            Minimum 20 characters required
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">Details</span>
                          <textarea
                            class="form-control"
                            placeholder="Pre Request"
                            id="validationDefault06"
                            defaultValue={UpdateDataFound.title}
                            {...register1("Vendor_details")}
                            id="inputAddress"
                            rows="3"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            <span style={{ color: "red" }}>*</span>Name
                          </span>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Write Id"
                            id="validationDefault07"
                            defaultValue={UpdateDataFound.id}
                            {...register1("id", {
                              // required: true,
                            })}
                          />
                        </div>
                        {errors2.id && (
                          <span className="errorsMsg">id is required</span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <div class="form-group custom_group">
                          <span class="title_vendor">
                            <span style={{ color: "red" }}>*</span>Date
                          </span>
                          <input type="date" {...register1("test", {})} />
                        </div>
                        {errors2.date1 && (
                          <span className="errorsMsg">Date is required</span>
                        )}
                      </div>
                      <input
                        type="number"
                        {...register("test", {
                          setValueAs: (v) => setOnchangeData(v),
                        })}
                      />
                    </div>
                    <div className="SubmitFooter">
                      <button type="submit" class="Button_success">
                        Submit
                      </button>
                      <button
                        type="button"
                        class="Button_Danger1"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* update vendor modal end  */}
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default ServicePurchase;
