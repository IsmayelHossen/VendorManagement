/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GetIndividual_VendorActive_data } from "./ApiCall";
import swal from "sweetalert";
import "../../../index.css";
import "../Vendor/vendor.css";
import PNLeftPart from "./PNLeftPart";
import PNRightPart from "./PNRightPart";
import { API_URL } from "./CommonUrlApi";
import BBALOGO from "../../assets/img/BBA-logo.png";
const ProductPurchase = () => {
  useEffect(() => {
    if (4 == 5) {
      window.location.href = "/vendor/service/status";
    }
  }, []);
  const [Edit_delete, SetEditDelete] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [isDelete, setIsDelete] = useState(true);
  const [SelectVendor, setSelectVendor] = useState("");
  const [vendorStatus_details_open, setVendorStatus_details_open] =
    useState(false);
  const [GetVendorActiveData, setGetVendorActiveData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const [SelectVendor_Submit_button, setSelectVendor_Submit_button] =
    useState(true);
  console.log(watch());
  // watch(setSelectVendor(Vendor_select));
  const onSubmit = (data) => {
    if (data.file.length != 0) {
      data.file = data.file[0].name;
    }
    SetVendorData([...Vendor_data, data]);
    console.log(SelectVendor);
    console.log(data);
    reset();

    //  alert();
  };
  const DemoDataDelete = (index) => {
    console.log(Vendor_data);

    // alert(index);
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const arrarydata = Vendor_data;
        var Values = arrarydata.indexOf(index);

        arrarydata.splice(index, 1);

        SetVendorData([...arrarydata]);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const FinalSubmit = (data) => {
    //alert("i m from submit data");
    setSelectVendor("");
    SetVendorData([]);
    console.log(Vendor_data);
    swal("Successfully Product Added!", "success");
  };
  // register("Vendor_select", {
  //   onChange: (e) => SetVendorData(e.target.value),
  // });

  // useEffect(() => {
  //   const getUsers = () => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${getId}`)
  //       .then((res) => {
  //         // You have to send it, as I have done below
  //         if (res.status >= 400) {
  //           throw new Error("Server responds with error!");
  //         }
  //         return res.json();
  //       })
  //       .then(
  //         (users) => {
  //           setGetVendorActiveData(users);

  //           console.log(users);
  //           console.log(getId);
  //         },

  //         (err) => {}
  //       );
  //   };
  //   getUsers();
  // }, [getId]);

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
          {/* card start */}
          <div class="">
            <div class="card-header">
              {/* header */}
              <div className="d-flex justify-content-between Page_header_title_search">
                <h4 className="mt-3">Vendor Product Status</h4>

                <button
                  type="button"
                  class="Button_success float-right"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa fa-plus"></i> <span>Add Product</span>
                </button>
              </div>
            </div>
            <div class="card-body">
              {/* left child PNLeftPart Included */}
              <PNLeftPart />
            </div>
          </div>
          {/* card end */}

          {/* Purchase New product modal */}
          <div
            class="modal custom-modal fade  "
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl " role="document">
              <div class="modal-content">
                <div class=" modal-header">
                  <div className=" modal-title d-flex justify-content-between align-items-center">
                    <h5 style={{ color: "rgba(17, 123, 108, 0.85)" }}>
                      <i class="fa fa-plus"></i> Add New Product
                    </h5>
                  </div>
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
                  <div className="row Product_add ">
                    <div className="col-md-4">
                      {/* vendor add product form */}

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-floating mt-2 ">
                          {SelectVendor != 0 && (
                            <>
                              <input
                                className="form-control"
                                defaultValue={SelectVendor}
                                {...register("Vendor_select")}
                                readOnly
                              />
                            </>
                          )}
                          {SelectVendor == 0 && (
                            <select
                              class=" form-select Vendor-form-control"
                              defaultValue={SelectVendor}
                              {...register("Vendor_select", {
                                onChange: (e) =>
                                  setSelectVendor(e.target.value),
                              })}
                            >
                              <>
                                <option value="Abc Company">Abc Company</option>
                                <option value="CDF Company">CDF Company</option>
                                <option value="GHI Company">GHI Company</option>
                                <option value="Monir">Monir</option>
                              </>
                            </select>
                          )}
                        </div>
                        <div class="form-floating mt-2 ">
                          <select
                            class="form-select Vendor-form-control"
                            id="select"
                            {...register("Product_Category", {
                              required: true,
                            })}
                          >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>

                            <option value="Motor Bike">Motor Bike</option>
                            <option value="Monir">Furniture</option>
                          </select>
                          {errors.Product_Category && (
                            <label
                              for="Product_category"
                              style={{ color: "red" }}
                            >
                              Product Category Required
                            </label>
                          )}
                          {errors.Product_Category == null && (
                            <label for="Product_category">
                              <span style={{ color: "red" }}>*</span>
                              Product Category
                            </label>
                          )}
                        </div>
                        <div class="form-floating mt-2">
                          <input
                            type="text"
                            class="form-control Vendor-form-control"
                            placeholder="Write name"
                            id="Product Name"
                            {...register("Product_name", {
                              required: true,
                            })}
                          />
                          {errors.Product_name && (
                            <label for="Product Name" style={{ color: "red" }}>
                              Product Name Required
                            </label>
                          )}
                          {errors.Product_name == null && (
                            <label for="Product Name">
                              <span style={{ color: "red" }}>*</span> Product
                              Name Required
                            </label>
                          )}
                        </div>
                        <div class="form-floating mt-2 ">
                          <input
                            type="text"
                            class="form-control Vendor-form-control"
                            placeholder="Write Brand Name"
                            id="brand"
                            {...register("Product_brand")}
                          />
                          <label for="model">Write Brand Name</label>
                        </div>
                        <div class="form-floating mt-2 ">
                          <input
                            type="text"
                            class="form-control Vendor-form-control"
                            placeholder="Enter Product Brand"
                            id="model"
                            {...register("Product_model", {
                              required: true,
                            })}
                          />
                          {errors.Product_model && (
                            <label for="model" style={{ color: "red" }}>
                              Model Required
                            </label>
                          )}
                          {errors.Product_model == null && (
                            <label for="model">
                              <span style={{ color: "red" }}>*</span> Model
                              Required
                            </label>
                          )}
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <input
                                type="text"
                                class="form-control Vendor-form-control"
                                placeholder="Enter Product Color"
                                id="color"
                                {...register("Product_color")}
                              />

                              <label for="color">Color</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                placeholder="Enter Product Discount"
                                id="dicount"
                                {...register("Product_discount")}
                              />

                              <label for="dicount">Dicount</label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="Price"
                                placeholder="Enter Price"
                                {...register("Product_price", {
                                  required: true,
                                })}
                              />
                              {errors.Product_price && (
                                <label for="Price" style={{ color: "red" }}>
                                  Price Required
                                </label>
                              )}
                              {errors.Product_price == null && (
                                <label for="Price">
                                  <span style={{ color: "red" }}>*</span> Write
                                  Price
                                </label>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <input
                                type="number"
                                class="form-control Vendor-form-control"
                                id="Quantity"
                                placeholder="Enter Quantity"
                                {...register("Product_quantity", {
                                  required: true,
                                })}
                              />
                              {errors.quantity && (
                                <label for="Quantity" style={{ color: "red" }}>
                                  Quantity Required
                                </label>
                              )}
                              {errors.quantity == null && (
                                <label for="Price">
                                  <span style={{ color: "red" }}>*</span> Write
                                  quantity
                                </label>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <select
                                class="form-select Vendor-form-control"
                                id="condition"
                                {...register("Product_condition", {
                                  required: true,
                                })}
                              >
                                <option value="">Select condition</option>
                                <option value="New">New</option>

                                <option value="Used">Used</option>
                              </select>
                              {errors.condition && (
                                <label for="condition" style={{ color: "red" }}>
                                  Required
                                </label>
                              )}
                              {errors.condition == null && (
                                <label for="condition">
                                  <span style={{ color: "red" }}>*</span>
                                  Condition
                                </label>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-floating mt-2 ">
                              <input
                                class="form-control Vendor-form-control"
                                id="Purchasingdate"
                                type="date"
                                {...register("Product_date", {
                                  required: true,
                                })}
                              />
                              {errors.Product_date && (
                                <label
                                  for="Purchasingdate"
                                  style={{ color: "red" }}
                                >
                                  Date Required
                                </label>
                              )}
                              {errors.Product_date == null && (
                                <label for="Purchasingdate">
                                  <span style={{ color: "red" }}>*</span> Date
                                </label>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="form-floating mt-2 ">
                          <textarea
                            class="form-control Vendor-form-control"
                            placeholder="Product Details"
                            {...register("details")}
                            id="Product_details"
                            style={{ height: "70px" }}
                          ></textarea>
                          <label for="Product_details">Product Details</label>
                        </div>

                        <div class="form-floating mt-2 ">
                          <input
                            type="file"
                            class="form-control Vendor-form-control"
                            id="file"
                            placeholder="Upload"
                            {...register("file")}
                          />
                        </div>

                        <div class="form-floating d-grid  mt-2 mb-2">
                          <button type="submit" class="Button_success ">
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8 mt-sm-2">
                      <div className="table-responsive">
                        {SelectVendor && (
                          <h5>Product Purchasing From {SelectVendor}</h5>
                        )}
                        {/* table start */}
                        <table class="table">
                          <thead>
                            {Vendor_data != null && (
                              <tr>
                                <th>Company</th>
                                <th>Product Category</th>
                                <th>Product Name</th>
                                <th>Brand Name</th>
                                <th>Model</th>
                                <th>Color</th>
                                <th>Product Discount</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Condition</th>
                                <th>Date</th>
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
                                    <td>{row.Vendor_select}</td>

                                    <td key={index}>{row.Product_Category}</td>
                                    <td>{row.Product_name}</td>
                                    <td>{row.Product_brand}</td>
                                    <td>{row.Product_model}</td>
                                    <td>{row.Product_color}</td>
                                    <td>{row.Product_discount}</td>

                                    <td>{row.Product_price}</td>
                                    <td>{row.Product_quantity}</td>
                                    <td>{row.Product_condition}</td>
                                    <td>{row.Product_date}</td>
                                    <td>{row.Product_details}</td>

                                    <td>
                                      {row.file}
                                      {row.file && (
                                        <img
                                          src={`${BBALOGO}`}
                                          style={{ maxWidth: "30px" }}
                                        />
                                      )}
                                      {row.file == null && <p>.....</p>}
                                    </td>
                                    <td onClick={() => DemoDataDelete(index)}>
                                      <i
                                        style={{
                                          color: "red",
                                          fontSize: "20px",
                                        }}
                                        className="fa fa-trash-o m-r-5"
                                      />{" "}
                                    </td>
                                  </tr>
                                </>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      {Vendor_data.length != 0 && (
                        <form onSubmit={handleSubmit1(FinalSubmit)}>
                          <button
                            type="submit"
                            class="Button_success float-right ml-4 mt-2"
                          >
                            Final Submit
                          </button>
                        </form>
                      )}
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <button
                        type="button"
                        class="Button_Danger1 float-right "
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default ProductPurchase;
