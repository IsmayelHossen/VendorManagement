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
          <Route index element={<Dashboard />} />
          {/* condidtions are given here  
          if user is correct according to the authentications rule then allow to access this routes */}
          {/* {isLogdIn && ( */}
          <>
            <Route exact path="/vendor/add" element={<Create_Vendor />} />
            <Route
              exact
              path="/vendor/product/status"
              element={<ProductPurchase />}
            />
            <Route
              exact
              path="/vendor/product/order"
              element={<ProductOrdered />}
            />
            <Route
              exact
              path="/vendor/product/completion"
              element={<ProductCompletion />}
            />
            <Route
              exact
              path="/vendor/service/status"
              element={<ServicePurchase />}
            />
            <Route
              exact
              path="/vendor/service/order"
              element={<ServiceOrdered />}
            />
            <Route
              exact
              path="/vendor/service/completion"
              element={<ServiceOrdered />}
            />
            <Route exact path="*" element={<NoPage />} />
          </>

          <Route exact path="/test" element={<Testcase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
