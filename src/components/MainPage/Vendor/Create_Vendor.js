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
const Create_Vendor = () => {
  const [DataLoader, setDataLoader] = useState(true);
  const [Edit_delete, SetEditDelete] = useState(true);
  const [Vendor_data, SetVendorData] = useState([]);
  const [Action_button, setActionButton] = useState(false);
  const [EditModal, setEditModa] = useState(false);
  const [Individual_data, setIndividual_data] = useState("");
  const [UpdateDataFound, setUpdateDataFound] = useState({});
  //let getLoginData = JSON.parse(localStorage.getItem("VendorData"));
  //let getLoginData = [];
  useEffect(() => {
    setTimeout(() => {
      setDataLoader(false);
    }, 1000);
  }, []);
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
    if (data) {
      swal({
        title: "Updated Successfully!",

        icon: "success",
        button: "Ok!",
      });
    }

    console.log(data);
  };
  //Action edit,delete
  const Action_bar = (name) => {
    console.log(name);
    setActionButton(true);
  };

  //edit vendor data
  const EditIndividual_vendor = async (id) => {
    if (id) {
      setIndividual_data(id);
      const response = await GetVendor_individualData_update(id);
      if (response) {
        setUpdateDataFound(response.data);
        console.log(response.data);

        console.log(UpdateDataFound);
      }
    }
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
  //table
  const UpdateSubmit = (data) => {
    console.log("ok");
  };
  const columns = [
    {
      title: "Company Name",
      dataIndex: "CompanyName",
    },
    {
      title: "Contact Name",
      dataIndex: "ContactName",
    },

    {
      title: "Contact Title",
      dataIndex: "ContactTitle",
    },

    {
      title: " Address",
      dataIndex: "Address",
    },

    {
      title: "City",
      dataIndex: "City",
    },
    {
      title: "Street",
      dataIndex: "Street",
    },
    {
      title: "Postal Code",
      dataIndex: "Pcode",
    },
    {
      title: "Country",
      dataIndex: "Country",
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
    },
    {
      title: "Fax",
      dataIndex: "Fax",
    },
    {
      title: "Website",
      dataIndex: "Website",
    },
    {
      title: "Email",
      dataIndex: "Email",
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
                    Welcome to Vendor
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
                                <span style={{ color: "red" }}>*</span>Company
                                Name
                              </span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Write name"
                                id="validationDefault01"
                                {...register("CompanyName", {
                                  required: true,
                                })}
                              />
                            </div>

                            {errors.CompanyName && (
                              <span className="errorsMsg">
                                Company Name Required
                              </span>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor"> Contact Name</span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Contact Name"
                                id="validationDefault02"
                                {...register("ContactName", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">
                                <span style={{ color: "red" }}>*</span>Contact
                                Title
                              </span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Write Contact Title"
                                id="validationDefault01"
                                {...register("ContactTitle", {
                                  required: true,
                                })}
                              />
                            </div>

                            {errors.ContactTitle && (
                              <span className="errorsMsg">
                                Contact Title Required
                              </span>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">
                                {" "}
                                <span style={{ color: "red" }}>*</span>Address
                              </span>
                              <textarea
                                class="form-control"
                                placeholder="Write Address"
                                id="validationDefault05"
                                {...register("Address", {
                                  required: true,
                                  minLength: 20,
                                })}
                                rows="1"
                              ></textarea>
                            </div>
                            {errors.Address && (
                              <span className="errorsMsg">
                                Minimum 20 characters required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">
                                <span style={{ color: "red" }}>*</span>City
                              </span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Write City Name"
                                id="validationDefault01"
                                {...register("City", {
                                  required: true,
                                })}
                              />
                            </div>

                            {errors.City && (
                              <span className="errorsMsg">
                                City Name Required
                              </span>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">Street</span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Write Street"
                                id="validationDefault01"
                                {...register("Street", {})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">Postal Code</span>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Postal Code"
                                id="validationDefault01"
                                {...register("Pcode", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">
                                <span style={{ color: "red" }}>*</span>Country
                              </span>
                              <select
                                class="form-control"
                                {...register("Country", {
                                  required: true,
                                })}
                              >
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">
                                  Åland Islands
                                </option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">
                                  American Samoa
                                </option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">
                                  Antigua and Barbuda
                                </option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">
                                  Bouvet Island
                                </option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">
                                  British Indian Ocean Territory
                                </option>
                                <option value="Brunei Darussalam">
                                  Brunei Darussalam
                                </option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">
                                  Burkina Faso
                                </option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">
                                  Cayman Islands
                                </option>
                                <option value="Central African Republic">
                                  Central African Republic
                                </option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">
                                  Christmas Island
                                </option>
                                <option value="Cocos (Keeling) Islands">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">
                                  Congo, The Democratic Republic of The
                                </option>
                                <option value="Cook Islands">
                                  Cook Islands
                                </option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">
                                  Cote D'ivoire
                                </option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">
                                  Czech Republic
                                </option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">
                                  Dominican Republic
                                </option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">
                                  Equatorial Guinea
                                </option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value="Faroe Islands">
                                  Faroe Islands
                                </option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">
                                  French Guiana
                                </option>
                                <option value="French Polynesia">
                                  French Polynesia
                                </option>
                                <option value="French Southern Territories">
                                  French Southern Territories
                                </option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">
                                  Guinea-bissau
                                </option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">
                                  Heard Island and Mcdonald Islands
                                </option>
                                <option value="Holy See (Vatican City State)">
                                  Holy See (Vatican City State)
                                </option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">
                                  Iran, Islamic Republic of
                                </option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">
                                  Korea, Democratic People's Republic of
                                </option>
                                <option value="Korea, Republic of">
                                  Korea, Republic of
                                </option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">
                                  Lao People's Democratic Republic
                                </option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value="Liechtenstein">
                                  Liechtenstein
                                </option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">
                                  Macedonia, The Former Yugoslav Republic of
                                </option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">
                                  Marshall Islands
                                </option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">
                                  Micronesia, Federated States of
                                </option>
                                <option value="Moldova, Republic of">
                                  Moldova, Republic of
                                </option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">
                                  Netherlands Antilles
                                </option>
                                <option value="New Caledonia">
                                  New Caledonia
                                </option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">
                                  Norfolk Island
                                </option>
                                <option value="Northern Mariana Islands">
                                  Northern Mariana Islands
                                </option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">
                                  Papua New Guinea
                                </option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">
                                  Russian Federation
                                </option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">
                                  Saint Helena
                                </option>
                                <option value="Saint Kitts and Nevis">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">
                                  Saint Pierre and Miquelon
                                </option>
                                <option value="Saint Vincent and The Grenadines">
                                  Saint Vincent and The Grenadines
                                </option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">
                                  Sao Tome and Principe
                                </option>
                                <option value="Saudi Arabia">
                                  Saudi Arabia
                                </option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">
                                  Sierra Leone
                                </option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">
                                  Solomon Islands
                                </option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">
                                  South Africa
                                </option>
                                <option value="South Georgia and The South Sandwich Islands">
                                  South Georgia and The South Sandwich Islands
                                </option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">
                                  Syrian Arab Republic
                                </option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">
                                  Tanzania, United Republic of
                                </option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">
                                  Trinidad and Tobago
                                </option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">
                                  Turkmenistan
                                </option>
                                <option value="Turks and Caicos Islands">
                                  Turks and Caicos Islands
                                </option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="United States">
                                  United States
                                </option>
                                <option value="United States Minor Outlying Islands">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">
                                  Virgin Islands, British
                                </option>
                                <option value="Virgin Islands, U.S.">
                                  Virgin Islands, U.S.
                                </option>
                                <option value="Wallis and Futuna">
                                  Wallis and Futuna
                                </option>
                                <option value="Western Sahara">
                                  Western Sahara
                                </option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                              </select>
                            </div>

                            {errors.Country && (
                              <span className="errorsMsg">
                                Country Name Required
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
                              <span class="title_vendor"> Fax</span>
                              <input
                                type="number"
                                class="form-control"
                                id="validationDefault03"
                                placeholder="Enter Fax Number"
                                {...register("Fax", {})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor"> Website</span>
                              <input
                                type="text"
                                class="form-control"
                                id="validationDefault03"
                                placeholder="Enter Website"
                                {...register("Website", {})}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group custom_group">
                              <span class="title_vendor">Email</span>
                              <input
                                type="email"
                                class="form-control"
                                id="validationDefault03"
                                placeholder="Enter Email"
                                {...register("Email", {
                                  pattern: /@/,
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.Email && (
                              <span className="errorsMsg">
                                Email field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="">
                          <div class="form-group custom_group">
                            <span class="title_vendor">
                              <span style={{ color: "red" }}>*</span>Id
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
              {/* table start */}
              {DataLoader && (
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
              {DataLoader != true && (
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
              )}

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
                        <i class="fa fa-plus"></i> Update Vendor
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
                                placeholder="Write name"
                                defaultValue={UpdateDataFound.id}
                                {...register1("Firstname", {})}
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
                                <span style={{ color: "red" }}>*</span>Service
                                Type
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
                                <span style={{ color: "red" }}>*</span>
                                Pre-Request
                              </span>
                              <textarea
                                class="form-control"
                                placeholder="Pre Request"
                                id="validationDefault05"
                                defaultValue={UpdateDataFound.title}
                                {...register1("Vendor_PreRequest", {
                                  // required: true,
                                  // minLength: 20,
                                })}
                                rows="3"
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
                                defaultValue={UpdateDataFound.body}
                                {...register1("Vendor_details")}
                                id="inputAddress"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div class="form-group custom_group">
                            <span class="title_vendor">
                              <span style={{ color: "red" }}>*</span>Id
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
