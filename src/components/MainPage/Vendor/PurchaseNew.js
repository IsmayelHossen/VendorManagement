/**
 * Signin Firebase
 */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GetIndividual_VendorActive_data } from "../Vendor/ApiCall";
import swal from "sweetalert";
import "../../../index.css";
import "../Vendor/vendor.css";
import PNLeftPart from "./PNLeftPart";
import PNRightPart from "./PNRightPart";
import { API_URL } from "./CommonUrlApi";
import BBALOGO from "../../assets/img/BBA-logo.png";
const PurchaseNew = () => {
  const [Edit_delete, SetEditDelete] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [isDelete, setIsDelete] = useState(true);
  const [SelectVendor, setSelectVendor] = useState("");
  const [vendorStatus_details_open, setVendorStatus_details_open] =
    useState(false);
  const [GetVendorActiveData, setGetVendorActiveData] = useState({});
  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {},
  });
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const [SelectVendor_Submit_button, setSelectVendor_Submit_button] =
    useState(true);
  console.log(watch());
  // watch(setSelectVendor(Vendor_select));
  const onSubmit = (data) => {
    if (!data.Firstname) {
      alert("Field must not be empty");
    } else {
      if (data.file.length != 0) {
        data.file = data.file[0].name;
      }
      SetVendorData([...Vendor_data, data]);
      console.log(SelectVendor);
      console.log(data);
      reset();

      //  alert();
    }
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
              <div className="row">
                <div className="col-md-6">
                  <h3
                    className="card-title  product_card_title"
                    style={{
                      marginBottom: "-30px",
                      marginTop: "17px !important",
                    }}
                  >
                    Vendor Product Status
                  </h3>
                </div>
                <div className="col-md-6">
                  <button
                    type="button"
                    class="Button_success float-right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i class="fa fa-plus"></i> <span>Add New</span>
                  </button>
                </div>
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
            class="modal fade  "
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl " role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="d-flex ml-5 mx-auto ">
                    <i class="fa fa-plus"></i> Add New Product
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
                      <div className="selectVendor">
                        {/* select Vendor form start */}
                        {/* <div class="form-floating mt-2 ">
                          {SelectVendor != 0 && (
                            <>
                              <input
                                className="form-control"
                                value={SelectVendor}
                                disabled
                              />
                            </>
                          )}
                          {SelectVendor == 0 && (
                            <select
                              class=" form-control Vendor-form-control"
                              {...register("Vendor_select")}
                              onChange={(e) => setSelectVendor(e.target.value)}
                            >
                              <>
                                <option value="Abc Company">Abc Company</option>
                                <option value="CDF Company">CDF Company</option>
                                <option value="GHI Company">GHI Company</option>
                                <option value="Monir">Monir</option>
                              </>
                            </select>
                          )}
                        </div> */}
                        {/* select Vendor form end */}
                      </div>
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
                              class=" form-control Vendor-form-control"
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
                        <div class="form-floating mt-2">
                          <input
                            type="text"
                            class="form-control Vendor-form-control"
                            placeholder="Write name"
                            id="Name"
                            {...register("Firstname")}
                          />
                          <label for="Name">
                            <span style={{ color: "red" }}>*</span>Name
                          </label>
                        </div>
                        <div class="form-floating mt-2 ">
                          <input
                            type="email"
                            class="form-control Vendor-form-control"
                            placeholder="Enter email"
                            id="Email"
                            {...register("Email")}
                          />
                          <label for="Email">Email</label>
                        </div>
                        <div class="form-floating mt-2 ">
                          <input
                            type="number"
                            class="form-control Vendor-form-control"
                            id="Mobile"
                            placeholder="Enter Mobile number"
                            {...register("Mobile")}
                          />
                          <label for="Mobile">
                            <span style={{ color: "red" }}>*</span>Mobile
                          </label>
                        </div>
                        <div class="form-floating mt-2 ">
                          <select
                            class="form-control Vendor-form-control"
                            id="select"
                            {...register("Vendor_Service")}
                          >
                            <option value="Electronics">Electronics</option>
                            <option value="Exports">Exports</option>
                            <option value="Motor Bike">Motor Bike</option>
                            <option value="Monir">Monir</option>
                          </select>
                        </div>
                        <div class="form-floating mt-2 ">
                          <textarea
                            class="form-control Vendor-form-control"
                            placeholder="Pre Request"
                            {...register("Vendor_PreRequest")}
                            id="Vendor_PreRequest"
                            style={{ height: "90px" }}
                          ></textarea>
                          <label for="Vendor_PreRequest">
                            Vendor PreRequest
                          </label>
                        </div>
                        <div class="form-floating mt-2 ">
                          <textarea
                            class="form-control Vendor-form-control"
                            placeholder="Pre Request"
                            {...register("Vendor_details")}
                            id="Vendor_details"
                            style={{ height: "90px" }}
                          ></textarea>
                          <label for="Vendor_details">Vendor Details</label>
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

                        <div class="form-floating d-grid  mt-2 ">
                          <button type="submit" class="Button_success ">
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8">
                      <div className="table-responsive">
                        <h3>Service From {SelectVendor}</h3>
                        {/* table start */}
                        <table class="table">
                          <thead>
                            {Vendor_data != null && (
                              <tr>
                                <th>Comany</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Service</th>
                                <th>Pre Request</th>
                                <th>Details</th>
                                <th>File/Image</th>
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
                                    <td key={index}>{row.Firstname}</td>
                                    <td>{row.Email}</td>
                                    <td>{row.Mobile}</td>
                                    <td>{row.Vendor_Service}</td>
                                    <td>{row.Vendor_PreRequest}</td>
                                    <td>{row.Vendor_details}</td>
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
                    <div class="modal-footer" style={{ marginTop: "10px" }}>
                      <button
                        type="button"
                        class="Button_primary "
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

export default PurchaseNew;
