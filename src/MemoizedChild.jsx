import React from 'react';

const MemoizedChild = ({ name }) => {
  console.log('Memoized Child component re-rendered!');

  return (
    <div style={{ backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '5px' }}>
      <h4>Memoized Child Component</h4>
      <p>Hello, {name}!</p>
      <p>Ye component sirf tab re-render hota hai jab props change hote hain</p>
      <small>Check console for re-render logs</small>
    </div>
  );
};

// React.memo ka use karke component ko wrap karte hain
// Ye component ko memoize kar deta hai
export default React.memo(MemoizedChild); 