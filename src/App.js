import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/initialpage/NotFound";
import Dashboard from "./components/MainPage/Main/Dashboard/Dashboard";
import logo from "./logo.svg";
import Sidebar from "./components/initialpage/Sidebar/sidebar";
import Header from "./components/initialpage/Sidebar/header";
import Create_Vendor from "./components/MainPage/Vendor/Create_Vendor";
import Testcase from "./components/MainPage/Vendor/Testcase";
import PurchaseNew from "./components/MainPage/Vendor/PurchaseNew";
function App() {
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
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/vendor/add" element={<Create_Vendor />} />
          <Route exact path="/vendor/status" element={<PurchaseNew />} />

          <Route exact path="/test" element={<Testcase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
