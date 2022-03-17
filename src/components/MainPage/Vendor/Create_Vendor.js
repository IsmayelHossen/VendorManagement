/**
 * Vendor Add Information component
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
import {
  GetVendor_individualData_update,
  VendorInfoData,
} from "../Vendor/ApiCall";
import axios from "axios";
const Create_Vendor = () => {
  const [DataLoader, setDataLoader] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [Vendor_Info, setVendorInfo] = useState([]);
  const [search_vendor_data, setsearch_vendor_data] = useState("");
  const [UpdateDataFound, setUpdateDataFound] = useState({});
  const [usedatafromApi, setusedatafromApi] = useState({});

  useEffect(() => {
    document.title = "Vendor Add form";
    VendorInfo();
  }, []);
  const VendorInfo = async () => {
    const reponse = await VendorInfoData();
    setVendorInfo(reponse.data);
    //console.log(reponse.data);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const {
    reset: reset1,
    register: register1,
    handleSubmit: handleSubmit1,
    formState: {
      errors: errors2,
      isDirty: isDirty1,
      isSubmitting: isSubmitting1,
    },
  } = useForm({
    defaultValues: {},
  });

  // submit vendor create data info
  const onSubmit = (data) => {
    SetVendorData([...Vendor_data, data]);
    reset();
    console.log(data);

    // localStorage.setItem("VendorData", JSON.stringify(Vendor_data));
  };

  //edit vendor data
  const EditIndividual_vendor = async (id) => {
    if (id) {
      // setIndividual_data(id);
      const response = await GetVendor_individualData_update(id);
      if (response) {
        setUpdateDataFound(response.data[0]);
        // console.log(response.data[0]);

        //   console.log(UpdateDataFound);
      }
    }
  };
  const onSubmitUpdate = (data) => {
    if (data) {
      swal({
        title: "Updated Successfully!",

        icon: "success",
        button: "Ok!",
      });
    }

    console.log(data);
    console.log(UpdateDataFound);
  };
  //Action edit,delete
  const Action_bar = (name) => {
    console.log(name);
    //setActionButton(true);
  };
  const DeleteIndividual_vendor = (id) => {
    swal({
      title: "Are you sure want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const arrarydata = Vendor_data;
        var Values = arrarydata.indexOf(id);

        arrarydata.splice(Values, 1);

        SetVendorData([...arrarydata]);
      } else {
        swal("Record is not delete!");
      }
    });
  };

  //search vendor
  useEffect(() => {
    if (search_vendor_data == "") {
      VendorInfo();
    } else {
      axios
        .get(`http://localhost:4328/Vendor_search/${search_vendor_data}`)
        .then((response) => {
          console.log(response.data);
          setVendorInfo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [search_vendor_data]);

  //table
  const columns = [
    {
      title: "Company Name",
      dataIndex: "COMPANYNAME",
    },
    {
      title: "Contact Name",
      dataIndex: "CONTACTNAME",
    },

    {
      title: "Contact Title",
      dataIndex: "CONTACTTITLE",
    },

    {
      title: " Address",
      dataIndex: "ADDRESS",
    },

    {
      title: "City",
      dataIndex: "CITY",
    },
    {
      title: "Street",
      dataIndex: "STREET",
    },
    {
      title: "Postal Code",
      dataIndex: "PCODE",
    },
    {
      title: "Country",
      dataIndex: "COUNTRY",
    },
    {
      title: "Mobile",
      dataIndex: "MOBILE",
    },
    {
      title: "Fax",
      dataIndex: "FAX",
    },
    {
      title: "Email",
      dataIndex: "EMAIL",
    },
    {
      title: "Website",
      dataIndex: "WEBSITE",
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
                EditIndividual_vendor(record.ID);
              }}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                DeleteIndividual_vendor(record.ID);
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
          <div class="">
            <div class="card-header1">
              <div className="">
                <h4
                  className="text-center mx-auto mb-3 text-uppercase fddd"
                  id="hddd"
                >
                  Welcome To Vendor Management
                </h4>
              </div>
              {/* header */}
              <div className="d-flex justify-content-between align-items-center Page_header_title_search">
                <div
                  class="form-group has-search"
                  style={{ marginBottom: "0px" }}
                >
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    value={search_vendor_data}
                    name="searchStatus"
                    placeholder="Search"
                    onChange={(e) => setsearch_vendor_data(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="Button_success float-right"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa fa-plus"></i> <span>Add Vendor</span>
                </button>
              </div>
            </div>
            <div class="card-body1">
              {/* /Page Header */}
              <div
                class="modal custom-modal fade "
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 style={{ color: "rgba(17, 123, 108, 0.85)" }}>
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
                    <div class="modal-body ">
                      <div className="row Product_add">
                        {/* vendor form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>{" "}
                              Company/Person Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="    Company/Person Name"
                                id="validationDefault01"
                                {...register("CompanyName", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Contact Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Contact Name"
                                id="validationDefault02"
                                {...register("ContactName")}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Contact
                              Title
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Contact Title"
                                id="validationDefault01"
                                {...register("ContactTitle", {
                                  required: true,
                                })}
                              />
                            </div>
                            {/* 
                            {errors.ContactTitle && (
                              <p className="errorsMsg">
                                Contact Title Required
                              </p>
                            )} */}
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Address
                            </label>
                            <div className="col-sm-8">
                              <textarea
                                class="form-control Vendor-form-control"
                                placeholder=" Address"
                                id="validationDefault05"
                                {...register("Address", {
                                  required: true,
                                  minLength: 10,
                                })}
                                rows="1"
                              ></textarea>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Street
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Street"
                                id="validationDefault01"
                                {...register("Street", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Postal Code
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                placeholder="Postal Code"
                                id="validationDefault01"
                                {...register("Pcode", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> City
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="City"
                                id="validationDefault01"
                                {...register("City", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Country
                            </label>
                            <div className="col-sm-8">
                              <select
                                className="  form-control Vendor-form-control "
                                {...register("Country", {
                                  required: true,
                                })}
                              >
                                <option value="">Select...</option>
                                <option value="A">Option A</option>
                                <option value="B">Option B</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Mobile
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Mobile number"
                                {...register("Mobile", {
                                  required: true,
                                  pattern: /^01[35-9]\d{8}/,
                                  maxLength: 11,
                                })}
                              />
                            </div>

                            {errors.Mobile && (
                              <p className="errorsMsg">
                                {" "}
                                Valid Mobile Number Required
                              </p>
                            )}
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Fax
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder="Fax Number"
                                {...register("Fax", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Website
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Website"
                                {...register("Website", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Email
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Email"
                                {...register("Email", {
                                  pattern: /@/,
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Id
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                placeholder=" Id"
                                id="validationDefault07"
                                {...register("id", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>

                          <div className="SubmitFooter">
                            <button type="submit" class="Button_success">
                              <span>Submit</span>
                            </button>
                            <button
                              type="button"
                              class="Button_Danger1"
                              data-dismiss="modal"
                            >
                              <span> Close</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* table start */}
              <div className="row">
                <div className="col-md-12">
                  {!DataLoader && (
                    <>
                      {/* DataLoader */}
                      <p className="text-center mt-5">
                        {" "}
                        <i
                          class="fa fa-spinner fa-spin fa-3x fa-fw"
                          style={{ color: "green", fontSiz: "20px" }}
                        ></i>
                        <span class="sr-only">Loading...</span>
                      </p>
                    </>
                  )}
                  {DataLoader && (
                    <div className="table-responsive vendor_table_box">
                      <Table
                        className="table-striped"
                        pagination={{
                          total: Vendor_Info.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        // bordered
                        dataSource={Vendor_Info}
                        rowKey={(record) => record.id}
                        onChange={console.log("chnage")}
                      />
                    </div>
                  )}
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
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="exampleModalLabel"
                        style={{ fontWeight: "600", color: "#5265ac" }}
                      >
                        <i className="fa fa-pencil m-r-5" /> Update Vendor
                        {UpdateDataFound.id}
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
                    {/* handleSubmit1(onSubmit1) */}
                    {/* vendor update form */}
                    <div class="modal-body ">
                      <div className="row Product_add">
                        {/* vendor form */}
                        <form onSubmit={handleSubmit1(onSubmitUpdate)}>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>{" "}
                              Company/Person Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder=" Company/Person Name"
                                id="validationDefault01"
                                defaultValue={UpdateDataFound.COMPANYNAME}
                                {...register1("CompanyName", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Contact Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Contact Name"
                                id="validationDefault02"
                                defaultValue={UpdateDataFound.CONTACTNAME}
                                {...register1("ContactName", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Contact
                              Title
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Contact Title"
                                defaultValue={UpdateDataFound.CONTACTTITLE}
                                id="validationDefault01"
                                {...register1("ContactTitle", {})}
                              />
                            </div>
                            {/* 
                            {errors.ContactTitle && (
                              <p className="errorsMsg">
                                Contact Title Required
                              </p>
                            )} */}
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Address
                            </label>
                            <div className="col-sm-8">
                              <textarea
                                class="form-control Vendor-form-control"
                                placeholder=" Address"
                                id="validationDefault05"
                                defaultValue={UpdateDataFound.ADDRESS}
                                {...register1("Address", {})}
                                rows="1"
                              ></textarea>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Street
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Street"
                                id="validationDefault01"
                                defaultValue={UpdateDataFound.STREET}
                                {...register1("Street", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Postal Code
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                placeholder="Postal Code"
                                id="validationDefault01"
                                defaultValue={UpdateDataFound.PCODE}
                                {...register1("Pcode", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> City
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="City"
                                id="validationDefault01"
                                defaultValue={UpdateDataFound.CITY}
                                {...register1("City", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span> Country
                            </label>
                            <div className="col-sm-8">
                              <select
                                className="  form-control Vendor-form-control "
                                {...register1("Country", {})}
                              >
                                <option defaultValue={UpdateDataFound.COUNTRY}>
                                  {UpdateDataFound.COUNTRY}
                                </option>
                                <option value="A">Option A</option>
                                <option value="B">Option B</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Mobile
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Mobile number"
                                defaultValue={UpdateDataFound.MOBILE}
                                // defaultValue={`${UpdateDataFound.MOBILE}`}
                                {...register1("Mobile", {
                                  pattern: /^01[35-9]\d{8}/,
                                  maxLength: 11,
                                })}
                              />
                            </div>

                            {errors2.Mobile && (
                              <p className="errorsMsg">
                                {" "}
                                Valid Mobile Number Required
                              </p>
                            )}
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Fax
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder="Fax Number"
                                defaultValue={UpdateDataFound.FAX}
                                {...register1("Fax", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              Website
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Website"
                                defaultValue={UpdateDataFound.WEBSITE}
                                {...register1("Website", {})}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Email
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                class="form-control Vendor-form-control"
                                id="validationDefault03"
                                placeholder=" Email"
                                defaultValue={UpdateDataFound.EMAIL}
                                {...register1("Email", {
                                  pattern: /@/,
                                })}
                              />
                            </div>
                          </div>
                          <div className="mb-2 row d-none">
                            <label
                              for="inputtext"
                              class="col-sm-4 col-form-label"
                            >
                              {" "}
                              <span style={{ color: "red" }}>*</span>Id
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                placeholder=" Id"
                                id="validationDefault07"
                                value={UpdateDataFound.ID}
                                {...register1("id")}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="SubmitFooter">
                            <button type="submit" class="Button_success">
                              <span>Update</span>
                            </button>
                            <button
                              type="button"
                              class="Button_Danger1"
                              data-dismiss="modal"
                            >
                              <span> Close</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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

export default Create_Vendor;
