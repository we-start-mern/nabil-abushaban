import React, { Fragment } from 'react';

export const Input = React.forwardRef((props, ref) => {
  return (
      <input type={props.type} placeholder={props.placeholder} ref={ref} value={props.value} />
  );
});
