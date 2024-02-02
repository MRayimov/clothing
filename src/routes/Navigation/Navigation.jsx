import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Fragment>
      <NavLink to={""}>
        <div>Logo</div>
      </NavLink>
      <div>
        <NavLink to={"shop"}>shop</NavLink>
        <NavLink to={""}>home</NavLink>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
