import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";
import DetailView from "../DetailView";
import ErrorPage from "./ErrorPage";
import AnotherDoner from "./AnotherDoner"

export default function Navigation() {
  return (
    <div className="navigation">
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink activeclassname="active" to="anotherDoner">
        Another Döner
      </NavLink>
      <Routes>
        <Route path="anotherDoner" element={<AnotherDoner />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}
