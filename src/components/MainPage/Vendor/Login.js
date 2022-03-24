import React from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
const Login = (props) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:4328/loginSignup/login", data)
      .then((res) => {
        //   console.log(res.data.message);
        if (res.data.Success) {
          swal({
            title: "Logged in Successfully",
            icon: "success",
            button: "Ok!",
          });
          reset();
          console.log(res.data.message);

          console.log(res.data.access_token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const id = params.id;
  const Navigat = useNavigate();
  const location = useLocation();
  let pathname = location.pathname;
  let cdf = 5;
  const hello = () => {
    Navigat(`/vendor/add/${cdf}`);
  };
  return (
    <>
      <div className="page-wrapper">
        <div
          className="mt-5 mb-2 mx-auto  border p-3"
          style={{ maxWidth: "350px" }}
        >
          <form onSubmit={handleSubmit(onsubmit)}>
            <h2>Login Page</h2>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                {...register("email", {
                  required: true,
                })}
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                {...register("password", {
                  required: true,
                })}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-success ml-4" to="/vendor/signup">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
