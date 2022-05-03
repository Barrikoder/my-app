import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";

import DetailView from "../DetailView";
import ErrorPage from "./ErrorPage";

export default function Navigation() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink activeclassname="active" to="details">
        Details
      </NavLink>
      <Routes>
        <Route path="details" element={<DetailView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
