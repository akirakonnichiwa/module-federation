import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Routes, Route, BrowserRouter, Link, Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "white",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter basename="app2">
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: "666px" }}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Typography>
      <Link to="extra" className={classes.root}>
        <Button size="small">Page 1</Button>
      </Link>
      <Link to="*" className={classes.root}>
        <Button size="small">Page 2</Button>
      </Link>
      <Routes>
        <Route path="extra" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
