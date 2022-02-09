import React, { useState } from "react";
import ReactDOM from "react-dom";

const App2 = React.lazy(() => import("app2/App"));
const App3 = React.lazy(() => import("app3/App"));

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1
        style={{
          background: "black",
          color: "white",
          margin: "0",
          padding: "16px",
        }}
      >
        Main (1st component)
      </h1>
      <div style={{ marginLeft: "18px" }}>
        <React.Suspense fallback="Loading...">
          <App2
            number={number}
            addNum={() => setNumber(number + 1)}
            decreaseNum={() => setNumber(number - 1)}
          />
          <App3 />
        </React.Suspense>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
