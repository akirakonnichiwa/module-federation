import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import { Routes, Route, BrowserRouter, Link, Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "white",
  },
}));

const App2 = React.lazy(() => import("app2/App"));
const App3 = React.lazy(() => import("app3/App"));

function App() {
  const classes = useStyles();
  // const [number, setNumber] = useState(0);
  return (
    <BrowserRouter>
      <>
        <Box mb={3}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/" className={classes.root}>
                <Typography variant="caption" mt={0.2} mr={2}>
                  MICRO FRONTEND
                </Typography>
              </Link>
              <Link to="app2" className={classes.root}>
                <Button color="inherit">Cards</Button>
              </Link>
              <Link to="app3" className={classes.root}>
                <Button color="inherit">Change theme</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <div style={{ marginLeft: "18px" }}>
          <React.Suspense fallback="Loading...">
            <Routes>
              <Route path="app2" element={<App2 />} />
              <Route path="app3" element={<App3 />} />
              <Route path="*" element={<Navigate to="app2" />} />
            </Routes>
          </React.Suspense>
        </div>
      </>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
