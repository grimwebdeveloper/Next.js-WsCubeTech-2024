import React from 'react';

const Child = React.memo(() => {
  console.log('Child Component');
  return <div>Child</div>;
});

export default Child;
