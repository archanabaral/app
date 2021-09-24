import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../component/Navbar";

function PrivateRoute({ currentUser, component: Component, ...rest }) {
  const { user } = currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <>
            <Navbar /> <Component {...props}></Component>{" "}
          </>
        ) : (
          <Redirect to="/"></Redirect>
        )
      }
    />
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.userSigninReducer.currentUser,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
