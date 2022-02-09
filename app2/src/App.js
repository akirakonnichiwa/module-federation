import React from "react";

function App(props) {
  return (
    <div style={{ display: "flex", marginTop: "15px", marginBottom: "15px" }}>
      <p>Num: {props.number}</p>
      <button style={{ margin: "5px" }} onClick={props.addNum}>
        +
      </button>
      <button style={{ margin: "5px" }} onClick={props.decreaseNum}>
        -
      </button>
      <h5>Second Element</h5>
    </div>
  );
}

export default App;
