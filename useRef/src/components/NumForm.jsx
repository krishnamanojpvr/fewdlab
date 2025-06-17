import React, { useState, useRef, useEffect } from 'react';

const NumericInputWithRenderCount = () => {
  const [value, setValue] = useState('');
  const renderCount = useRef(0);
  const prevInput = useRef('');
  useEffect(() => {
    renderCount.current += 1;

  });

  const handleChange = (e) => {
    const num = e.target.value;
    prevInput.current = value;
    if (!isNaN(num)) {
      setValue(num);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Numeric Input Tracker</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter a number"
        style={{ padding: '5px', fontSize: '16px' }}
      />
      <p>Current value: {value}</p>

      <p>Prev Value : {prevInput.current}</p>
      <p>Render count: {renderCount.current}</p>
      {/* <Child renderCount={renderCount}/> */}
    </div>
  );
};


// function Child({renderCount}){
//     return(
//         <>
//         <h1>{renderCount.current}</h1>
//         <button onClick={()=> renderCount.current +=1 }></button>
//         </>
//     );
// }
export default NumericInputWithRenderCount;