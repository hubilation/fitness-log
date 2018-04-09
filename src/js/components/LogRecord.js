import React from "react";
import TextField from "material-ui/TextField";
import Cell from "./Cell";
import SetResult from './SetResult';

const flexContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  width: "100%"
};

const generateCells = (setCount, repCount, targetWeight) => {
  let cells = [];
  for (let i = 0; i < setCount; i++) {
    cells.push(<Cell value={i} index={i} />);
  }
  return cells;
};

const logContainerStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  flexFlow: "column"
};

const LogRecord = () => (
  <div>
    <div style={logContainerStyle}>
      <div style={{ width: "900px", display: "flex" }}>
        <div
          style={{
            fontSize: "48px",
            flex: 1,
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div>Bench Press</div>
          <div>3x 8-12</div>
        </div>
        <div
          style={{
            flex: 1,
            fontSize: "140px",
            textAlign: "center",
            fontWeight: 700
          }}
        >
          135
        </div>
      </div>
      <div
        style={{
          width: "900px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center"
        }}
      >
        <SetResult />
        <SetResult />
        <SetResult />
      </div>
    </div>
  </div>
);

export default LogRecord;
