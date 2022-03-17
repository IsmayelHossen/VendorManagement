import React from "react";
import { Route, Redirect, useNavigate } from "react-router-dom";
function Protected({ isAuth: isAuth, element: Element, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Element />;
        } else {
          return (
            <useNavigate
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default Protected;
