import React from 'react';

const cellStyles = {
    height: '75px',
    width: '75px',
    border: '1px solid black',
    flex: '0 1 auto'
}

const inputStyles= {
    fontSize: '36px',
    width: '100%',
    textAlign: 'center',
    border: 'none',
    padding: '15px 0'
}

const Cell = ({value, index, handleChange}) =>{ 
    return (
    <div style={styles}>
        <input type="text" value={value} onChange={handleChange} style={inputStyles}/>
    </div>
)}

export default Cell;