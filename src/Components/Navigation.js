import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";


export default function Navigation() {
//   const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
const navigate = useNavigate();

  return (
<div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
          <button>
          <NavLink to="/App">Home</NavLink>
        </button>
         <button>
          <NavLink
            to="/DetailView"
          >
            Detailed
          </NavLink>
        </button>
        <br />
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(1)}>fwd</button>
        </div>
      {/* <Routes>
        <Route
          path="/App"
          element={
            <App />
          }
        />
        <Route
          path="/Posts"
          element={
              <Posts />
        }
        />
      </Routes> */}
      </div>
  );
    }
