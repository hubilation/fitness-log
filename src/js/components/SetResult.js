import React from 'react';

const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '10px 0',
    width: '100%'
  };

const repStyle = {
    width: "250px",
    height: "150px",
    border: "1px solid black",
    margin: "0 auto"
  };

const dividerStyle = {
    height: '100px',
    width: '1px',
    border: '1px solid black',
    flex: 'initial',
    justifyContent: 'center'
}

const SetResult = ()=>{
    return (
        <div
          style={rowStyle}
        >
          <div style={{ flex: 1 }}>
            <div
              style={repStyle}
            />
          </div>
          <div style={{ flex: 1, fontSize: "75px", textAlign: "center" }}>
            135
          </div>
        </div>
    )
}

export default SetResult;