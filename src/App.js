import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/initialpage/NotFound";
import Dashboard from "./components/MainPage/Main/Dashboard/Dashboard";
import logo from "./logo.svg";
import Sidebar from "./components/initialpage/Sidebar/sidebar";
import Header from "./components/initialpage/Sidebar/header";
import Create_Vendor from "./components/MainPage/Vendor/Create_Vendor";
import Testcase from "./components/MainPage/Vendor/Testcase";
import ServicePurchase from "./components/MainPage/Vendor/ServicePurchase";
import ProductOrdered from "./components/MainPage/Vendor/ProductOrdered";
import ProductPurchase from "./components/MainPage/Vendor/ProductPurchase";
import ServiceOrdered from "./components/MainPage/Vendor/ServiceOrdered";
import ProductCompletion from "./components/MainPage/Vendor/ProductCompletion";
import Protected from "./components/MainPage/Vendor/Protected";
import NoPage from "./components/MainPage/Vendor/NoPage";
import PrivateRoute from "./components/MainPage/Vendor/PrivateRoute";
import Login from "./components/MainPage/Vendor/Login";
import Testcase2 from "./components/MainPage/Vendor/Testcase2";
import Signup from "./components/MainPage/Vendor/Signup";

function App() {
  const [isLogdIn, setisLodIn] = useState(false);
  const [isAuth, setisAuth] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          {/* <Route
            exact
            path="/"
            element={
              <>
                <Sidebar />
                <Header />
              </>
            }   
          ></Route> */}
          {/* <Protected path="/" isAuth={isAuth} element={<Dashboard />} /> */}
          {/* index means path is "/" */}

          <Route index element={<Create_Vendor />} />

          <>
            {/* this the authentication system for routes start */}
            {/* <Route path="/*" element={<PrivateRoute />}>
              <Route path="vendor/add" element={<Create_Vendor />} />
            </Route> */}
            {/* this the authentication system for routes end */}
            <Route path="/vendor/add" element={<Create_Vendor />} />
            <Route
              path="/vendor/product/status"
              element={<ProductPurchase />}
            />
            <Route path="/vendor/product/order" element={<ProductOrdered />} />
            <Route
              path="/vendor/product/completion"
              element={<ProductCompletion />}
            />
            <Route
              path="/vendor/service/status"
              element={<ServicePurchase />}
            />
            <Route path="/vendor/service/order" element={<ServiceOrdered />} />
            <Route
              path="/vendor/service/completion"
              element={<ServiceOrdered />}
            />
            <Route path="*" element={<NoPage />} />
          </>

          <Route exact path="/test" element={<Testcase />} />
          <Route exact path="/test2" element={<Testcase2 />} />
          <Route path="vendor/login" element={<Login />} />
          <Route path="vendor/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
